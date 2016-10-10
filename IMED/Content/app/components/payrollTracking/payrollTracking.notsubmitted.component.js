import MediaQueryFactory from '../../common/mediaQuery/mediaQuery.factory';
import controller from './payrollTracking.notsubmitted.controller';
import './payrollTracking.less';
import template_xs from './payrollTracking.notsubmitted.xs.html';
import template_sm from './payrollTracking.notsubmitted.sm.html';


let payrollComponent = {
  restrict: 'E',
  bindings: {},
  mediaTemplates: {
      xs: template_xs,
      sm: template_sm,
      lg:template_sm
  },
  controller
};

export default MediaQueryFactory.wrapAsMediaComponent(payrollComponent);
