import angular from 'angular';
import gridLayoutComponent from './gridLayout.component';

let gridLayoutModule = angular
    .module('gridLayout', [])
    .component('gridLayout', gridLayoutComponent)
    .name;

export default gridLayoutModule;
