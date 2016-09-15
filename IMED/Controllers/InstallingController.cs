using Faker;
using Fare;
using FizzWare.NBuilder;
using IMED.Models;
using IMED.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http;

namespace IMED.Controllers
{
    [Authorize]
    public class InstallingController : ApiController
    {
        private readonly IInstallingService service;

        public InstallingController(IInstallingService service)
        {
            this.service = service;
        }

        [HttpGet]
        public async Task<PagedResult<InstallingPayRollSupportInProgress>> GetPayRollSupportInProgress([FromUri]PagedRequest<string> request)
        {
            Thread.Sleep(3000);
            return await service.GetPayRollSupportInProgress(request);
        }
        [HttpGet]
        public async Task<PagedResult<InstallingSchemeInstalled>> GetSchemeInstalled([FromUri]PagedRequest<string> request)
        {
            Thread.Sleep(3000);
            return await service.GetSchemeInstalled(request);
        }
    }
}
