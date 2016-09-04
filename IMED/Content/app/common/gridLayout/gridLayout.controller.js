class GridLayoutController {
    constructor($state) {
        'ngInject';
        this.tabs = (((($state.current || {}).$$state() || {}).parent || {}).data || {}).tabs;
    }
}

export default GridLayoutController;
