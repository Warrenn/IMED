import GridLayoutControllerBase from '../../common/gridLayout/gridLayout.controller.base';

class QuotesIssuedController extends GridLayoutControllerBase {
    constructor(quotesIssuedService, $rootScope,$ionicLoading) {
        'ngInject';

        super($rootScope,$ionicLoading);
        this.serverRequest = quotesIssuedService.getIssuedQoutes;
     
    }
}

export default QuotesIssuedController;
