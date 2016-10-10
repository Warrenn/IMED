import GridLayoutControllerBase from '../../common/gridLayout/gridLayout.controller.base';

class ClaimsProcessingTaxFinalisationController extends GridLayoutControllerBase {
    constructor(claimsProcessingService, $rootScope) {
        'ngInject';

        super($rootScope);
        this.serverRequest = claimsProcessingService.getTaxFinalisationClaims;
    }
}

export default ClaimsProcessingTaxFinalisationController;

