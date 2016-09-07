using Faker;
using Fare;
using FizzWare.NBuilder;
using IMED.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace IMED.Controllers
{
    public class NewBusinessInstallingController : ApiController
    {

        static readonly IEnumerable<NewBusinessInstallingPayRollSupportInProgress> payRollSupportProgress;

        static readonly IEnumerable<NewBusinessInstallingSchemeInstalled> SchemedInstalled;

        static readonly Xeger QuoteNumberGenerator = new Xeger("R(\\d{6})S", new Random((int)DateTime.Now.Ticks));

        static readonly Xeger SchemeNumberGenerator = new Xeger("R(\\d{10})S", new Random((int)DateTime.Now.Ticks));

        static readonly RandomGenerator RandomGeneratorGenerator = new RandomGenerator();

        static NewBusinessInstallingController()
        {
            //New Business Installing  Pay Roll Suport In Progress fake data
            payRollSupportProgress = Builder<NewBusinessInstallingPayRollSupportInProgress>
               .CreateListOfSize(100)
               .All()
               .With(q => q.ClientName = Name.FullName(NameFormats.Standard))
               .With(q => q.QuoteNumber = QuoteNumberGenerator.Generate())
               .With(q => q.SchemeName = Name.FullName(NameFormats.Standard))
               .With(q=> q.SchemeNumber = SchemeNumberGenerator.Generate())
               .With(q=> q.PayPointNamer = Name.FullName(NameFormats.Standard)).Build();


            // New Business Installing Scheme Installed  fake data

            SchemedInstalled = Builder<NewBusinessInstallingSchemeInstalled>
             .CreateListOfSize(100)
             .All()
             .With(q => q.ClientName = Name.FullName(NameFormats.Standard))
             .With(q => q.QuoteNumber = QuoteNumberGenerator.Generate())
             .With(q => q.SchemeNumber = SchemeNumberGenerator.Generate())
             .With(q => q.SchemeName = Name.FullName(NameFormats.Standard))
             .Build();
        }

        [HttpGet]
        public PagedResult<NewBusinessInstallingPayRollSupportInProgress> GetPayRollSupportInProgress([FromUri]PagedRequest<string> request)
        {

            var allMatches = payRollSupportProgress
                .Where(q =>
                string.IsNullOrEmpty(request.Filter) ||
                q.ClientName.Contains(request.Filter) ||
                q.QuoteNumber.Contains(request.Filter));
            var count = allMatches.Count();
            var data = allMatches.Skip(request.Skip).Take(request.Take);

            return new PagedResult<NewBusinessInstallingPayRollSupportInProgress>
            {
                Count = count,
                Data = data
            };
        }
        [HttpGet]
        public PagedResult<NewBusinessInstallingSchemeInstalled> GetSchemeInstalled([FromUri]PagedRequest<string> request)
        {

            var allMatches = SchemedInstalled
                .Where(q =>
                string.IsNullOrEmpty(request.Filter) ||
                q.ClientName.Contains(request.Filter) ||
                q.QuoteNumber.Contains(request.Filter));
            var count = allMatches.Count();
            var data = allMatches.Skip(request.Skip).Take(request.Take);

            return new PagedResult<NewBusinessInstallingSchemeInstalled>
            {
                Count = count,
                Data = data
            };
        }


    }
}
