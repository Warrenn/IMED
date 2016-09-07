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
        NewBusinessSummary GetNewBusinessSummary();
        PayrollSummary GetPayrollSummary();
        ClaimsSummary GetClaimsSummary();
    }
}
