import MediaQueryFactory from '../mediaQuery/mediaQuery.factory';
import controller from './gridLayout.controller';
import './gridLayout.less';
import template_xs from './gridLayout.xs.html'
import template_sm from './gridLayout.sm.html'

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
        lg: template_sm
    },
    transclude: {
        'tabbar': '?tabbar',
        'content': 'content'
    },
    controller
};

export default MediaQueryFactory.wrapAsMediaComponent(gridLayoutComponent);
