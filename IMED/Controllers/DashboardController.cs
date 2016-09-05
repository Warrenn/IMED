using System.Web.Http;
using IMED.Models;

namespace IMED.Controllers
{
    public class DashboardController : ApiController
    {
        [HttpGet]
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

        [HttpGet]
        public PayrollSummary GetPayrollSummary()
        {
            return new PayrollSummary
            {
                PayrollOverDue = 2,
                NotSubmitted = 5,
                Submitted = 3
            };
        }

        [HttpGet]
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
