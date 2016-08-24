import angular from 'angular';
import Dashboard from './dashboard/dashboard';

let componentModule = angular
    .module('app.components', [
        Dashboard
    ])
    .name;

export default componentModule;
