import GridLayoutControllerBase from '../../common/gridLayout/gridLayout.controller.base';

class ClaimsBusyProcessingController extends GridLayoutControllerBase {
    constructor(claimsProcessingService, $rootScope) {
        'ngInject';

        super($rootScope);
        this.serverRequest = claimsProcessingService.getBusyProcessingClaims;
    }
}

export default ClaimsBusyProcessingController;