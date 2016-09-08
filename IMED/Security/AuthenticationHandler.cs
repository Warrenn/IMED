using System;
using System.Security.Claims;
using System.Threading.Tasks;
using IMED.Services;
using Microsoft.Owin;

namespace IMED.Security
{
    public class AuthenticationHandler : IAuthenticationHandler
    {
        private readonly IUserProfileService service;

        public AuthenticationHandler(IUserProfileService service)
        {
            this.service = service;
        }
        #region Implementation of IAuthenticationHandler

        public async Task Authenticate(IOwinContext context, Func<Task> next)
        {
            if (context.Request.User.Identity.IsAuthenticated)
            {
                await next();
                return;
            }
            var code = await service.GetIMEDCode(context);
            if (string.IsNullOrEmpty(code))
            {
                await next();
                return;
            }
            var identity = await service.CreateIdentity(context, code);
            if ((identity == null) || (!identity.IsAuthenticated))
            {
                await next();
                return;
            }
            context.Request.User = new ClaimsPrincipal(identity);
            await next();
        }

        #endregion
    }
}