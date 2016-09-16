using System.Threading.Tasks;
using System.Web.Http;
using IMED.Models;
using IMED.Services;

namespace IMED.Controllers
{
    [Authorize]
    public class QuotesController : ApiController
    {
        private readonly IQuotesService service;

        public QuotesController(IQuotesService service)
        {
            this.service = service;
        }

        [HttpGet]
        public async Task<PagedResult<IssuedQuote>> GetIssuedQoutes([FromUri]PagedRequest<string> request)
        {
            return await service.GetIssuedQoutes(request);
        }
    }
}
