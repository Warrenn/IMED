import angular from 'angular';
import uiRouter from 'angular-ui-router';


import InstallingPayrollSupportInprogressComponent from './installing.payRollSupportInProgress.component';
import InstallingSchemeInstalledComponent from './installing.schemeInstalled.component';


import InstallingService from './installing.service';


let installingModule = angular
    .module('installing', [
        uiRouter
    ])
    .config(($stateProvider) => {
        "ngInject";
        $stateProvider
            .state('installing', {
                url: '/installing',
                abstract: true,
                template: '<ui-view></ui-view>',

                data: {
                    tabs: {
                        'installing.installing': 'SCHEME INSTALLED',
                        'installing.payrollsupport': 'PAYROLL SUPPORT IN PROGRESS'
                    }
                }
            })
        
        .state('installing.payrollsupport', {
            url: '/payrollsupport',
            component: 'installingPayRollSupport'
        })
            .state('installing.installing', {
                url: '/installing',
                component: 'installingSchemInstalled'
            });
    })
    .component('installingPayRollSupport', InstallingPayrollSupportInprogressComponent)
    .component('installingSchemInstalled', InstallingSchemeInstalledComponent)
    .service('installingService', InstallingService)

    .name;

export default installingModule;

