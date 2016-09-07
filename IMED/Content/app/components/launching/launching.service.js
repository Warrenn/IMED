class launchingService {
    constructor($http, $httpParamSerializer) {
        'ngInject';

        this.getiaunchingCompleted = (request) => {
            const  options = {
                url: '/api/Launching/Completed?' + $httpParamSerializer(request),
                method: 'GET'
            }
            return $http(options).then((response) => {
                return {
                    response,
                    request
                }
            });
        },

        this.getiaunchingIncomplete = (request) => {
            const  options = {
                url: '/api/Launching/Incomplete?' + $httpParamSerializer(request),
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

export default launchingService;
