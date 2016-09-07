
import MediaQueryFactory from '../../common/mediaQuery/mediaQuery.factory';

import controller from './installing.schemeInstalled.controller';
import './installing.less';
import template_xs from './installing.schemeInstalled.xs.html'
import template_sm from './installing.schemeInstalled.sm.html'


let newbusinessinstallingComponent = {
  restrict: 'E',
  bindings: {},
  mediaTemplates: {
      xs: template_xs,
      sm: template_sm,
      lg: template_sm
  },
  controller
};

export default MediaQueryFactory.wrapAsMediaComponent(newbusinessinstallingComponent);
