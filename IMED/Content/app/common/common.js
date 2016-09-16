import angular from 'angular';
import MediaQuery from  './mediaQuery/mediaQuery'
import Layout from  './layout/layout'
import GridLayout from  './gridLayout/gridLayout'
import Marker from  './marker/marker'
import Menubar from  './menubar/menubar'
import Filters from  './filters/filters'
import UserProfile from  './userProfile/userProfile'
import Interceptors from  './interceptors/interceptors'
import LoadingSpinner from  './loadingSpinner/loadingSpinner'
import './common.less';

let commonModule = angular
    .module('app.common', [
        MediaQuery,
        Layout,
        Marker,
        Menubar,
        Filters,
        GridLayout,
        UserProfile,
        Interceptors,
        LoadingSpinner
    ])
    .name;

export default commonModule;
