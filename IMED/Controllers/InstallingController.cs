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
using System.Web.Http;

namespace IMED.Controllers
{
    public class InstallingController : ApiController
    {
        private IInstallingService service;

        public InstallingController(IInstallingService service)
        {
            this.service = service;
        }

        [HttpGet]
        public PagedResult<InstallingPayRollSupportInProgress> GetPayRollSupportInProgress([FromUri]PagedRequest<string> request)
        {
            return service.GetPayRollSupportInProgress(request);
        }
        [HttpGet]
        public PagedResult<InstallingSchemeInstalled> GetSchemeInstalled([FromUri]PagedRequest<string> request)
        {
            return service.GetSchemeInstalled(request);
        }
    }
}
