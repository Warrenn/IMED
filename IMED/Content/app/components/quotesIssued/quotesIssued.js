import angular from 'angular';
import uiRouter from 'angular-ui-router';
import quotesIssuedRoute1Component from './quotesIssued.route1.component';
import quotesIssuedRoute2Component from './quotesIssued.route2.component';

let quotesIssuedModule = angular
    .module('quotesIssued', [
        uiRouter
    ])
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider
            .state('quotesIssued', {
                url: '/quotesIssued',
                abstract: true,
                template: '<ui-view></ui-view>',
                data: {
                    tabs: {
                        'quotesIssued.route1': 'The Route of one',
                        'quotesIssued.route2': 'The Route of two'
                    }
                }
            })
            .state('quotesIssued.route1', {
                url: '/route1',
                component: 'quotesIssuedRoute1'
            })
            .state('quotesIssued.route2', {
                url: '/route2',
                component: 'quotesIssuedRoute2'
            });
    })
    .component('quotesIssuedRoute1', quotesIssuedRoute1Component)
    .component('quotesIssuedRoute2', quotesIssuedRoute2Component)
    .name;

export default quotesIssuedModule;
