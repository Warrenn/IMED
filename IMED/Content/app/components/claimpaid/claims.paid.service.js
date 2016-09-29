class ClaimsPaidService {
	constructor($http, $httpParamSerializer) {
		'ngInject';

		this.getPaidClaims = (request) => {
			const  options = {
				url: '/api/ClaimsPaid/GetPaidClaims?' + $httpParamSerializer(request),
				method: 'GET'
			}
			return $http(options).then((response) => {
				return {
					response,
					request
				}
			});
		}

		this.getDraftClaims = (request)=> {
		    const options = {
		        url: '/api/ClaimsPaid/GetPaidClaims?' + $httpParamSerializer(request),
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

export default ClaimsPaidService;
