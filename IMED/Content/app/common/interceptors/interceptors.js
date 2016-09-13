import angular from 'angular';
import unAuthenticatedInterceptor from './unAuthenticated.factory';
import loggingInterceptor from './logging.factory';

let interceptorsModule = angular
    .module('common.interceptors', [])
    .service('unAuthenticatedInterceptor', unAuthenticatedInterceptor)
    .service('loggingInterceptor', loggingInterceptor)
    .name;

export default interceptorsModule;
