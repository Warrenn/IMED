using System.Web.Http;
using IMED.Models;
using System.Threading;

namespace IMED.Controllers
{
    public class DashboardController : ApiController
    {
        [HttpGet]
        public NewBusinessSummary GetNewBusinessSummary()
        {
            Thread.Sleep(5000);
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
            Thread.Sleep(5000);
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
            Thread.Sleep(5000);
            return new ClaimsSummary
            {
                Draft = 5,
                Paid = 2,
                Processing = 6
            };
        }
    }
}
