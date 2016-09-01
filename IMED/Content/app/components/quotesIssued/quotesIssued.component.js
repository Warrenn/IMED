import MediaQueryFactory from '../../common/mediaQuery/mediaQuery.factory';
import controller from './quotesIssued.controller';
import './quotesIssued.less';
import template_xs from './quotesIssued.xs.html'
import template_sm from './quotesIssued.sm.html'
import template_lg from './quotesIssued.lg.html'

let quotesIssuedComponent = {
  bindings: {},
  mediaTemplates: {
      xs: template_xs,
      sm: template_sm,
      lg: template_lg
  },
  controller
};

export default MediaQueryFactory.wrapAsMediaComponent(quotesIssuedComponent);
