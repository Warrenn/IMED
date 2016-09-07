import angular from 'angular';
import uiRouter from 'angular-ui-router';

import newBusinessLaunchingCompletedComponent from './newBusinessLaunching.completed.component';
import newBusinessLaunchingInCompleteComponent from './newBusinessLaunching.incomplete.component';

import newBusinessLaunchingService from './newBusinessLaunching.service';



let newbusinesslaunchingModule = angular
    .module('newbusinesslaunching', [
        uiRouter
    ])
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider
            .state('newBusinessLaunching', {
                url: '/newbusinesslaunching',
                abstract: true,
                template: '<ui-view></ui-view>',

                data: {
                    tabs: {
                        'newBusinessLaunching.incomplete': 'Incomplete',
                        'newBusinessLaunching.completed': 'Completed'
                    }
                }


            })
         .state('newBusinessLaunching.incomplete', {
             url: '/incomplete',
             component: 'newBusinessLaunchingIncomplete'
         })
            .state('newBusinessLaunching.completed', {
                url: '/completed',
                component: 'newBusinessLaunchingCompleted'
         });
    })
 
    .component('newBusinessLaunchingIncomplete', newBusinessLaunchingInCompleteComponent)
    .component('newBusinessLaunchingCompleted', newBusinessLaunchingCompletedComponent)
     .service('newBusinessLaunchingService', newBusinessLaunchingService)
    .name;

export default newbusinesslaunchingModule;
