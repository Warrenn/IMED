import GridLayoutControllerBase from '../../common/gridLayout/gridLayout.controller.base';

class NewbusinessinstallingController extends GridLayoutControllerBase {
    constructor(newBusinessInstallingService, $rootScope) {
        'ngInject';
        super($rootScope);
        this.serverRequest = newBusinessInstallingService.getNewBusinessInstalling;
    }
}



export default NewbusinessinstallingController;
