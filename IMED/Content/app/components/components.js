import angular from 'angular';
import Dashboard from './dashboard/dashboard';
import QuotesIssued from './quotesIssued/quotesIssued';
import launching from './launching/launching';
import NewBusinessInstalling from './installing/installing';

let componentModule = angular
    .module('app.components', [
        Dashboard,
        QuotesIssued,
        launching,
        NewBusinessInstalling

    ])
    .name;

export default componentModule;
