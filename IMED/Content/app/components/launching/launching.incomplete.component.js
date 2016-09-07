import MediaQueryFactory from '../../common/mediaQuery/mediaQuery.factory';

import controller from './launching.incomplete.controller';
import './launching.less';
import template_xs from './launching.incomplete.xs.html'
import template_sm from './launching.incomplete.sm.html'

let iaunchingComponent = {
  restrict: 'E',
  bindings: {},
  mediaTemplates: {
      xs: template_xs,
      sm: template_sm,
      lg: template_sm
  },
  controller
};

export default MediaQueryFactory.wrapAsMediaComponent(iaunchingComponent);
