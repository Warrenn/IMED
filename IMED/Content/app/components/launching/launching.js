import angular from 'angular';
import uiRouter from 'angular-ui-router';

import launchingCompletedComponent from './launching.completed.component';
import launchingInCompleteComponent from './launching.incomplete.component';

import launchingService from './launching.service';



let launchingModule = angular
    .module('launching', [
        uiRouter
    ])
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider
            .state('launching', {
                url: '/launching',
                abstract: true,
                template: '<ui-view></ui-view>',

                data: {
                    tabs: {
                        'launching.incomplete': 'Incomplete',
                        'launching.completed': 'Completed'
                    }
                }


            })
         .state('launching.incomplete', {
             url: '/incomplete',
             component: 'launchingIncomplete'
         })
            .state('launching.completed', {
                url: '/completed',
                component: 'launchingCompleted'
         });
    })
 
    .component('launchingIncomplete', launchingInCompleteComponent)
    .component('launchingCompleted', launchingCompletedComponent)
     .service('launchingService', launchingService)
    .name;

export default launchingModule;
