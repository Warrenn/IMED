import GridLayoutControllerBase from '../../common/gridLayout/gridLayout.controller.base';

class SearchPayrollController extends GridLayoutControllerBase {
    constructor(searchService, $rootScope,$ionicLoading,$scope) {
        'ngInject';
        super($rootScope,$ionicLoading,$scope);
        this.serverRequest = searchService.searchPayroll;
     
    }
}

export default SearchPayrollController;