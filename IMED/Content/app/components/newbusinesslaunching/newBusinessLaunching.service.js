class NewBusinessLaunchingService {
    constructor($http, $httpParamSerializer) {
        'ngInject';

        this.getNewBusinessLaunchingCompleted = (request) => {
            const  options = {
                url: '/api/NewBusinessLaunching/Completed?' + $httpParamSerializer(request),
                method: 'GET'
            }
            return $http(options).then((response) => {
                return {
                    response,
                    request
                }
            });
        },

        this.getNewBusinessLaunchingIncomplete = (request) => {
            const  options = {
                url: '/api/NewBusinessLaunching/Incomplete?' + $httpParamSerializer(request),
                method: 'GET'
            }
            return $http(options).then((response) => {
                return {
                    response,
                    request
                }
            });
        }
    }
}

export default NewBusinessLaunchingService;