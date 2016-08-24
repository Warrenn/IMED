import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
//import 'normalize.css';

angular.bootstrap(window.document.body, ['app']);

angular
    .module('app', [
        uiRouter,
        Common,
        Components
    ])
    .run((mediaQueryFactory) => {
        'ngInject';

        mediaQueryFactory.monitorMediaStates({
            'xs': '(max-width: 768px)',
            'sm': '(min-width: 768px) and (max-width: 1200px)',
            'lg': '(min-width: 1200px)'
        });
    })
    .config(($locationProvider) => {
        'ngInject';
        // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
        // #how-to-configure-your-server-to-work-with-html5mode
        $locationProvider.html5Mode(true).hashPrefix('!');
    })
    .component('app', AppComponent);
