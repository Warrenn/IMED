import GridLayoutControllerBase from '../../common/gridLayout/gridLayout.controller.base';

class ClaimsDraftController extends GridLayoutControllerBase {
    constructor(claimsPaidService, $rootScope) {
        'ngInject';

        super($rootScope);
        this.serverRequest = claimsPaidService.getDraftClaims;
    }
}

export default ClaimsDraftController;