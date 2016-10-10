import GridLayoutControllerBase from '../../common/gridLayout/gridLayout.controller.base';

class PayrollSubmittedController extends GridLayoutControllerBase {
    constructor(payrollService, $rootScope) {
        'ngInject';

        super($rootScope);
        this.serverRequest = payrollService.getProcessedPayroll;
    }
}

export default PayrollSubmittedController;

