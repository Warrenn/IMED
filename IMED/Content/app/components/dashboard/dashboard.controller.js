import chartConfig from "./chartConfig";

class DashboardController{
    constructor(dashboardService) {
        'ngInject';

        this.filterState = 'COLLAPSED';
        this.dashboardSettings = {};
        this.newBusinessSummary = {};
        this.claimsSummary = {};
        this.gridModel = {};

        this.showClaimpanel = false;
        this.showClaimSpinner = true;

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
            this.showClaimpanel = true;
            this.showClaimSpinner = false;
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
    }
}

export default DashboardController;