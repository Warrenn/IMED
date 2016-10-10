import GridLayoutControllerBase from '../../common/gridLayout/gridLayout.controller.base';

class PayrollNotSubmittedController extends GridLayoutControllerBase {
    constructor(payrollTrackingService, $rootScope) {
        'ngInject';

        super($rootScope);
        this.serverRequest = payrollTrackingService.getNotSubmittedPayroll;
    }
}

export default PayrollNotSubmittedController;