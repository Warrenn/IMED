import angular from 'angular';
import uiRouter from 'angular-ui-router';
import layoutComponent from './layout.component';
import footer_template from './footer.html';
import menubar from '../menubar/menubar';
import loadingSpinner from '../loadingSpinner/loadingSpinner';

let layoutModule = angular
    .module('common.layout', [
        uiRouter,
        menubar,
        loadingSpinner,
        'ionic-pullup'
    ])
    .component('layout', layoutComponent)
    .component('footer', {
        template: footer_template
    })
    .name;

export default layoutModule;
