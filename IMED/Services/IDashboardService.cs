using IMED.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IMED.Services
{
    public interface IDashboardService
    {
        Task<NewBusinessSummary> GetNewBusinessSummary();
        Task<PayrollSummary> GetPayrollSummary();
        Task<ClaimsSummary> GetClaimsSummary();
    }
}
