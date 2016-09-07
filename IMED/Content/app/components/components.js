import angular from 'angular';
import Dashboard from './dashboard/dashboard';
import QuotesIssued from './quotesIssued/quotesIssued';
import Launching from './launching/launching';
import Installing from './installing/installing';
import Payroll from './payroll/payroll';

let componentModule = angular
    .module('app.components', [
        Dashboard,
        QuotesIssued,
        Launching,
        Installing,
        Payroll
    ])
    .name;

export default componentModule;
