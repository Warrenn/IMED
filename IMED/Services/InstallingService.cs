using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using IMED.Models;
using Fare;
using FizzWare.NBuilder;
using Faker;

namespace IMED.Services
{
    public class InstallingService : IInstallingService
    {

        static readonly IEnumerable<InstallingPayRollSupportInProgress> payRollSupportProgress;

        static readonly IEnumerable<InstallingSchemeInstalled> SchemedInstalled;

        static readonly Xeger QuoteNumberGenerator = new Xeger("R(\\d{6})S", new Random((int)DateTime.Now.Ticks));

        static readonly Xeger SchemeNumberGenerator = new Xeger("R(\\d{10})S", new Random((int)DateTime.Now.Ticks));

        static readonly RandomGenerator RandomGeneratorGenerator = new RandomGenerator();

        static InstallingService()
        {
            //New Business Installing  Pay Roll Suport In Progress fake data
            payRollSupportProgress = Builder<InstallingPayRollSupportInProgress>
               .CreateListOfSize(100)
               .All()
               .With(q => q.ClientName = Name.FullName(NameFormats.Standard))
               .With(q => q.QuoteNumber = QuoteNumberGenerator.Generate())
               .With(q => q.SchemeName = Name.FullName(NameFormats.Standard))
               .With(q => q.SchemeNumber = SchemeNumberGenerator.Generate())
               .With(q => q.PayPointNamer = Name.FullName(NameFormats.Standard)).Build();


            // New Business Installing Scheme Installed  fake data

            SchemedInstalled = Builder<InstallingSchemeInstalled>
             .CreateListOfSize(100)
             .All()
             .With(q => q.ClientName = Name.FullName(NameFormats.Standard))
             .With(q => q.QuoteNumber = QuoteNumberGenerator.Generate())
             .With(q => q.SchemeNumber = SchemeNumberGenerator.Generate())
             .With(q => q.SchemeName = Name.FullName(NameFormats.Standard))
             .Build();
        }
        public PagedResult<InstallingPayRollSupportInProgress> GetPayRollSupportInProgress(PagedRequest<string> request)
        {

            var allMatches = payRollSupportProgress
                .Where(q =>
                string.IsNullOrEmpty(request.Filter) ||
                q.ClientName.Contains(request.Filter) ||
                q.QuoteNumber.Contains(request.Filter));
            var count = allMatches.Count();
            var data = allMatches.Skip(request.Skip).Take(request.Take);

            return new PagedResult<InstallingPayRollSupportInProgress>
            {
                Count = count,
                Data = data
            };
        }

        public PagedResult<InstallingSchemeInstalled> GetSchemeInstalled(PagedRequest<string> request)
        {
            var allMatches = SchemedInstalled
                .Where(q =>
                string.IsNullOrEmpty(request.Filter) ||
                q.ClientName.Contains(request.Filter) ||
                q.QuoteNumber.Contains(request.Filter));
            var count = allMatches.Count();
            var data = allMatches.Skip(request.Skip).Take(request.Take);

            return new PagedResult<InstallingSchemeInstalled>
            {
                Count = count,
                Data = data
            };
        }
    }
}