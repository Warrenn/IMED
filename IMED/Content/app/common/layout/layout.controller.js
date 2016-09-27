class LayoutController {
    constructor(ionPullUpFooterState,$ionicScrollDelegate,$timeout,$scope) {
        'ngInject';

        let scrollPromise;
        this.footerState = ionPullUpFooterState.EXPANDED;
        this.showScrollButton = false;
        this.scrollOffset = this.scrollOffset || 50;


        this.getScrollPosition = () => {
            const scrollTop = $ionicScrollDelegate.getScrollPosition().top;
            scrollPromise && $timeout.cancel(scrollPromise);
            scrollPromise = $timeout(() => {
                this.showScrollButton = scrollTop > this.scrollOffset;
            }, 10);
        };

        this.scrollToTop = () => {
            $ionicScrollDelegate.scrollTop(true);
        };
    }
}

export default LayoutController;
