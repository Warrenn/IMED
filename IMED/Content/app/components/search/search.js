import angular from 'angular';
import uiRouter from 'angular-ui-router';

import SearchClaimsComponent from './search.claims.component';
import SearchNewbusinessComponent from './search.newbusiness.component';
import SearchPayrollComponent from './search.payroll.component';

import SearchService from './search.service';

let searchModule = angular
    .module('search', [
        uiRouter
    ])
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider
        .state('search.claims', {
            url: '/search/claims',
            component: 'searchClaimsComponent'
        })
        .state('search.newbusiness', {
            url: '/searchnewbusiness',
            component: 'searchNewbusinessComponent'
        })
        .state('search.payroll', {
            url: '/search/payroll',
            component: 'searchPayrollComponent'
        });
    })
    .component('searchClaimsComponent', SearchClaimsComponent)
    .component('searchNewbusinessComponent', SearchNewbusinessComponent)
    .component('searchPayrollComponent', SearchPayrollComponent)
    .service('searchService', SearchService)
    .name;

export default searchModule;
