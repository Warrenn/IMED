import angular from 'angular';
import uiRouter from 'angular-ui-router';
import mediaQueryFactory from './mediaQuery.factory';

let mediaQueryModule = angular
    .module('common.mediaQuery', [
        uiRouter
    ])
    .factory('mediaQueryFactory', mediaQueryFactory)
    .name;

export default mediaQueryModule;