import angular from 'angular';
import Dashboard from './dashboard/dashboard';
import QuotesIssued from './quotesIssued/quotesIssued';

let componentModule = angular
    .module('app.components', [
        Dashboard,
        QuotesIssued
    ])
    .name;

export default componentModule;
