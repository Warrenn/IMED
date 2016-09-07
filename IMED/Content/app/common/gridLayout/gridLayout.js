import angular from 'angular';
import gridLayoutComponent from './gridLayout.component';

let gridLayoutModule = angular
    .module('common.gridLayout', [])
    .component('gridLayout', gridLayoutComponent)
    .name;

export default gridLayoutModule;
