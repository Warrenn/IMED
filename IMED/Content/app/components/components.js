import angular from 'angular';
import Dashboard from './dashboard/dashboard';
import QuotesIssued from './quotesIssued/quotesIssued';
import Launching from './launching/launching';
import Installing from './installing/installing';

import Payroll from './payroll/payroll';
import PayrollTracking from './payrollTracking/payrollTracking';

import ClaimPaid from './claimpaid/claimpaid';
import ClaimsProcessing from './claimsprocessing/claimsprocessing';

import Search from './search/search';

import WelcomePage from './welcomepage/welcomepage';


let componentModule = angular
    .module('app.components', [
        Dashboard,
        QuotesIssued,
        Launching,
        Installing,
        ClaimPaid,
        ClaimsProcessing,
        WelcomePage,
        PayrollTracking,
        Payroll,
        Search
    ])
    .name;

export default componentModule;
