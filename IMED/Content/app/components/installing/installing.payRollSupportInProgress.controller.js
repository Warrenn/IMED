

import GridLayoutControllerBase from '../../common/gridLayout/gridLayout.controller.base';

class NewbusinessPayRollSuportProgressController extends GridLayoutControllerBase {
    constructor(installingService, $rootScope) {
        'ngInject';
        super($rootScope);
        this.serverRequest = installingService.getNewBusinessPayRollSupportInProgress;
    }
}

export default NewbusinessPayRollSuportProgressController;
