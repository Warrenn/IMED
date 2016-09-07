class DashboardService {
    constructor($http, $httpParamSerializer, localStorageService) {
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

		this.saveSettings= (settings) => {
		    localStorageService.set('dashboardService.settings', settings);
		}

		this.getDashboardSettings= () => {
		    var settings = localStorageService.get('dashboardService.settings');
		    if (!settings) {
		        settings = {
		            showNewBusiness: true,
		            showPayroll: true,
		            showClaims: true
		        }
		        this.saveSettings(settings);
		    }
		    return settings;
		}
	}
}

export default DashboardService;
