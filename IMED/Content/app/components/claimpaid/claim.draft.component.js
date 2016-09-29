import MediaQueryFactory from '../../common/mediaQuery/mediaQuery.factory';
import controller from './claim.draft.controller';
import './claimpaid.less';
import template_xs from './claim.draft.xs.html'
import template_sm from './claim.draft.sm.html'

let claimdraftComponent = {
  restrict: 'E',
  bindings: {},
  mediaTemplates: {
      xs: template_xs,
      sm: template_sm,    
      lg: template_sm
  },
  controller
};

export default MediaQueryFactory.wrapAsMediaComponent(claimdraftComponent);
