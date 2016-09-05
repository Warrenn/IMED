import angular from 'angular';
import Dashboard from './dashboard/dashboard';
import QuotesIssued from './quotesIssued/quotesIssued';
import Test from './test/test';

let componentModule = angular
    .module('app.components', [
        Dashboard,
        QuotesIssued,
        Test
    ])
    .name;

export default componentModule;
