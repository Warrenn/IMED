class DashboardService {
	constructor($http, $httpParamSerializer) {
		'ngInject';

		this.getNewBusinessSummary = () => {
			const  options = {
			    url: '/api/Dashboard/GetNewBusinessSummary',
				method: 'GET'
			}
		    return $http(options);
		}

		this.getPayrollSummary = () => {
			const  options = {
			    url: '/api/Dashboard/GetPayrollSummary',
				method: 'GET'
			}
		    return $http(options);
		}

		this.getClaimsSummary = () => {
			const  options = {
			    url: '/api/Dashboard/GetClaimsSummary',
				method: 'GET'
			}
		    return $http(options);
		}
	}
}

export default DashboardService;
