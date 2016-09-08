using System.Web.Http;
using IMED.Models;
using IMED.Services;

namespace IMED.Controllers
{
    public class PayrollController : ApiController
    {
        private readonly IPayrollService service;

        public PayrollController(IPayrollService service)
        {
            this.service = service;
        }

        [HttpGet]
        public PagedResult<PayrollNotSubmitted> GetNotSubmittedPayroll([FromUri]PagedRequest<string> request)
        {
            return service.GetNotSubmittedPayroll(request);
        }

        [HttpGet]
        public PagedResult<PayrollNotProcessed> GetNotProcessedPayroll([FromUri]PagedRequest<string> request)
        {
            return service.GetNotProcessedPayroll(request);
        }

        [HttpGet]
        public PagedResult<PayrollProcessed> GetProcessedPayroll([FromUri]PagedRequest<string> request)
        {
            return service.GetProcessedPayroll(request);
        }
    }
}