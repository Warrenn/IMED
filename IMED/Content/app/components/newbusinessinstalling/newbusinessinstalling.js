import angular from 'angular';
import uiRouter from 'angular-ui-router';


import newBusinessInstallingPayrollSupportInprogressComponent from './newBusinessInstalling.payRollSupportInProgress.component';
import newBusinessInstallingSchemeInstalledComponent from './newBusinessInstalling.schemeInstalled.component';


import newBusinessInstallingService from './newBusinessInstalling.service';


let newbusinessinstallingModule = angular
    .module('newbusinessinstalling', [
        uiRouter
    ])
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider
            .state('newbusinessinstalling', {
                url: '/newbusinessinstalling',
                abstract: true,
                template: '<ui-view></ui-view>',

                data: {
                    tabs: {
                        'newbusinessinstalling.installing': 'SCHEME INSTALLED',
                        'newbusinessinstalling.payrollsupport': 'PAYROLL SUPPORT IN PROGRESS'
                    }
                }
            })
        
        .state('newbusinessinstalling.payrollsupport', {
            url: '/payrollsupport',
            component: 'newBusinessInstallingPayRollSupport'
        })
            .state('newbusinessinstalling.installing', {
                url: '/installing',
                component: 'newBusinessInstallingSchemInstalled'
            });
    })
    .component('newBusinessInstallingPayRollSupport', newBusinessInstallingPayrollSupportInprogressComponent)
    .component('newBusinessInstallingSchemInstalled', newBusinessInstallingSchemeInstalledComponent)
    .service('newBusinessInstallingService', newBusinessInstallingService)

    .name;

export default newbusinessinstallingModule;

