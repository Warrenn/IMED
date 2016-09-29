import angular from 'angular';
import uiRouter from 'angular-ui-router';
import claimpaidComponent from './claim.paid.component';
import claimdraftComponent from './claim.draft.component'
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
            })
        .state('claimdraft',{
            url:'/claimdraft',
            component:'claimDraft'
        });
    })
    .component('claimDraft',claimdraftComponent)
    .component('claimPaid', claimpaidComponent)
    .service('claimsPaidService', claimpaidService)
    .name;

export default claimpaidModule;
