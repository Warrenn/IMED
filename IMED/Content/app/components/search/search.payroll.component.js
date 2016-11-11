import MediaQueryFactory from '../../common/mediaQuery/mediaQuery.factory';
import controller from './search.payroll.controller';
import './search.less';
import template_xs from './search.xs.html'
import template_sm from './search.sm.html'

let SearchPayrollComponent = {
  restrict: 'E',
  bindings: {},
  mediaTemplates: {
      xs: template_xs,
      sm: template_sm,
      lg: template_sm
  },
  controller
};

export default MediaQueryFactory.wrapAsMediaComponent(SearchPayrollComponent);
