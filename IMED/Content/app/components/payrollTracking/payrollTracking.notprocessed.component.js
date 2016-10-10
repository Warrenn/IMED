import MediaQueryFactory from '../../common/mediaQuery/mediaQuery.factory';
import controller from './payrollTracking.notprocessed.controller';
import './payrollTracking.less';
import template_xs from './payrollTracking.notprocessed.xs.html';
import template_sm from './payrollTracking.notprocessed.sm.html';


let payrollComponent = {
  restrict: 'E',
  bindings: {},
  mediaTemplates: {
      xs: template_xs,
      sm: template_sm,
      lg: template_sm
  },
  controller
};

export default MediaQueryFactory.wrapAsMediaComponent(payrollComponent);
