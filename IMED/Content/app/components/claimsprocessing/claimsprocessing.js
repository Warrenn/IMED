import angular from 'angular';
import uiRouter from 'angular-ui-router';

import BusyProcessingComponent from './claimsprocessing.busyprocessing.component';
import PreparingPaymentComponent from './claimsprocessing.preparingpayment.component';
import TaxFinalisationComponent from './claimsprocessing.taxfinalisation.component';

import ClaimsProcessingService from './claimsprocessing.service';

let claimsprocessingModule = angular
    .module('claimsprocessing', [
        uiRouter
    ])
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider
            .state('claimsprocessing', {
                url: '/claimsprocessing',
                abstract: true,
                template: '<ui-view></ui-view>',
                data: {
                    tabs: {
                        'claimsprocessing.busyprocessing' : 'Busy Processing',
                        'claimsprocessing.taxfinalisation' : 'Tax Finalisation',
                        'claimsprocessing.preparingpayment' : 'Preparing Payment'
                    }
                }
            })
        .state('claimsprocessing.busyprocessing', {
            url: '/busyprocessing',
            component: 'claimsProcessingBusyProcessingComponent'
        })
        .state('claimsprocessing.preparingpayment', {
            url: '/preparingpayment',
            component: 'claimsProcessingPreparingPaymentComponent'
        })
        .state('claimsprocessing.taxfinalisation', {
            url: '/taxfinalisation',
            component: 'claimsProcessingTaxFinalisationComponent'
        })
    })
    .component('claimsProcessingBusyProcessingComponent', BusyProcessingComponent)
    .component('claimsProcessingPreparingPaymentComponent', PreparingPaymentComponent)
    .component('claimsProcessingTaxFinalisationComponent', TaxFinalisationComponent)
    .service('claimsProcessingService', ClaimsProcessingService)
    .name;

export default claimsprocessingModule;
