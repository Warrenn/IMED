import angular from 'angular';
import Dashboard from './dashboard/dashboard';
import QuotesIssued from './quotesIssued/quotesIssued';
import Launching from './launching/launching';
import Installing from './installing/installing';
import Payroll from './payroll/payroll';

import ClaimPaid from './claimpaid/claimpaid';
import WelcomePage from './welcomepage/welcomepage';


let componentModule = angular
    .module('app.components', [
        Dashboard,
        QuotesIssued,
        Launching,
        Installing,
        ClaimPaid,
        WelcomePage,
        Payroll
    ])
    .name;

export default componentModule;
