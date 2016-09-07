import MediaQueryFactory from '../../common/mediaQuery/mediaQuery.factory';
import controller from './claim.paid.controller';
import './claimpaid.less';
import template_xs from './claim.paid.xs.html'
import template_sm from './claim.paid.sm.html'

let claimpaidComponent = {
  restrict: 'E',
  bindings: {},
  mediaTemplates: {
      xs: template_xs,
      sm: template_sm,    
      lg: template_sm
  },
  controller
};

export default MediaQueryFactory.wrapAsMediaComponent(claimpaidComponent);
