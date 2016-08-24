import angular from 'angular';
import MediaQuery from  './mediaQuery/mediaQuery'

let commonModule = angular
    .module('app.common', [
        MediaQuery
    ])
    .name;

export default commonModule;
