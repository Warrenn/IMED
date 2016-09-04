class QuotesIssuedRoute2Controller {
    constructor() {
        this.groups = [];
        this.userName = 'Jon Snow';
        this.searchText = '';

        this.items = [
            {
                name: 'Sansa Stark R2',
                quoteNumber: '123123456',
                expiryDate: new Date(),
                overdue : true
            },
            {
                name: 'Margaery Tyrel R2',
                quoteNumber: '123123456',
                expiryDate: new Date(),
                overdue : false
            },
            {
                name: 'Petyr Baelish R2',
                quoteNumber: '123123456',
                expiryDate: new Date(),
                overdue : true
            },
            {
                name: 'Gregor Clegane R2',
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

export default QuotesIssuedRoute2Controller;
