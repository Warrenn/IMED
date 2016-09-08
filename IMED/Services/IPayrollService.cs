using System.Web.Http;
using IMED.Models;

namespace IMED.Services
{
    public interface IPayrollService
    {
        PagedResult<PayrollNotSubmitted> GetNotSubmittedPayroll([FromUri]PagedRequest<string> request);
        PagedResult<PayrollNotProcessed> GetNotProcessedPayroll([FromUri]PagedRequest<string> request);
        PagedResult<PayrollProcessed> GetProcessedPayroll([FromUri]PagedRequest<string> request);
    }
}