using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using Faker;
using Fare;
using FizzWare.NBuilder;
using IMED.Models;
using IMED.Services;
using System.Threading;

namespace IMED.Controllers
{
    [Authorize]
    public class ClaimsController : ApiController
    {
        private readonly IClaimsService service;
       
        public ClaimsController(IClaimsService service)
        {
            this.service = service;
        }

        [HttpGet]
        public async Task<PagedResult<ClaimsPaid>> GetPaidClaims([FromUri]PagedRequest<string> request)
        {
            return await service.GetPaidClaims(request);
        }

        [HttpGet]
        public async Task<PagedResult<ClaimsProcessing>> GetClaimsBusyProcessing([FromUri]PagedRequest<string> request)
        {
            return await service.GetClaimsBusyProcessing(request);
        }

        [HttpGet]
        public async Task<PagedResult<ClaimsProcessing>> GetClaimsTaxFinalisation([FromUri]PagedRequest<string> request)
        {
            return await service.GetClaimsTaxFinalisation(request);
        }

        [HttpGet]
        public async Task<PagedResult<ClaimsProcessing>> GetClaimsPreparingPayment([FromUri]PagedRequest<string> request)
        {
            return await service.GetClaimsPreparingPayment(request);
        }
    }
}