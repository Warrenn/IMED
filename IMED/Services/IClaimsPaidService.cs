using IMED.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IMED.Services
{
    public interface IClaimsPaidService
    {

        PagedResult<ClaimsPaid> GetPaidClaims(PagedRequest<string> request);
    }
}
