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
        static readonly IEnumerable<NewBusinessLaunchingCompleted> LaunchingComplete;

        static readonly IEnumerable<NewBusinessLaunchingIncoplete> LaunchingInComplete;

        static readonly Xeger QuoteNumberGenerator = new Xeger("R(\\d{6})S", new Random((int)DateTime.Now.Ticks));

        string commets = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        static readonly RandomGenerator RandomGeneratorGenerator = new RandomGenerator();

        static NewBusinessLaunchingController()
        {

            //launching complete fake data
            LaunchingComplete = Builder<NewBusinessLaunchingCompleted>
               .CreateListOfSize(100)
               .All()
               .With(q => q.ClientName = Name.FullName(NameFormats.Standard))
               .With(q => q.QuoteNumber = QuoteNumberGenerator.Generate()).Build();


            // launching Incompleted fake data

            LaunchingInComplete = Builder<NewBusinessLaunchingIncoplete>
             .CreateListOfSize(100)
             .All()
             .With(q => q.ClientName = Name.FullName(NameFormats.Standard))
             .With(q => q.QuoteNumber = QuoteNumberGenerator.Generate())
             .With(q=> q.Comments = RandomGeneratorGenerator.Next(1, 10).ToString()).Build();

        }
    }
}
