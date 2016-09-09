using System.Threading.Tasks;
using System.Web.Http;
using IMED.Models;

namespace IMED.Services
{
    public interface IPayrollService
    {
        Task<PagedResult<PayrollNotSubmitted>> GetNotSubmittedPayroll([FromUri]PagedRequest<string> request);
        Task<PagedResult<PayrollNotProcessed>> GetNotProcessedPayroll([FromUri]PagedRequest<string> request);
        Task<PagedResult<PayrollProcessed>> GetProcessedPayroll([FromUri]PagedRequest<string> request);
    }
}