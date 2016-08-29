import angular from 'angular';
import MediaQuery from  './mediaQuery/mediaQuery'
import Layout from  './layout/layout'
import Marker from  './marker/marker'
import Menubar from  './menubar/menubar'
import Filters from  './filters/filters'
import './common.less';

let commonModule = angular
    .module('app.common', [
        MediaQuery,
        Layout,
        Marker,
        Menubar,
        Filters
    ])
    .name;

export default commonModule;
