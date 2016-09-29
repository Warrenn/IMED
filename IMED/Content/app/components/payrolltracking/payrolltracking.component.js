import MediaQueryFactory from '../mediaQuery/mediaQuery.factory';
import controller from './payrolltracking.controller';
import './payrolltracking.less';
import template_xs from './payrolltracking.xs.html'
import template_sm from './payrolltracking.sm.html'



let payrolltrackingComponent = {
  restrict: 'E',
  bindings: {},
  mediaTemplates: {
      xs: template_xs,
      sm: template_sm,
      md: template_sm
     
  },
  controller
};

export default MediaQueryFactory.wrapAsMediaComponent(payrolltrackingComponent);
