import MediaQueryFactory from '../../common/mediaQuery/mediaQuery.factory';
import template_xs from './dashboard.xs.html'
import template_sm from './dashboard.sm.html'
import controller from './dashboard.controller';
import './dashboard.less';

let dashboardComponent = {
    restrict: 'E',
    bindings: {},
    mediaTemplates: {
        xs: template_xs,
        sm: template_sm,
        lg: template_sm
    },
    controller
};

export default MediaQueryFactory.wrapAsMediaComponent(dashboardComponent);
