import angular from 'angular';
import uiRouter from 'angular-ui-router';
import loadingSpinnerComponent from './loadingSpinner.component';

let loadingSpinnerModule = angular
    .module('loadingSpinner', [
        uiRouter
    ])
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider
            .state('loadingSpinner', {
                url: '/loadingSpinner',
                component: 'loadingSpinner'
            });
    })
    .component('loadingSpinner', loadingSpinnerComponent)
    .name;

export default loadingSpinnerModule;
