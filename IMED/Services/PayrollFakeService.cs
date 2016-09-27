using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Faker;
using Fare;
using FizzWare.NBuilder;
using IMED.Models;

namespace IMED.Services
{
    public class PayrollFakeService : IPayrollService
    {
        static readonly IEnumerable<PayrollNotSubmitted> NotSubmittedPayroll;
        static readonly IEnumerable<PayrollNotProcessed> NotProcessedPayroll;
        static readonly IEnumerable<PayrollProcessed> ProcessedPayroll;
        static readonly IEnumerable<PayrollOverdue> PayrollOverdue;
        static readonly Xeger PayrollNumberGenerator = new Xeger("R(\\d{6})S", new Random((int)DateTime.Now.Ticks));
        static readonly RandomGenerator RandomGeneratorGenerator = new RandomGenerator();

        static PayrollFakeService()
        {
            NotSubmittedPayroll = Builder<PayrollNotSubmitted>
                .CreateListOfSize(100)
                .All()
                .With(q => q.SchemeName = Name.FullName(NameFormats.Standard))
                .With(q => q.SchemeNumber = PayrollNumberGenerator.Generate())
                .With(q => q.AgreedDueDate = RandomGeneratorGenerator.Next(DateTime.Today.AddMonths(-1), DateTime.Today.AddMonths(3)))
                .With(q => q.PayPointName = Name.FullName(NameFormats.Standard))
                .Build();

            NotProcessedPayroll = Builder<PayrollNotProcessed>
                .CreateListOfSize(100)
                .All()
                .With(q => q.SchemeName = Name.FullName(NameFormats.Standard))
                .With(q => q.SchemeNumber = PayrollNumberGenerator.Generate())
                .With(q => q.PayPointName = Name.FullName(NameFormats.Standard))
                .Build();

            ProcessedPayroll = Builder<PayrollProcessed>
               .CreateListOfSize(100)
               .All()
               .With(q => q.SchemeName = Name.FullName(NameFormats.Standard))
               .With(q => q.SchemeNumber = PayrollNumberGenerator.Generate())
               .With(q => q.AgreedDueDate = RandomGeneratorGenerator.Next(DateTime.Today.AddMonths(-1), DateTime.Today.AddMonths(3)))
               .With(q => q.PayPointName = Name.FullName(NameFormats.Standard))
               .Build();

            PayrollOverdue = Builder<PayrollOverdue>
           .CreateListOfSize(100)
           .All()
           .With(q => q.SchemeName = Name.FullName(NameFormats.Standard))
           .With(q => q.SchemeNumber = PayrollNumberGenerator.Generate())
           .With(q => q.AgreedDueDate = RandomGeneratorGenerator.Next(DateTime.Today.AddMonths(-1), DateTime.Today.AddMonths(3)))
           .With(q => q.PayPointName = Name.FullName(NameFormats.Standard))
           .Build();
        }

        public async Task<PagedResult<PayrollNotSubmitted>> GetNotSubmittedPayroll(PagedRequest<string> request)
        {
            var allMatches = NotSubmittedPayroll
                .Where(q =>
                string.IsNullOrEmpty(request.Filter) ||
                q.SchemeName.Contains(request.Filter) ||
                q.SchemeNumber.Contains(request.Filter));
            var count = allMatches.Count();
            var data = allMatches.Skip(request.Skip).Take(request.Take);

            return await Task.FromResult(new PagedResult<PayrollNotSubmitted>
            {
                Count = count,
                Data = data
            });
        }

        public async Task<PagedResult<PayrollNotProcessed>> GetNotProcessedPayroll(PagedRequest<string> request)
        {
            var allMatches = NotProcessedPayroll
                .Where(q =>
                string.IsNullOrEmpty(request.Filter) ||
                q.SchemeName.Contains(request.Filter) ||
                q.SchemeNumber.Contains(request.Filter));
            var count = allMatches.Count();
            var data = allMatches.Skip(request.Skip).Take(request.Take);

            return await Task.FromResult(new PagedResult<PayrollNotProcessed>
            {
                Count = count,
                Data = data
            });
        }

        public async Task<PagedResult<PayrollProcessed>> GetProcessedPayroll(PagedRequest<string> request)
        {
            var allMatches = ProcessedPayroll
                .Where(q =>
                string.IsNullOrEmpty(request.Filter) ||
                q.SchemeName.Contains(request.Filter) ||
                q.SchemeNumber.Contains(request.Filter));
            var count = allMatches.Count();
            var data = allMatches.Skip(request.Skip).Take(request.Take);

            return await Task.FromResult(new PagedResult<PayrollProcessed>
            {
                Count = count,
                Data = data
            });
        }

        public async Task<PagedResult<PayrollOverdue>> GetOverduePayroll(PagedRequest<string> request)
        {
            var allMatches = PayrollOverdue.Where(q =>

            string.IsNullOrEmpty(request.Filter) ||
            q.SchemeName.Contains(request.Filter) ||
            q.SchemeNumber.Contains(request.Filter));

            var count = allMatches.Count();
            var data = allMatches.Skip(request.Skip).Take(request.Take);

            return await Task.FromResult(new PagedResult<PayrollOverdue>
            {
                Count = count,
                Data = data
            });
        }

    }
}