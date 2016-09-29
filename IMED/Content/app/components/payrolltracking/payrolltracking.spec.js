import PayrolltrackingModule from './payrolltracking'
import PayrolltrackingController from './payrolltracking.controller';
import PayrolltrackingComponent from './payrolltracking.component';
import PayrolltrackingTemplate from './payrolltracking.html';

describe('Payrolltracking', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PayrolltrackingModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PayrolltrackingController();
    };
  }));

  describe('Module', () => {
    // top-level specs: i.e., routes, injection, naming
  });

  describe('Controller', () => {
    // controller specs
    it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
      let controller = makeController();
      expect(controller).to.have.property('name');
    });
  });

  describe('Template', () => {
    // template specs
    // tip: use regex to ensure correct bindings are used e.g., {{  }}
    it('has name in template [REMOVE]', () => {
      expect(PayrolltrackingTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PayrolltrackingComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PayrolltrackingTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PayrolltrackingController);
      });
  });
});
