import angular from 'angular';
import Dashboard from './dashboard/dashboard';
import QuotesIssued from './quotesIssued/quotesIssued';
import NewBusinessLaunching from './newbusinesslaunching/newBusinessLaunching';
import NewBusinessInstalling from './newbusinessinstalling/newBusinessInstalling';

let componentModule = angular
    .module('app.components', [
        Dashboard,
        QuotesIssued,
        NewBusinessLaunching,
        NewBusinessInstalling

    ])
    .name;

export default componentModule;
