import MediaQueryFactory from '../../common/mediaQuery/mediaQuery.factory';
import controller from './payrollTracking.processed.controller';
import './payrollTracking.less';
import template_xs from './payrollTracking.processed.xs.html';
import template_sm from './payrollTracking.processed.sm.html';


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
