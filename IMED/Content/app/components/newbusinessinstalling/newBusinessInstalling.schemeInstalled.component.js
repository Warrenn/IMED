
import MediaQueryFactory from '../../common/mediaQuery/mediaQuery.factory';

import controller from './newBusinessInstalling.schemeInstalled.controller';
import './newbusinessinstalling.less';
import template_xs from './newBusinessInstalling.schemeInstalled.xs.html'
import template_sm from './newBusinessInstalling.schemeInstalled.sm.html'


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
