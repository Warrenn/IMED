using System.Threading.Tasks;
using System.Web.Http;
using IMED.Models;

namespace IMED.Services
{
    public interface IPayrollService
    {
        Task<PagedResult<PayrollNotSubmitted>> GetNotSubmittedPayroll(PagedRequest<string> request);
        Task<PagedResult<PayrollNotProcessed>> GetNotProcessedPayroll(PagedRequest<string> request);
        Task<PagedResult<PayrollProcessed>> GetProcessedPayroll(PagedRequest<string> request);
        Task<PagedResult<PayrollOverdue>> GetOverduePayroll(PagedRequest<string> request);
      
    }
}