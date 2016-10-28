using IMED.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IMED.Services
{
    public interface IClaimsService
    {
        Task<PagedResult<ClaimsPaid>> GetPaidClaims(PagedRequest<string> request);

        Task<PagedResult<ClaimsProcessing>> GetClaimsBusyProcessing(PagedRequest<string> request);

        Task<PagedResult<ClaimsProcessing>> GetClaimsTaxFinalisation(PagedRequest<string> request);

        Task<PagedResult<ClaimsProcessing>> GetClaimsPreparingPayment(PagedRequest<string> request);
    }
}
