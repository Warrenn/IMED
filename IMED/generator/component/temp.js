import angular from 'angular';
import uiRouter from 'angular-ui-router';
import <%= name %>Component from './<%= name %>.component';
import template_xs from './<%= name %>.xs.html'
import template_sm from './<%= name %>.sm.html'
import template_md from './<%= name %>.md.html'
import template_lg from './<%= name %>.lg.html'

let <%= name %>Module = angular
    .module('<%= name %>', [
        uiRouter
    ])
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider
            .state('<%= name %>', {
                url: '/<%= name %>',
                component: '<%= name %>'
            })
            .state('<%= name %>.xs', {
                template: template_xs
            })
            .state('<%= name %>.sm', {
                template: template_sm
            })
            .state('<%= name %>.md', {
                template: template_md
            })
            .state('<%= name %>.lg', {
                template: template_lg
            });
    })
    .component('<%= name %>', <%= name %>Component)
    .name;

export default <%= name %>Module;
