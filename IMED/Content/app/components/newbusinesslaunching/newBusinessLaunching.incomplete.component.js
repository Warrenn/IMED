import MediaQueryFactory from '../../common/mediaQuery/mediaQuery.factory';

import controller from './newBusinessLaunching.incomplete.controller';
import './newBusinessLaunching.less';
import template_xs from './newBusinessLaunching.incomplete.xs.html'
import template_sm from './newBusinessLaunching.incomplete.sm.html'

let newbusinesslaunchingComponent = {
  restrict: 'E',
  bindings: {},
  mediaTemplates: {
      xs: template_xs,
      sm: template_sm,
      lg: template_sm
  },
  controller
};

export default MediaQueryFactory.wrapAsMediaComponent(newbusinesslaunchingComponent);
