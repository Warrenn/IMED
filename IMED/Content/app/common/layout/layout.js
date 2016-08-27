import angular from 'angular';
import uiRouter from 'angular-ui-router';
import layoutComponent from './layout.component';
import footer_template from './footer.html';

let layoutModule = angular
    .module('layout', [
        uiRouter,
        'ionic-pullup'
    ])
    .component('layout', layoutComponent)
    .component('footer', {
        template: footer_template
    })
    .name;

export default layoutModule;
