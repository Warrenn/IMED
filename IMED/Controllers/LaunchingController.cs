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
    [Authorize]
    public class LaunchingController : ApiController
    {
        private readonly ILaunchingService service;

        public LaunchingController(ILaunchingService service)
        {
            this.service = service;
        }

        [HttpGet]
        public PagedResult<LaunchingCompleted> Completed([FromUri]PagedRequest<string> request)
        {
            return service.Completed(request);
        }

        [HttpGet]
        public PagedResult<LaunchingIncomplete> Incomplete([FromUri]PagedRequest<string> request)
        {
            return service.Incomplete(request);
        }
    }
}
