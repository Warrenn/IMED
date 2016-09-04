class QuotesIssuedController {
  constructor() {
      this.name = 'gridLayout';
      this.groups = [];
      this.userName = 'Jon Snow';

      for (let i = 0; i < 10; i++) {
          this.groups[i] = {
              name: i,
              items: []
          };
          for (let j = 0; j < 3; j++) {
              this.groups[i].items.push(i + '-' + j);
          }
      }


      this.toggleGroup =(group) =>
      {
          if (this.isGroupShown(group)) {
              this.shownGroup = null;
          } else {
              this.shownGroup = group;
          }
      }

      this.isGroupShown = (group) => {
          return this.shownGroup === group;
      }  }
}

export default QuotesIssuedController;
