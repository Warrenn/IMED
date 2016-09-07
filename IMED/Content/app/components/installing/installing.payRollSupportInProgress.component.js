import MediaQueryFactory from '../../common/mediaQuery/mediaQuery.factory';

import controller from './installing.payRollSupportInProgress.controller';
import './installing.less';

import template_xs from './installing.payRollSupportInProgress.xs.html'
import template_sm from './installing.payRollSupportInProgress.sm.html'

let installingComponent = {
  restrict: 'E',
  bindings: {},
  mediaTemplates: {
      xs: template_xs,
      sm: template_sm,
      lg: template_sm
  },
  controller
};

export default MediaQueryFactory.wrapAsMediaComponent(installingComponent);
