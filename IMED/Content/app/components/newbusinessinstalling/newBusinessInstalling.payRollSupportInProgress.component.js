import MediaQueryFactory from '../../common/mediaQuery/mediaQuery.factory';

import controller from './newBusinessInstalling.payRollSupportInProgress.controller';
import './newbusinessinstalling.less';

import template_xs from './newBusinessInstalling.payRollSupportInProgress.xs.html'
import template_sm from './newBusinessInstalling.payRollSupportInProgress.sm.html'

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
