import angular from 'angular';
import uiRouter from 'angular-ui-router';
import layoutComponent from './layout.component';
import footer_template from './footer.html';
import menubar from '../menubar/menubar';
import loading_spinner_template from './loadingSpinner.html'

let layoutModule = angular
    .module('common.layout', [
        uiRouter,
        menubar,
        'ionic-pullup'
    ])
    .component('layout', layoutComponent)

    .component('footer', {
      template: footer_template
    }) 
   .component('loading', {
         template: loading_spinner_template
   })   
    .name;

export default layoutModule;
