using System.Web.Http;
using IMED.Models;
using IMED.Services;

namespace IMED.Controllers
{
    [Authorize]
    public class DashboardController : ApiController
    {
        private readonly IDashboardService service;

        public DashboardController(IDashboardService service)
        {
            this.service = service;
        }

        [HttpGet]
        public NewBusinessSummary GetNewBusinessSummary()
        {
            return service.GetNewBusinessSummary();
        }

        [HttpGet]
        public PayrollSummary GetPayrollSummary()
        {
            return service.GetPayrollSummary();
        }

        [HttpGet]
        public ClaimsSummary GetClaimsSummary()
        {
            return service.GetClaimsSummary();
        }
    }
}
