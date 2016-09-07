import MediaQueryFactory from '../../common/mediaQuery/mediaQuery.factory';
import controller from './payroll.notsubmitted.controller';
import './payroll.less';
import template_xs from './payroll.notsubmitted.xs.html';
import template_sm from './payroll.notsubmitted.sm.html';


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
