class PayrollService {
    constructor($http, $httpParamSerializer) {
        'ngInject';

        this.getNotSubmittedPayroll = (request) => {
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
        this.getProcessedPayroll = (request) => {
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
        this.getNotProcessedPayroll = (request) => {
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

export default PayrollService;
