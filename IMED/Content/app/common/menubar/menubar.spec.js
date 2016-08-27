import MenubarModule from './menubar'
import MenubarController from './menubar.controller';
import MenubarComponent from './menubar.component';
import MenubarTemplate from './menubar.html';

describe('Menubar', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MenubarModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MenubarController();
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
      expect(MenubarTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MenubarComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MenubarTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MenubarController);
      });
  });
});
