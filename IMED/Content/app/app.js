import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import Layout from './common/layout/layout';
import ionic from '../../node_modules/ionic-starter/www/lib/ionic/js/ionic';
import ngIonic from '../../node_modules/ionic-starter/www/lib/ionic/js/ionic-angular';
import ionicPullUp from '../../bower_components/ionic-pullup/dist/ion-pullup';

angular
    .module('app', [
        uiRouter,
        Common,
        Components,
        Layout,
        ngAnimate,
        ngSanitize,
        'ionic'
    ])
    .run((mediaQueryFactory, $ionicPlatform) => {
        'ngInject';

        mediaQueryFactory.monitorMediaStates({
            'xs': '(max-width: 768px)',
            'sm': '(min-width: 768px) and (max-width: 1200px)',
            'lg': '(min-width: 1200px)'
        });

        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })
    .config(($locationProvider) => {
        'ngInject';
        // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
        // #how-to-configure-your-server-to-work-with-html5mode
        $locationProvider.html5Mode(true).hashPrefix('!');
    })
    .component('app', AppComponent);

angular.bootstrap(window.document.body, ['app']);
