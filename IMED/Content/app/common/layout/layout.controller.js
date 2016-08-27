class LayoutController {
    constructor(ionPullUpFooterState) {
        'ngInject';

        this.footerState = ionPullUpFooterState.EXPANDED;
        this.searchText = '';
    }
}

export default LayoutController;
