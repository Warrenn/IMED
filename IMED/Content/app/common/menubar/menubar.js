import angular from 'angular';
import uiRouter from 'angular-ui-router';
import menubarComponent from './menubar.component';
import template_xs from './menubar.xs.html'
import template_sm from './menubar.sm.html'
import template_md from './menubar.md.html'
import template_lg from './menubar.lg.html'

let menubarModule = angular
    .module('menubar', [
        uiRouter
    ])
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider
            .state('menubar', {
                url: '/menubar',
                component: 'menubar'
            })
            .state('menubar.xs', {
                template: template_xs
            })
            .state('menubar.sm', {
                template: template_sm
            })
            .state('menubar.md', {
                template: template_md
            })
            .state('menubar.lg', {
                template: template_lg
            });
    })
    .component('menubar', menubarComponent)
    .name;

export default menubarModule;
