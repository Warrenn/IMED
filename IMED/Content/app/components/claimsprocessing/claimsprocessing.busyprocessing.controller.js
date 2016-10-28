import ClaimsProcessingControllerBase from './claimsprocessing.controller';

class ClaimsBusyProcessingController extends ClaimsProcessingControllerBase {
    constructor(claimsProcessingService, $rootScope, $scope, $ionicPopover) {
        'ngInject';

        super(claimsProcessingService, $rootScope, $scope, $ionicPopover);
        this.serverRequest = claimsProcessingService.getBusyProcessingClaims;
    }
}

export default ClaimsBusyProcessingController;