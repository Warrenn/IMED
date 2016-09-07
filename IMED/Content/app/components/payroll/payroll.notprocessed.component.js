import MediaQueryFactory from '../../common/mediaQuery/mediaQuery.factory';
import controller from './payroll.notprocessed.controller';
import './payroll.less';
import template_xs from './payroll.notprocessed.xs.html';
import template_sm from './payroll.notprocessed.sm.html';


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
