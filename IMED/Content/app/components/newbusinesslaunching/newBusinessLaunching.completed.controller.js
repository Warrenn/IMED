
import GridLayoutControllerBase from '../../common/gridLayout/gridLayout.controller.base';


class NewbusinesslaunchingController extends GridLayoutControllerBase {
    constructor(newBusinessLaunchingService, $rootScope) {
        'ngInject';
        super($rootScope);
        this.serverRequest = newBusinessLaunchingService.getNewBusinessLaunchingCompleted;
  }
}

export default NewbusinesslaunchingController;
