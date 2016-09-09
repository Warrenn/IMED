using System;
using System.Configuration;
using IMED.Models;
using IMED.Services;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Practices.Unity;
using Owin;

namespace IMED.Security
{
    public static class SecurityConfig
    {
        public static void ConfigureSecurity(this IAppBuilder app, IUnityContainer container)
        {
            var handler = container.Resolve<IAuthenticationHandler>();
            app.Use((ctx, next) => handler.Authenticate(ctx, next));
        }
    }
}