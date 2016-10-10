/// <reference path="payroll.notsubmitted.component.js" />
class PayrollTrackingService {
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

        this.getOverduePayroll = (request) => {
            const  options = {
                url: '/api/Payroll/GetOverduePayroll?' + $httpParamSerializer(request),
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

export default PayrollTrackingService;
