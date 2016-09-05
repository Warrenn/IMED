import chartConfig from "./chartConfig";

class DashboardController{
    constructor(dashboardService) {
        'ngInject';

        this.userName = 'Jon Snow';
        this.searchText = '';
        this.filterState = 'COLLAPSED';
        this.showNewBusiness = true;
        this.showPayroll = true;
        this.showClaims = true;
        this.newBusinessSummary = {};
        this.claimsSummary = {};

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
    }

    toggleFilterState() {
        this.filterState = this.filterState === 'EXPANDED' ?
            'COLLAPSED' :
            'EXPANDED';
    }
}

export default DashboardController;