import GridLayoutControllerBase from '../../common/gridLayout/gridLayout.controller.base';

class PayrollOverdueController extends GridLayoutControllerBase {
    constructor(payrollService, $rootScope) {
        'ngInject';

        super($rootScope);
        this.serverRequest = payrollService.getOverduePayroll;
    }
}

export default PayrollOverdueController;