import angular from 'angular';
import uiRouter from 'angular-ui-router';
import navbarComponent from './navbar.component';
import template_xs from './navbar.xs.html'
import template_sm from './navbar.sm.html'
import template_md from './navbar.md.html'
import template_lg from './navbar.lg.html'

let navbarModule = angular
    .module('navbar', [
        uiRouter
    ])
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider
            .state('navbar', {
                url: '/navbar',
                component: 'navbar'
            })
            .state('navbar.xs', {
                template: template_xs
            })
            .state('navbar.sm', {
                template: template_sm
            })
            .state('navbar.md', {
                template: template_md
            })
            .state('navbar.lg', {
                template: template_lg
            });
    })
    .component('navbar', navbarComponent)
    .name;

export default navbarModule;
