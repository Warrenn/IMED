import angular from 'angular';
import Dashboard from './dashboard/dashboard';
import QuotesIssued from './quotesIssued/quotesIssued';
import Launching from './launching/launching';
import Installing from './installing/installing';

import Payroll from './payroll/payroll';
import PayrollTracking from './payrollTracking/payrollTracking';

import ClaimPaid from './claimpaid/claimpaid';
import ClaimsProcessing from './claimsprocessing/claimsprocessing';

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
        Payroll
    ])
    .name;

export default componentModule;
