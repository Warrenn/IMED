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
            app.UseExternalSignInCookie(DefaultAuthenticationTypes.ExternalCookie);
            app.CreatePerOwinContext(IMEDUserManager.Create(container));

            double validateIntervalMinutes;
            if (double.TryParse(ConfigurationManager.AppSettings["IMED:ValidateInterval"], out validateIntervalMinutes))
            {
                validateIntervalMinutes = 30;
            }

            var validateInterval = TimeSpan.FromMinutes(validateIntervalMinutes);
            var profileService = container.Resolve<IUserProfileService>();

            app.UseCookieAuthentication(new CookieAuthenticationOptions
            {
                AuthenticationMode = AuthenticationMode.Active,
                AuthenticationType = DefaultAuthenticationTypes.ApplicationCookie,
                CookieHttpOnly = true,
                LoginPath = new PathString(ConfigurationManager.AppSettings["IMED:LoginPath"] ?? string.Empty),
                Provider = new CookieAuthenticationProvider
                {
                    OnValidateIdentity = SecurityStampValidator.OnValidateIdentity<IMEDUserManager, UserProfile, string>(
                            validateInterval,
                            profileService.RegenerateIdentity,
                            profileService.GetUserId)
                }
            });
            
        }
    }
}