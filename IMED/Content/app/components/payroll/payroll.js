import angular from 'angular';
import uiRouter from 'angular-ui-router';
import payrollComponent from './payroll.component';

let payrollModule = angular
    .module('payroll', [
        uiRouter
    ])
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider
            .state('payroll', {
                url: '/payroll',
                component: 'payroll'
            });
    })
    .component('payroll', payrollComponent)
    .name;

export default payrollModule;
