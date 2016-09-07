import GridLayoutControllerBase from '../../common/gridLayout/gridLayout.controller.base';

class PayrollNotProcessedController extends GridLayoutControllerBase {
    constructor(payrollService, $rootScope) {
        'ngInject';

        super($rootScope);
        this.serverRequest = payrollService.getNotProcessedPayroll;
    }
}

export default PayrollNotProcessedController;

