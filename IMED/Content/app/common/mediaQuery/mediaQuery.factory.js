let MediaQueryFactoryClass = function($window, $rootScope) {
    'ngInject';

    let listeners = {},
        queryLists = {},
        mediaStates = [],
        currentMediaState = '';

    return {
        monitorMediaStates: monitorMediaStates,
        getCurrentState: getCurrentState
    }

    function getCurrentState() {
        return currentMediaState;
    }

    function redirectCallback(stateId, list) {
        currentMediaState = stateId;
        $rootScope.$broadcast('mediaQuery.stateChange', {
            state: stateId,
            list
        });
        $rootScope.$apply();
    }

    function monitorMediaStates(config) {
        if (!config || (Object.keys(config).length == 0)) {
            throw 'config routes are required but were not supplied';
        }

        mediaStates = Object.keys(config);
        currentMediaState = mediaStates[0];

        for (let i = 0; i < mediaStates.length; i++) {
            const mediaState = mediaStates[i],
                queryList = $window.matchMedia(config[mediaState]);

            currentMediaState = queryList.matches ? mediaState : currentMediaState;
            listeners[mediaState] = (list) => {
                list.matches && redirectCallback(mediaState, list);
            };
            queryList.addListener(listeners[mediaState]);
            queryLists[mediaState] = queryList;
        }

        redirectCallback(currentMediaState, queryLists[currentMediaState]);
    }
}

MediaQueryFactoryClass.wrapAsMediaComponent = (component) => {
    const states = Object.keys(component.mediaTemplates || {}),
        controller = component.controller;

    if ((states.length === 0) || !controller) {
        return component;
    }

    component.template = (mediaQueryFactory) => {
        'ngInject';

        if (!('currentMediaState' in controller.prototype)) {

            Object.defineProperty(controller.prototype, 'currentMediaState', {
                get: () => {
                    return mediaQueryFactory.getCurrentState();
                }
            });
        }

        let template = '<div ng-switch on="$ctrl.currentMediaState">';

        for (let i = 0; i < states.length; i++) {
            const mediaState = states[i],
                mediaTemplate = component.mediaTemplates[mediaState];
            template += '<div ng-switch-when="' + mediaState + '" >' + mediaTemplate + '</div>';
        }

        return template + '</div>';
    }

    return component;
}

export default MediaQueryFactoryClass;