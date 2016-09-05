import template from './payrollPanel.html'
import controller from './payrollPanel.controller';
import './payrollPanel.less';

let payrollPanelComponent = {
    bindings: {summaryPromise: '='},
    template,
    controller
};

export default payrollPanelComponent;
