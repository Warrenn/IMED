import GridLayoutControllerBase from '../../common/gridLayout/gridLayout.controller.base';

class PayrollNotProcessedController extends GridLayoutControllerBase {
    constructor(payrollTrackingService, $rootScope) {
        'ngInject';

        super($rootScope);
        this.serverRequest = payrollTrackingService.getNotProcessedPayroll;
    }
}

export default PayrollNotProcessedController;

