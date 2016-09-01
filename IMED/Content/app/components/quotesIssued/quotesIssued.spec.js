import QuotesIssuedModule from './quotesIssued'
import QuotesIssuedController from './quotesIssued.controller';
import QuotesIssuedComponent from './quotesIssued.component';
import QuotesIssuedTemplate from './quotesIssued.html';

describe('QuotesIssued', () => {
  let $rootScope, makeController;

  beforeEach(window.module(QuotesIssuedModule));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new QuotesIssuedController();
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
      expect(QuotesIssuedTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
    });
  });

  describe('Component', () => {
      // component/directive specs
      let component = QuotesIssuedComponent;

      it('includes the intended template',() => {
        expect(component.template).to.equal(QuotesIssuedTemplate);
      });

      it('invokes the right controller', () => {
        expect(component.controller).to.equal(QuotesIssuedController);
      });
  });
});
