using System.Web.Http;
using IMED.Models;

namespace IMED.Services
{
    public interface IQuotesService
    {
        PagedResult<IssuedQuote> GetIssuedQoutes([FromUri]PagedRequest<string> request);
    }
}