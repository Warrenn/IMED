import SectionModule from './section'
import SectionController from './section.controller';
import SectionComponent from './section.component';
import SectionTemplate from './section.html';

describe('Section', () => {
  let $rootScope, makeController;

  beforeEach(window.module(SectionModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new SectionController();
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
      expect(SectionTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = SectionComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(SectionTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(SectionController);
      });
  });
});
