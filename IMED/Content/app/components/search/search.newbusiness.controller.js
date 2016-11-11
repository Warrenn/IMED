import GridLayoutControllerBase from '../../common/gridLayout/gridLayout.controller.base';

class SearchNewbusinessController extends GridLayoutControllerBase {
    constructor(searchService, $rootScope,$ionicLoading,$scope) {
        'ngInject';
        super($rootScope,$ionicLoading,$scope, searchService);

        console.log($rootScope.searchNewbusinessText);

        //this.serverRequest = searchService.searchNewbusiness;
     
    }
}

export default SearchNewbusinessController;