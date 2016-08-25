import angular from 'angular';
import MediaQuery from  './mediaQuery/mediaQuery'
import './common.less';

let commonModule = angular
    .module('app.common', [
        MediaQuery
    ])
    .name;

export default commonModule;
