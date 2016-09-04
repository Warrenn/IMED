import MediaQueryFactory from '../../common/mediaQuery/mediaQuery.factory';
import controller from './quotesIssued.route1.controller';
import './quotesIssued.less';
import template_xs from './quotesIssued.route1.xs.html'
import template_sm from './quotesIssued.route1.sm.html'

let quotesIssuedComponent = {
  bindings: {},
  mediaTemplates: {
      xs: template_xs,
      sm: template_sm,
      lg: template_sm
  },
  controller
};

export default MediaQueryFactory.wrapAsMediaComponent(quotesIssuedComponent);
