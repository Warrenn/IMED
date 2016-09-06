import MediaQueryFactory from '../mediaQuery/mediaQuery.factory';
import controller from './payroll.controller';
import './payroll.less';
import template_xs from './payroll.xs.html'
import template_sm from './payroll.sm.html'


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
