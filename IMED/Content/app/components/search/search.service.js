class SearchService {
    constructor($http, $httpParamSerializer, $rootScope) {
        'ngInject';

        this.searchNewbusiness = (request) => {
            const  options = {
                url: '/api/Claims/GetClaimsBusyProcessing?',
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
                url: '/api/Claims/GetClaimsPreparingPayment?' + $httpParamSerializer(request),
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
                url: '/api/Claims/GetClaimsTaxFinalisation?' + $httpParamSerializer(request),
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

export default SearchService;
