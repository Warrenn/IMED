import MediaQueryFactory from '../../common/mediaQuery/mediaQuery.factory';
import controller from './search.claims.controller';
import './search.less';
import template_xs from './search.xs.html'
import template_sm from './search.sm.html'

let searchClaimsComponent = {
  restrict: 'E',
  bindings: {},
  mediaTemplates: {
      xs: template_xs,
      sm: template_sm,
      lg: template_sm
  },
  controller
};

export default MediaQueryFactory.wrapAsMediaComponent(searchClaimsComponent);
