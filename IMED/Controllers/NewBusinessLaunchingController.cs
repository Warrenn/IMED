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
    public class NewBusinessLaunchingController : ApiController
    {
        static readonly IEnumerable<NewBusinessLaunchingCompleted> LaunchingCompleted;

        static readonly IEnumerable<NewBusinessLaunchingIncomplete> LaunchingInComplete;

        static readonly Xeger QuoteNumberGenerator = new Xeger("R(\\d{6})S", new Random((int)DateTime.Now.Ticks));

        static readonly RandomGenerator RandomGeneratorGenerator = new RandomGenerator();

        static NewBusinessLaunchingController()
        {

            //launching complete fake data
            LaunchingCompleted = Builder<NewBusinessLaunchingCompleted>
               .CreateListOfSize(100)
               .All()
               .With(q => q.ClientName = Name.FullName(NameFormats.Standard))
               .With(q => q.QuoteNumber = QuoteNumberGenerator.Generate()).Build();


            // launching Incompleted fake data

            LaunchingInComplete = Builder<NewBusinessLaunchingIncomplete>
             .CreateListOfSize(100)
             .All()
             .With(q => q.ClientName = Name.FullName(NameFormats.Standard))
             .With(q => q.QuoteNumber = QuoteNumberGenerator.Generate())
             .With(q=> q.Comments = Lorem.Paragraph(10))
             .Build();

        }


        [HttpGet]
        public PagedResult<NewBusinessLaunchingCompleted> Completed([FromUri]PagedRequest<string> request)
        {

            var allMatches = LaunchingCompleted
                .Where(q =>
                string.IsNullOrEmpty(request.Filter) ||
                q.ClientName.Contains(request.Filter) ||
                q.QuoteNumber.Contains(request.Filter));
            var count = allMatches.Count();
            var data = allMatches.Skip(request.Skip).Take(request.Take);

            return new PagedResult<NewBusinessLaunchingCompleted>
            {
                Count = count,
                Data = data
            };
        }

        [HttpGet]
        public PagedResult<NewBusinessLaunchingIncomplete> Incomplete([FromUri]PagedRequest<string> request)
        {

            var allMatches = LaunchingInComplete
                .Where(q =>
                string.IsNullOrEmpty(request.Filter) ||
                q.ClientName.Contains(request.Filter) ||
                q.QuoteNumber.Contains(request.Filter));
            var count = allMatches.Count();
            var data = allMatches.Skip(request.Skip).Take(request.Take);

            return new PagedResult<NewBusinessLaunchingIncomplete>
            {
                Count = count,
                Data = data
            };
        }


    }
}
