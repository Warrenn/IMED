import MediaQueryFactory from '../mediaQuery/mediaQuery.factory';
import controller from './menubar.controller';
import './menubar.less';
import template_xs from './menubar.xs.html'
import template_lg from './menubar.lg.html'

let menubarComponent = {
    bindings: {},
    mediaTemplates: {
        xs: template_xs,
        sm: template_xs,
        lg: template_lg
    },
    controller
};

export default MediaQueryFactory.wrapAsMediaComponent(menubarComponent);
