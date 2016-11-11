import GridLayoutControllerBase from '../../common/gridLayout/gridLayout.controller.base';

class SearchClaimsController extends GridLayoutControllerBase {
    constructor(searchService, $rootScope,$ionicLoading,$scope) {
        'ngInject';
        super($rootScope,$ionicLoading,$scope);
        this.serverRequest = searchService.searchClaims;
     
    }
}

export default SearchClaimsController;