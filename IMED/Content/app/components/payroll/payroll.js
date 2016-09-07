import angular from 'angular';
import uiRouter from 'angular-ui-router';
import payrollnotprocessedComponent from './payroll.notprocessed.component';
import payrollprocessedComponent from './payroll.processed.component';
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
                        'payroll.notprocessed': 'Not Processed',
                        'payroll.processed': 'Processed'
                    }
                }

            })
        .state('payroll.notsubmitted', {
            url: '/notsubmitted',
            component: 'payrollNotSubmitted'
        })
        .state('payroll.notprocessed', {
            url: '/notprocessed',
            component: 'payrollNotProcessed'
        })
        .state('payroll.processed', {
            url: '/processed',
            component: 'payrollProcessed'
        });
        
    })
   .component('payrollNotSubmitted', payrollnotsubmittedComponent)
   .component('payrollNotProcessed', payrollnotprocessedComponent)
   .component('payrollProcessed', payrollprocessedComponent)
   .service('payrollService', PayrollService)
    .name;

export default payrollModule;
