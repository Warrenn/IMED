class DashboardController{
    constructor(mediaQueryFactory, $rootScope) {
        'ngInject';

        this.name = 'dashboard the media query';

        $rootScope.$on('mediaQuery.stateChange',(event, data) => {
            this.name = 'a new state ' + data.state;
        });
    }
}

export default DashboardController;