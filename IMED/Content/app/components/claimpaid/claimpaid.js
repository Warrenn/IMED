import angular from 'angular';
import uiRouter from 'angular-ui-router';
import claimpaidComponent from './claim.paid.component';
import claimpaidService from './claims.paid.service';

let claimpaidModule = angular
    .module('claimpaid', [
        uiRouter
    ])
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider
            .state('claimpaid', {
                url: '/claimpaid',
                component: 'claimPaid'
            });
    })
    .component('claimPaid', claimpaidComponent)
    .service('claimsPaidService', claimpaidService)
    .name;

export default claimpaidModule;
