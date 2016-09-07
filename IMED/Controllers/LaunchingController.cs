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
    public class LaunchingController : ApiController
    {
        static readonly IEnumerable<LaunchingCompleted> LaunchingCompleted;

        static readonly IEnumerable<LaunchingIncomplete> LaunchingInComplete;

        static readonly Xeger QuoteNumberGenerator = new Xeger("R(\\d{6})S", new Random((int)DateTime.Now.Ticks));

        static readonly RandomGenerator RandomGeneratorGenerator = new RandomGenerator();

        static LaunchingController()
        {

            //launching complete fake data
            LaunchingCompleted = Builder<LaunchingCompleted>
               .CreateListOfSize(100)
               .All()
               .With(q => q.ClientName = Name.FullName(NameFormats.Standard))
               .With(q => q.QuoteNumber = QuoteNumberGenerator.Generate()).Build();


            // launching Incompleted fake data

            LaunchingInComplete = Builder<LaunchingIncomplete>
             .CreateListOfSize(100)
             .All()
             .With(q => q.ClientName = Name.FullName(NameFormats.Standard))
             .With(q => q.QuoteNumber = QuoteNumberGenerator.Generate())
             .With(q=> q.Comments = Lorem.Paragraph(10))
             .Build();

        }


        [HttpGet]
        public PagedResult<LaunchingCompleted> Completed([FromUri]PagedRequest<string> request)
        {

            var allMatches = LaunchingCompleted
                .Where(q =>
                string.IsNullOrEmpty(request.Filter) ||
                q.ClientName.Contains(request.Filter) ||
                q.QuoteNumber.Contains(request.Filter));
            var count = allMatches.Count();
            var data = allMatches.Skip(request.Skip).Take(request.Take);

            return new PagedResult<LaunchingCompleted>
            {
                Count = count,
                Data = data
            };
        }

        [HttpGet]
        public PagedResult<LaunchingIncomplete> Incomplete([FromUri]PagedRequest<string> request)
        {

            var allMatches = LaunchingInComplete
                .Where(q =>
                string.IsNullOrEmpty(request.Filter) ||
                q.ClientName.Contains(request.Filter) ||
                q.QuoteNumber.Contains(request.Filter));
            var count = allMatches.Count();
            var data = allMatches.Skip(request.Skip).Take(request.Take);

            return new PagedResult<LaunchingIncomplete>
            {
                Count = count,
                Data = data
            };
        }


    }
}
