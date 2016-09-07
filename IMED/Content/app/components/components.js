import angular from 'angular';
import Dashboard from './dashboard/dashboard';
import QuotesIssued from './quotesIssued/quotesIssued';
import Payroll from './payroll/payroll';
import ClaimPaid from './claimpaid/claimpaid';


let componentModule = angular
    .module('app.components', [
        Dashboard,
        QuotesIssued,
        Payroll,
        ClaimPaid
    ])
    .name;

export default componentModule;
