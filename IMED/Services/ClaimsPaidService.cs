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
    public class ClaimsPaidService : IClaimsPaidService
    {

        static readonly IEnumerable<ClaimsPaid> ClaimPaid;
        static readonly Xeger ClaimPaidNumberGenerator = new Xeger("R(\\d{6})S", new Random((int)DateTime.Now.Ticks));
        static readonly RandomGenerator RandomGeneratorGenerator = new RandomGenerator();

        static ClaimsPaidService()
        {
            ClaimPaid = Builder<ClaimsPaid>
                .CreateListOfSize(100)
                .All()
                .With(q => q.MemberName = Name.FullName(NameFormats.Standard))
                .With(q => q.MemberNumber = ClaimPaidNumberGenerator.Generate())
                .With(q => q.SchemeCode = ClaimPaidNumberGenerator.Generate())
                .With(q => q.DayOfNotification = RandomGeneratorGenerator.Next(DateTime.Today.AddMonths(-1), DateTime.Today.AddMonths(3)))
                .With(q => q.DayInStatus = RandomGeneratorGenerator.Next(DateTime.Today.AddMonths(-1), DateTime.Today.AddMonths(3)))
                .With(q => q.ClaimType = "Withdrawal")
                .With(q => q.MemberTelephoneNumber = Faker.Phone.Number())
                .With(q => q.MemberEmail = Faker.Internet.Email())
                .Build();
        }

        public PagedResult<ClaimsPaid> GetPaidClaims(PagedRequest<string> request)
        {
            var allMatches = ClaimPaid
                .Where(q =>
                string.IsNullOrEmpty(request.Filter) ||
                q.MemberName.Contains(request.Filter) ||
                q.MemberNumber.Contains(request.Filter) ||
                q.SchemeCode.Contains(request.Filter) ||
                q.ClaimType.Contains(request.Filter));
            ;
            var count = allMatches.Count();
            var data = allMatches.Skip(request.Skip).Take(request.Take);

            return new PagedResult<ClaimsPaid>
            {
                Count = count,
                Data = data
            };
        }
    }
}