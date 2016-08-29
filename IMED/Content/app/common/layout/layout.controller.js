class LayoutController {
    constructor(ionPullUpFooterState,$ionicScrollDelegate,$timeout) {
        'ngInject';

        this.footerState = ionPullUpFooterState.EXPANDED;
        this.showScrollButton = false;
        this.scrollOffset = this.scrollOffset || 50;

        this.getScrollPosition = () => {
            let scrollTop = $ionicScrollDelegate.getScrollPosition().top;
            $timeout(() => {
                this.showScrollButton = scrollTop > this.scrollOffset;
            });
        }

        this.scrollToTop=()=> {
            $ionicScrollDelegate.scrollTop(true);
        }
    }
}

export default LayoutController;
