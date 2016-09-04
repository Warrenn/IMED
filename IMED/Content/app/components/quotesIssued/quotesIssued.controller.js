class QuotesIssuedController {
    constructor() {
        this.groups = [];
        this.userName = 'Jon Snow';
        this.searchText = '';

        this.items = [
            {
                name: 'Sansa Stark',
                quoteNumber: '123123456',
                expiryDate: new Date(),
                overdue : true
            },
            {
                name: 'Margaery Tyrel',
                quoteNumber: '123123456',
                expiryDate: new Date(),
                overdue : false
            },
            {
                name: 'Gregor Clegane',
                quoteNumber: '123123456',
                expiryDate: new Date(),
                overdue : false
            }
        ];

        this.toggleDetails = (item) => {
            if (this.isDetailsShown(item)) {
                this.shownItem = null;
            } else {
                this.shownItem = item;
            }
        }

        this.isDetailsShown = (item) => {
            return this.shownItem === item;
        }
    }
}

export default QuotesIssuedController;
