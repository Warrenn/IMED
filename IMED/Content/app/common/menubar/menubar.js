import angular from 'angular';
import uiRouter from 'angular-ui-router';
import menubarComponent from './menubar.component';

let menubarModule = angular
    .module('common.menubar', [
        uiRouter
    ])
    .component('menubar', menubarComponent)
    .name;

export default menubarModule;
