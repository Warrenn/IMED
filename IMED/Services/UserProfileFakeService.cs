using System;
using System.Configuration;
using System.Runtime.Caching;
using System.Security.Claims;
using System.Threading.Tasks;
using IMED.Models;
using IMED.Security;
using Microsoft.Owin;

namespace IMED.Services
{
    public class UserProfileFakeService : IUserProfileService
    {
        private static readonly ObjectCache Cache = MemoryCache.Default;

        private static DateTimeOffset AbsoluteExpiration()
        {
            var cacheExpirationConfig = ConfigurationManager.AppSettings["IMED:CacheExpiration"];
            double expirationMinutes;
            var expiration = double.TryParse(cacheExpirationConfig, out expirationMinutes)
                ? TimeSpan.FromMinutes(expirationMinutes)
                : TimeSpan.Zero;
            return (expiration == TimeSpan.Zero)
                ? DateTimeOffset.MaxValue
                : new DateTimeOffset(DateTime.Now, expiration);
        }

        public Task<UserProfile> GetUserProfile()
        {
            return Task.FromResult(new UserProfile
            {
                UserName = ClaimsPrincipal.Current.Identity.Name,
                WelcomeMessage = "Welcome"
            });
        }

        private static Task<ClaimsIdentity> CreateFromContext(IOwinContext context, string IMEDCode)
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.Name, "Badri")
            };
            var identity = new ClaimsIdentity(claims, "Basic");
            return Task.FromResult(identity);
        }

        public Task<ClaimsIdentity> CreateIdentity(IOwinContext context, string IMEDCode)
        {
            return Task.FromResult(Cache
                    .AddOrGetExisting(
                        "IMED:IMEDCode:" + IMEDCode,
                        CreateFromContext(context, IMEDCode),
                        AbsoluteExpiration()) as ClaimsIdentity);
        }

        public Task<string> GetIMEDCode(IOwinContext context)
        {
            return Task.FromResult("code");
        }
    }
}