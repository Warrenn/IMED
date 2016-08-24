import controller from './dashboard.controller';
import './dashboard.less';

let dashboardComponent = {
    restrict: 'E',
    bindings: {},
    template:'<ui-view/>',
    controller
};

export default dashboardComponent;
