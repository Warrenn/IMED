import MarkerModule from './marker'
import MarkerController from './marker.controller';
import MarkerComponent from './marker.component';
import MarkerTemplate from './marker.html';

describe('Marker', () => {
  let $rootScope, makeController;

  beforeEach(window.module(MarkerModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MarkerController();
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
      expect(MarkerTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = MarkerComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(MarkerTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(MarkerController);
      });
  });
});
