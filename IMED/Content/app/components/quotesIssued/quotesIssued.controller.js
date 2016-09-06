import GridLayoutControllerBase from '../../common/gridLayout/gridLayout.controller.base';

class QuotesIssuedController extends GridLayoutControllerBase {
    constructor(quotesIssuedService, $rootScope) {
        'ngInject';

        super($rootScope);
        this.userName = 'Jon Snow';
        this.serverRequest = quotesIssuedService.getIssuedQoutes;
    }
}

export default QuotesIssuedController;
