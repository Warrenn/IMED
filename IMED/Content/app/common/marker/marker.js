import angular from 'angular';
import template from './marker.html';
import './marker.less';

let markerModule = angular.module('marker', [])
    .component('marker', {
        bindings: {
            markerType: '<',
            amount: '='
        },
        template
    })
    .name;

export default markerModule;
