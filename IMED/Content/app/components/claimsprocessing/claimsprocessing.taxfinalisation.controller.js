import ClaimsProcessingControllerBase from './claimsprocessing.controller';

class ClaimsProcessingTaxFinalisationController extends ClaimsProcessingControllerBase {
    constructor(claimsProcessingService, $rootScope, $scope, $ionicPopover) {
        'ngInject';

        super(claimsProcessingService, $rootScope, $scope, $ionicPopover);
        this.serverRequest = claimsProcessingService.getBusyProcessingClaims;
    }
}

export default ClaimsProcessingTaxFinalisationController;

