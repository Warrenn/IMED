class QuotesIssuedService {
    constructor($http, $httpParamSerializer) {
		'ngInject';

		this.getIssuedQoutes = (request) => {
			const  options = {
				url: '/api/Quotes/GetIssuedQoutes?' + $httpParamSerializer(request),
				method: 'GET'
			}
			
			return $http(options).then((response) => {
		        return {
		            response,
		            request,
		        }

		    });
		}
	}
}

export default QuotesIssuedService;
