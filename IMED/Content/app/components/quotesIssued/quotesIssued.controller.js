import GridLayoutControllerBase from '../../common/gridLayout/gridLayout.controller.base';

class QuotesIssuedController extends GridLayoutControllerBase {
    constructor(quotesIssuedService, $rootScope,$ionicLoading,$scope) {
        'ngInject';
        super($rootScope,$ionicLoading,$scope);
        this.serverRequest = quotesIssuedService.getIssuedQoutes;
     
    }
}

export default QuotesIssuedController;
