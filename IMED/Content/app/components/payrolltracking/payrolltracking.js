import angular from 'angular';
import uiRouter from 'angular-ui-router';
import payrolltrackingComponent from './payrolltracking.component';

let payrolltrackingModule = angular
    .module('payrolltracking', [
        uiRouter
    ])
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider
            .state('payrolltracking', {
                url: '/payrolltracking',
                component: 'payrolltracking'
            });
    })
    .component('payrolltracking', payrolltrackingComponent)
    .name;

export default payrolltrackingModule;
