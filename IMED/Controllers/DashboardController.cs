using System.Web.Http;
using IMED.Models;
using IMED.Services;

namespace IMED.Controllers
{
    public class DashboardController : ApiController
    {
        private IDashboardService service;

        public DashboardController():this(new DashboardService())
        {

        }

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
