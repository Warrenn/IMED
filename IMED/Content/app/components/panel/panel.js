import angular from 'angular';
import uiRouter from 'angular-ui-router';
import panelComponent from './panel.component';
import template_xs from './panel.xs.html'
import template_sm from './panel.sm.html'
import template_md from './panel.md.html'
import template_lg from './panel.lg.html'

let panelModule = angular
    .module('panel', [
        uiRouter
    ])
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider
            .state('panel', {
                url: '/panel',
                component: 'panel'
            })
            .state('panel.xs', {
                template: template_xs
            })
            .state('panel.sm', {
                template: template_sm
            })
            .state('panel.md', {
                template: template_md
            })
            .state('panel.lg', {
                template: template_lg
            });
    })
    .component('panel', panelComponent)
    .name;

export default panelModule;
