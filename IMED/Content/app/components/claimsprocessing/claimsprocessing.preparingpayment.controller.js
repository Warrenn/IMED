import GridLayoutControllerBase from '../../common/gridLayout/gridLayout.controller.base';

class ClaimsProcessingPreparingPaymentController extends GridLayoutControllerBase {
    constructor(claimsProcessingService, $rootScope) {
        'ngInject';

        super($rootScope);
        this.serverRequest = claimsProcessingService.getPreparingPaymentClaims;
    }
}

export default ClaimsProcessingPreparingPaymentController;

