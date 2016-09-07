import GridLayoutControllerBase from '../../common/gridLayout/gridLayout.controller.base';

class NewbusinessinstallingController extends GridLayoutControllerBase {
    constructor(installingService, $rootScope) {
        'ngInject';
        super($rootScope);
        this.serverRequest = installingService.getNewBusinessInstalling;
    }
}



export default NewbusinessinstallingController;
