import GridLayoutControllerBase from '../../common/gridLayout/gridLayout.controller.base';

class ClaimsPaidController extends GridLayoutControllerBase {
    constructor(claimsPaidService, $rootScope) {
        'ngInject';

        super($rootScope);
        this.serverRequest = claimsPaidService.getPaidClaims;
    }
}

export default ClaimsPaidController;