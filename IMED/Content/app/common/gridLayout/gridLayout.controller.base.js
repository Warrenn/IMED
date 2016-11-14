class GridLayoutControllerBase {
    constructor($rootScope, $ionicLoading) {
        'ngInject';

        this.take = 10;
        this.onLastPage = false;
        this.pageNumber = 1;
        this.itemsOnPage = [];
        this.itemsSoFar = [];
        this.shownItem = null;
        this.loadingMoreItems = false;
        this.gridModel = {
            searchText: '',
            amount: 0,
            loadingWithItems:false

        }

        this.$onInit = () => {
            this.clearState();
            this.fetchData();
            this.gridModel.loadingWithItems=true;
            $rootScope.$on('mediaQuery.stateChange', () => {
                this.clearState();
                this.fetchData();
            });
        };


        this.onSearchChange = () => {
            this.clearState();
            this.fetchData();
        };

        this.clearState = () => {
            this.onLastPage = false;
            this.pageNumber = 1;
            this.itemsOnPage = [];
            this.itemsSoFar = [];
            this.shownItem = null;
            this.gridModel.amount = 0;
        };

        this.loadMoreData = () => {
            this.pageNumber++;
            this.fetchData();
            
        };

        this.fetchModreDataPaging = () => {
            this.fetchData();
           
        };


        this.fetchData = () => {
            if(this.currentMediaState !=='xs'){
                $ionicLoading.show();
            }
            return this.serverRequest({
                    skip: ((this.pageNumber - 1) * this.take),
                    take: this.take,
                    filter: this.gridModel.searchText
                })
                .then((callInfo) => {
                    let originalRequest = callInfo.request,
                        response = callInfo.response.data,
                        start = originalRequest.skip,
                        data = response.data,
                        args = [start, data.length].concat(data);
                      
                    Array.prototype.splice.apply(this.itemsSoFar, args);
                    this.itemsOnPage = data;
                    this.gridModel.amount = response.count;
                    this.onLastPage = (start + data.length) >= response.count;
                    $rootScope.$broadcast('scroll.infiniteScrollComplete');
                    this.loadingMoreItems = false;
                    this.gridModel.loadingWithItems=false;
                    $ionicLoading.hide();

                });
        };

        this.toggleDetails = (item) => {
            if (this.isDetailsShown(item)) {
                this.shownItem = null;
            } else {
                this.shownItem = item;
            }
        };

        this.isDetailsShown = (item) => {
            return this.shownItem === item;
        };
    }
}

export default GridLayoutControllerBase;
