import angular from 'angular';
import userProfileService from './userProfile.service';
import uiRouter from 'angular-ui-router';

let userProfileModule = angular
    .module('common.userProfile', [
        uiRouter
    ])
    .service('userProfileService', userProfileService)
    .name;

export default userProfileModule;