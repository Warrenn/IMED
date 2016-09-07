import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngSanitize from 'angular-sanitize';
import Common from './common/common';
import Components from './components/components';
import ionic from '../../node_modules/ionic-starter/www/lib/ionic/js/ionic';
import ngIonic from '../../node_modules/ionic-starter/www/lib/ionic/js/ionic-angular';
import ionicPullUp from '../../bower_components/ionic-pullup/dist/ion-pullup';
import bootstrap from 'angular-ui-bootstrap/dist/ui-bootstrap-tpls';
import angularLocalStorage from 'angular-local-storage/dist/angular-local-storage';
import moment from 'moment';

//HighCharts configuration
var Highcharts = require('highcharts');
window.Highcharts = Highcharts;
require('highcharts/modules/exporting')(Highcharts);
import highChartsNg from 'highcharts-ng';

angular
    .module('app', [
        uiRouter,
        Common,
        Components,
        ngAnimate,
        ngSanitize,
        highChartsNg,
        'ionic',
        'ui.bootstrap',
        'LocalStorageModule'
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
    .config(($httpProvider) => {
        'ngInject';

        $httpProvider
            .interceptors
            .push(($log) => {
                'ngInject';

                return {
                    'responseError': (rejection) => {
                        $log.error('$httpProvider', rejection);
                    }
                }
            });
    })
    .config(($provide) => {
        'ngInject';

        $provide
            .decorator('$exceptionHandler', ($delegate, $log, $injector) => {
                'ngInject';

                return (exception, cause) => {
                    $delegate(exception, cause);
                    var errorData = { exception: exception, cause: cause };

                    $log.error(exception.message, errorData);
                };
            });
    })
    .component('app', {template:'<ui-view></ui-view>'});

angular.bootstrap(window.document.body, ['app'], { strictDi: true });
