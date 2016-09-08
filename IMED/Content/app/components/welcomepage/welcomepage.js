import angular from 'angular';
import uiRouter from 'angular-ui-router';
import welcomepageComponent from './welcome.page.component';

let welcomepageModule = angular
    .module('welcomepage', [
        uiRouter
    ])
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider
            .state('welcomepage', {
                url: '/',
                component: 'welcomepage'
            });
    })
    .component('welcomepage', welcomepageComponent)
    .name;

export default welcomepageModule;
