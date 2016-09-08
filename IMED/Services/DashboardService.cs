using IMED.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace IMED.Services
{
    public class DashboardService : IDashboardService
    {
        static DashboardService(){}

        public NewBusinessSummary GetNewBusinessSummary()
        {
            return new NewBusinessSummary()
            {
                Installing = 6,
                Launching = 12,
                PayrollTracking = 3,
                QuotesIssued = 5
            };
        }

        public PayrollSummary GetPayrollSummary()
        {
            return new PayrollSummary
            {
                PayrollOverDue = 2,
                NotSubmitted = 5,
                Submitted = 3
            };
        }

        public ClaimsSummary GetClaimsSummary()
        {
            return new ClaimsSummary
            {
                Draft = 5,
                Paid = 2,
                Processing = 6
            };
        }
    }
}