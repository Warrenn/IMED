import angular from 'angular';
import zeropad from './zeropad';

let filtersModule = angular
    .module('filters', [])
    .filter('zeropad', zeropad)
    .name;

export default filtersModule;
