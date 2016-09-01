import GridLayoutModule from './gridLayout'
import GridLayoutController from './gridLayout.controller';
import GridLayoutComponent from './gridLayout.component';
import GridLayoutTemplate from './gridLayout.html';

describe('GridLayout', () => {
  let $rootScope, makeController;

  beforeEach(window.module(GridLayoutModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new GridLayoutController();
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
      expect(GridLayoutTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = GridLayoutComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(GridLayoutTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(GridLayoutController);
      });
  });
});
