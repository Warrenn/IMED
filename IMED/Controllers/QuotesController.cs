using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Faker;
using Fare;
using FizzWare.NBuilder;
using IMED.Models;

namespace IMED.Controllers
{
    public class QuotesController : ApiController
    {
        static readonly IEnumerable<IssuedQuote> IssuedQuotes;

        static readonly Xeger QuoteNumberGenerator = new Xeger("R(\\d{6})S", new Random((int)DateTime.Now.Ticks));

        static readonly RandomGenerator RandomGeneratorGenerator = new RandomGenerator();

        static QuotesController()
        {
            IssuedQuotes = Builder<IssuedQuote>
                .CreateListOfSize(100)
                .All()
                .With(q => q.ClientName = Name.FullName(NameFormats.Standard))
                .With(q => q.QuoteNumber = QuoteNumberGenerator.Generate())
                .With(
                    q =>
                        q.ExpiryDate =
                            RandomGeneratorGenerator.Next(DateTime.Today.AddMonths(-1), DateTime.Today.AddMonths(3)))
                .With(q => q.Expired = q.ExpiryDate < DateTime.Today)
                .Build();
        }


        [HttpGet]
        public PagedResult<IssuedQuote> GetIssuedQoutes([FromUri]PagedRequest<string> request)
        {

            var allMatches = IssuedQuotes.Where(q =>
                string.IsNullOrEmpty(request.Filter) ||
                q.ClientName.Contains(request.Filter) ||
                q.QuoteNumber.Contains(request.Filter));
            var count = allMatches.Count();
            var data = allMatches.Skip(request.Skip).Take(request.Take);

            return new PagedResult<IssuedQuote>
            {
                Count = count,
                Data = data
            };
        }
    }
}
