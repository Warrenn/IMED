import template from './layout.xs.html';
import controller from './layout.controller';
import './layout.less';

let layoutComponent = {
    restrict: 'E',
    bindings: {},
    template,
    transclude: {
        'subheading': '?subheading',
        'content': 'content'
    },
    controller
};

export default layoutComponent;
