using System.Threading.Tasks;
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
        public async Task<NewBusinessSummary> GetNewBusinessSummary()
        {
            return await service.GetNewBusinessSummary();
        }

        [HttpGet]
        public async Task<PayrollSummary> GetPayrollSummary()
        {
            return await service.GetPayrollSummary();
        }

        [HttpGet]
        public async Task<ClaimsSummary> GetClaimsSummary()
        {
            return await service.GetClaimsSummary();
        }
    }
}
