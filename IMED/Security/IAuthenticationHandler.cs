using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Owin;

namespace IMED.Security
{
    public interface IAuthenticationHandler
    {
        Task Authenticate(IOwinContext context, Func<Task> next);
    }
}
