import template from './payrollPanel.html'
import controller from './payrollPanel.controller';
import './payrollPanel.less';

let payrollPanelComponent = {
    bindings: {
        summary: '<'
    },
    template,
    controller
};

export default payrollPanelComponent;
