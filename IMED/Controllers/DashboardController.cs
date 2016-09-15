using System.Threading.Tasks;
using System.Web.Http;
using IMED.Models;
using IMED.Services;
using System.Threading;

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
            Thread.Sleep(3000);
            return await service.GetNewBusinessSummary();
        }

        [HttpGet]
        public async Task<PayrollSummary> GetPayrollSummary()
        {
            Thread.Sleep(3000);
            return await service.GetPayrollSummary();
        }

        [HttpGet]
        public async Task<ClaimsSummary> GetClaimsSummary()
        {
            Thread.Sleep(3000);
            return await service.GetClaimsSummary();
        }
    }
}
