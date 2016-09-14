import MediaQueryFactory from '../mediaQuery/mediaQuery.factory';
import controller from './<%= name %>.controller';
import './<%= name %>.less';
import template_xs from './<%= name %>.xs.html'
import template_sm from './<%= name %>.sm.html'
import template_md from './<%= name %>.md.html'
import template_lg from './<%= name %>.lg.html'

let <%= name %>Component = {
  restrict: 'E',
  bindings: {},
  mediaTemplates: {
      xs: template_xs,
      sm: template_sm,
      md: template_md,
      lg: template_lg
  },
  controller
};

export default MediaQueryFactory.wrapAsMediaComponent(<%= name %>Component);
