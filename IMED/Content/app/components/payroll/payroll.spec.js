import PayrollModule from './payroll'
import PayrollController from './payroll.controller';
import PayrollComponent from './payroll.component';
import PayrollTemplate from './payroll.html';

describe('Payroll', () => {
  let $rootScope, makeController;

  beforeEach(window.module(PayrollModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new PayrollController();
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
      expect(PayrollTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = PayrollComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(PayrollTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(PayrollController);
      });
  });
});
