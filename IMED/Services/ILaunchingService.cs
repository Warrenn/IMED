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
        PagedResult<LaunchingCompleted> Completed(PagedRequest<string> request);
        PagedResult<LaunchingIncomplete> Incomplete(PagedRequest<string> request);
    }
}
