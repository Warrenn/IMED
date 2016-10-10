class ClaimsProcessingService {
    constructor($http, $httpParamSerializer) {
        'ngInject';

        this.getBusyProcessingClaims = (request) => {
            const  options = {
                url: '/api/Payroll/GetNotSubmittedPayroll?' + $httpParamSerializer(request),
                method: 'GET'
            }
            return $http(options).then((response) => {
                return {
                    response,
                    request
                }
            });
        }
        this.getPreparingPaymentClaims = (request) => {
            const  options = {
                url: '/api/Payroll/GetProcessedPayroll?' + $httpParamSerializer(request),
                method: 'GET'
            }
            return $http(options).then((response) => {
                return {
                    response,
                    request
                }
            });
        }
        this.getTaxFinalisationClaims = (request) => {
            const  options = {
                url: '/api/Payroll/GetNotProcessedPayroll?' + $httpParamSerializer(request),
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

export default ClaimsProcessingService;
