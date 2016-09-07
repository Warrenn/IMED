import MediaQueryFactory from '../mediaQuery/mediaQuery.factory';
import template_xs from './layout.xs.html';
import template_sm from './layout.sm.html';
import controller from './layout.controller';
import './layout.less';

let layoutComponent = {
    bindings: {
        scrollOffset: '<',
        hasTabs: '<',
        hasGridHeader: '<',
        hasSearch: '<'
    },
    mediaTemplates: {
        xs: template_xs,
        sm: template_sm,
        lg: template_sm
    },
    transclude: {
        'subheading': '?subheading',
        'content': 'content'
    },
    controller
};

export default MediaQueryFactory.wrapAsMediaComponent(layoutComponent);
