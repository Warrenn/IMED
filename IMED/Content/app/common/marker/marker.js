import angular from 'angular';
import uiRouter from 'angular-ui-router';
import markerComponent from './marker.component';

let markerModule = angular.module('marker', [
  uiRouter
])

.component('marker', markerComponent)

.name;

export default markerModule;
