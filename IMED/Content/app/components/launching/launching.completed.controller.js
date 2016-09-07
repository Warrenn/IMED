
import GridLayoutControllerBase from '../../common/gridLayout/gridLayout.controller.base';


class iaunchingController extends GridLayoutControllerBase {
    constructor(launchingService, $rootScope) {
        'ngInject';
        super($rootScope);
        this.serverRequest = launchingService.getiaunchingCompleted;
  }
}

export default iaunchingController;
