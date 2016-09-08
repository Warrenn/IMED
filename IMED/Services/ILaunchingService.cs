using IMED.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IMED.Services
{
    public interface ILaunchingService
    {
        Task<PagedResult<LaunchingCompleted>> Completed(PagedRequest<string> request);
        Task<PagedResult<LaunchingIncomplete>> Incomplete(PagedRequest<string> request);
    }
}
