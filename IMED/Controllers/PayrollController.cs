using System.Threading.Tasks;
using System.Web.Http;
using IMED.Models;
using IMED.Services;

namespace IMED.Controllers
{
    [Authorize]
    public class PayrollController : ApiController
    {
        private readonly IPayrollService service;

        public PayrollController(IPayrollService service)
        {
            this.service = service;
        }

        [HttpGet]
        public async Task<PagedResult<PayrollNotSubmitted>> GetNotSubmittedPayroll([FromUri]PagedRequest<string> request)
        {
            return await service.GetNotSubmittedPayroll(request);
        }

        [HttpGet]
        public async Task<PagedResult<PayrollNotProcessed>> GetNotProcessedPayroll([FromUri]PagedRequest<string> request)
        {
            return await service.GetNotProcessedPayroll(request);
        }

        [HttpGet]
        public async Task<PagedResult<PayrollProcessed>> GetProcessedPayroll([FromUri]PagedRequest<string> request)
        {
            return await service.GetProcessedPayroll(request);
        }
    }
}