import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dashboardComponent from './dashboard.component';
import template_xs from './dashboard.xs.html'
import template_sm from './dashboard.sm.html'

let dashboardModule = angular
    .module('dashboard', [
        uiRouter
    ])
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                component: 'dashboard'
            })
            .state('dashboard.xs', {
                template: template_xs
            })
            .state('dashboard.sm', {
                template: template_sm
            })
            .state('dashboard.lg', {
                template: template_sm
            });
    })
    .component('dashboard', dashboardComponent)
    .name;

export default dashboardModule;
