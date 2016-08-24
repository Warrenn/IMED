let mediaQueryFactory = function($window, $state, $transitions) {
    'ngInject';

    let listeners = {},
        queryLists = {},
        mediaStates = [],
        currentMediaState = '';

    init();

    return {
        monitorMediaStates: monitorMediaStates,
        getCurrentState: getCurrentState
    }

    function init() {
        $transitions.onBefore(true, (transition) => {
            const newState = transition.$to().name;
            return isMediaState(newState) || $state.target(newState + '.' + currentMediaState);
        });
    }

    function getCurrentState() {
        return currentMediaState;
    }

    function redirectCallback(stateId, list) {
        const newState = $state.$current.name;
        if (!newState) {
            return;
        }

        currentMediaState = stateId;
        (isMediaState(newState)) ?
            $state.go('^.' + stateId, { queryList: list }) :
            $state.go('.' + stateId, { queryList: list });
    }

    function isMediaState(state) {
        if (!state) {
            return false;
        }

        const parts = state.split('.');
        return mediaStates.indexOf(parts[parts.length - 1]) >= 0;
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

export default mediaQueryFactory;