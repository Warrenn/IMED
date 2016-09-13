using System.Threading.Tasks;
using System.Web.Http;
using IMED.Models;

namespace IMED.Services
{
    public interface IQuotesService
    {
        Task<PagedResult<IssuedQuote>> GetIssuedQoutes(PagedRequest<string> request);
    }
}