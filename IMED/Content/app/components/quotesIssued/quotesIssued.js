import angular from 'angular';
import uiRouter from 'angular-ui-router';
import quotesIssuedComponent from './quotesIssued.component';
import quotesIssuedService from './quotesIssued.service';

let quotesIssuedModule = angular
    .module('quotesIssued', [
        uiRouter
    ])
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider
            .state('quotesIssued', {
                url: '/quotesIssued',
                component: 'quotesIssued'
            });
    })
    .component('quotesIssued', quotesIssuedComponent)
    .service('quotesIssuedService', quotesIssuedService)
    .name;

export default quotesIssuedModule;
