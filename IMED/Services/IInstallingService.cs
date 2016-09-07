using IMED.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IMED.Services
{
    public interface IInstallingService
    {
        PagedResult<InstallingPayRollSupportInProgress> GetPayRollSupportInProgress(PagedRequest<string> request);
        PagedResult<InstallingSchemeInstalled> GetSchemeInstalled(PagedRequest<string> request);
    }
}
