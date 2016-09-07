

class NewBusinessInstallingService {

	constructor($http, $httpParamSerializer) {
		'ngInject';

		this.getNewBusinessInstalling = (request) => {
			const  options = {
			    url: '/api/Installing/GetSchemeInstalled?' + $httpParamSerializer(request),
				method: 'GET'
			}
			return $http(options).then((response) => {
				return {
					response,
					request
				}
			});
		},

        this.getNewBusinessPayRollSupportInProgress = (request) => {
        	const  options = {
        	    url: '/api/Installing/GetPayRollSupportInProgress?' + $httpParamSerializer(request),
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

export default NewBusinessInstallingService;