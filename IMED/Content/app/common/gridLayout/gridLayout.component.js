import MediaQueryFactory from '../mediaQuery/mediaQuery.factory';
import controller from './gridLayout.controller';
import './gridLayout.less';
import template_xs from './gridLayout.xs.html'
import template_sm from './gridLayout.sm.html'
import template_lg from './gridLayout.lg.html'

let gridLayoutComponent = {
    bindings: {
        userName: '<',
        amount: '<',
        heading: '<',
        hasTabs: '<'
    },
    mediaTemplates: {
        xs: template_xs,
        sm: template_sm,
        lg: template_lg
    },
    transclude: {
        'tabbar': '?tabbar'
    },
    controller
};

export default MediaQueryFactory.wrapAsMediaComponent(gridLayoutComponent);
