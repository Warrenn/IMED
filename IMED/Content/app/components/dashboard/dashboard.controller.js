import chartConfig from "./chartConfig";

class DashboardController{
    constructor(dashboardService, $rootScope,$scope, $location) {
        'ngInject';

        this.filterState = 'COLLAPSED';
        this.dashboardSettings = {};
        this.newBusinessSummary = {};
        this.claimsSummary = {};
        this.gridModel = {};
        this.searchNewBusinessText = "";

        $scope.showClaimpanel = false;
        $scope.showClaimSpinner = true;

        this.$onInit = () => {

            dashboardService
                .getNewBusinessSummary()
                .then((results) => {
                    this.newBusinessSummary = results.data;
                });

            dashboardService
                .getClaimsSummary()
                .then((results) => {
                    this.claimsSummary = results.data;
                });

            this.dashboardSettings = dashboardService.getDashboardSettings();
            $scope.showClaimpanel = true;
            $scope.showClaimSpinner = false;
        };

        this.saveSettings = () => {
            dashboardService
                .saveSettings(this.dashboardSettings);
        }

        this.toggleFilterState = () => {
            this.filterState = this.filterState === 'EXPANDED' ?
                'COLLAPSED' :
                'EXPANDED';
        }

        this.searchNewbusiness = () => {
            $rootScope.searchNewbusinessText = this.searchNewbusinessText;
            window.location = "claimpaid";

        }
    }
}

export default DashboardController;