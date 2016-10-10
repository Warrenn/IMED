import angular from 'angular';
import uiRouter from 'angular-ui-router';
import payrollnotprocessedComponent from './payrollTracking.notprocessed.component';
import payrollprocessedComponent from './payrollTracking.processed.component';
import payrollnotsubmittedComponent from './payrollTracking.notsubmitted.component';
import PayrollTrackingService from './payrollTracking.service';

let payrollTrackingModule = angular
    .module('payrollTracking', [
        uiRouter
    ])
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider
            .state('payrollTracking', {
                url: '/payrollTracking',
                abstract: true,
                template: '<ui-view></ui-view>',
                data: {
                    tabs: {                                            
                        'payrollTracking.notsubmitted': 'Not Submitted',                      
                        'payrollTracking.notprocessed': 'Not Processed',
                        'payrollTracking.processed': 'Processed'
                    }
                }

            })
        .state('payrollTracking.notsubmitted', {
            url: '/notsubmitted',
            component: 'payrollTrackingNotSubmitted'
        })
        .state('payrollTracking.notprocessed', {
            url: '/notprocessed',
            component: 'payrollTrackingNotProcessed'
        })
        .state('payrollTracking.processed', {
            url: '/processed',
            component: 'payrollTrackingProcessed'
        })
    })
   .component('payrollTrackingNotSubmitted', payrollnotsubmittedComponent)
   .component('payrollTrackingNotProcessed', payrollnotprocessedComponent)
   .component('payrollTrackingProcessed', payrollprocessedComponent)
   .service('payrollTrackingService', PayrollTrackingService)
    .name;

export default payrollTrackingModule;
