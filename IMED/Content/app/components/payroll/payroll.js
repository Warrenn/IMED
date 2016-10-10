import angular from 'angular';
import uiRouter from 'angular-ui-router';
import payrolloverdueComponent from './payroll.overdue.component';
import payrollsubmittedComponent from './payroll.submitted.component';
import payrollnotsubmittedComponent from './payroll.notsubmitted.component';
import PayrollService from './payroll.service';

let payrollModule = angular
    .module('payroll', [
        uiRouter
    ])
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider
            .state('payroll', {
                url: '/payroll',
                abstract: true,
                template: '<ui-view></ui-view>',
                data: {
                    tabs: {                                            
                        'payroll.notsubmitted': 'Not Submitted',                      
                        'payroll.submitted': 'Submitted',
                        'payroll.overdue' :'Overdue'
                    }
                }

            })
        .state('payroll.notsubmitted', {
            url: '/notsubmitted',
            component: 'payrollNotSubmitted'
        })
        .state('payroll.submitted', {
            url: '/notprocessed',
            component: 'payrollSubmitted'
        })
        .state('payroll.overdue', {
            url: '/overdue',
            component: 'payrollOverdue'
        })
    })
   .component('payrollNotSubmitted', payrollnotsubmittedComponent)
   .component('payrollSubmitted', payrollsubmittedComponent)
    .component('payrollOverdue', payrolloverdueComponent)
   .service('payrollService', PayrollService)
    .name;

export default payrollModule;
