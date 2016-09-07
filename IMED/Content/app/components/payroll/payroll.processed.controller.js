import GridLayoutControllerBase from '../../common/gridLayout/gridLayout.controller.base';

class PayrollProcessedController extends GridLayoutControllerBase {
    constructor(payrollService, $rootScope) {
        'ngInject';

        super($rootScope);
        this.userName = 'Jon Snow';
        this.serverRequest = payrollService.getProcessedPayroll;
    }
}

export default PayrollProcessedController;

