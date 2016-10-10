import MediaQueryFactory from '../../common/mediaQuery/mediaQuery.factory';
import controller from './claimsprocessing.busyprocessing.controller';
import './claimsprocessing.less';
import template_xs from './claimsprocessing.xs.html'
import template_sm from './claimsprocessing.sm.html'

let claimsBusyProcessingComponent = {
  restrict: 'E',
  bindings: {},
  mediaTemplates: {
      xs: template_xs,
      sm: template_sm,
      lg: template_sm
  },
  controller
};

export default MediaQueryFactory.wrapAsMediaComponent(claimsBusyProcessingComponent);