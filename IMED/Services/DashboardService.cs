using IMED.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace IMED.Services
{
    public class DashboardService : IDashboardService
    {
        static DashboardService(){}

        public async Task<NewBusinessSummary> GetNewBusinessSummary()
        {
            return await Task.FromResult(new NewBusinessSummary()
            {
                Installing = 6,
                Launching = 12,
                PayrollTracking = 3,
                QuotesIssued = 5
            });
        }

        public async Task<PayrollSummary> GetPayrollSummary()
        {
            return await Task.FromResult(new PayrollSummary
            {
                PayrollOverDue = 2,
                NotSubmitted = 5,
                Submitted = 3
            });
        }

        public async Task<ClaimsSummary> GetClaimsSummary()
        {
            return await Task.FromResult(new ClaimsSummary
            {
                Draft = 5,
                Paid = 2,
                Processing = 6
            });
        }
    }
}