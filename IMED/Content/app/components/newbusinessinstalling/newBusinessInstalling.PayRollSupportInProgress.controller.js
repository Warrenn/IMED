

import GridLayoutControllerBase from '../../common/gridLayout/gridLayout.controller.base';

class NewbusinessPayRollSuportProgressController extends GridLayoutControllerBase {
    constructor(newBusinessInstallingService, $rootScope) {
        'ngInject';
        super($rootScope);
        this.serverRequest = newBusinessInstallingService.getNewBusinessPayRollSupportInProgress;
    }
}

export default NewbusinessPayRollSuportProgressController;
