import angular from 'angular';
import uiRouter from 'angular-ui-router';
import sectionComponent from './section.component';
import template_xs from './section.xs.html'
import template_sm from './section.sm.html'
import template_md from './section.md.html'
import template_lg from './section.lg.html'

let sectionModule = angular
    .module('section', [
        uiRouter
    ])
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider
            .state('section', {
                url: '/section',
                component: 'section'
            })
            .state('section.xs', {
                template: template_xs
            })
            .state('section.sm', {
                template: template_sm
            })
            .state('section.md', {
                template: template_md
            })
            .state('section.lg', {
                template: template_lg
            });
    })
    .component('section', sectionComponent)
    .name;

export default sectionModule;
