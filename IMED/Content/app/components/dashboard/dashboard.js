import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dashboardComponent from './dashboard.component';
import payrollPanelComponent from './payrollPanel.component';
import markerComponent from '../../common/marker/marker';
import newBusinessPanelTemplate from './newBusinessPanel.html'
import claimsPanelTemplate from './claimsPanel.html'
import dashboardService from './dashboard.service'

let dashboardModule = angular
    .module('dashboard', [
        uiRouter,
        markerComponent
    ])
    .config(($stateProvider) => {
        'ngInject';

        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                component: 'dashboard'
            });
            
    })
    .service('dashboardService', dashboardService)
    .component('dashboard', dashboardComponent)
    .component('payrollPanel', payrollPanelComponent)
    .component('newBusinessPanel', {
        bindings: { summary: '=' },
        template: newBusinessPanelTemplate
    })
    .component('claimsPanel', {
        bindings: { summary: '=' },
        template: claimsPanelTemplate
    })
    .name;

export default dashboardModule;
