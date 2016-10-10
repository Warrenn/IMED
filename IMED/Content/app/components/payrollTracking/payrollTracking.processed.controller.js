import GridLayoutControllerBase from '../../common/gridLayout/gridLayout.controller.base';

class PayrollProcessedController extends GridLayoutControllerBase {
    constructor(payrollTrackingService, $rootScope) {
        'ngInject';

        super($rootScope);
        this.serverRequest = payrollTrackingService.getProcessedPayroll;
    }
}

export default PayrollProcessedController;

