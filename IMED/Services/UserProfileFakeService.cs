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
                WelcomeMessage = "This prototype illustrates a proof of concept for the IMED Responsive Site Please note that this is a work in progress and some section may still be incomplete This prototype is Low Fidelity i.e.no UI Styling has been applied Navigate through this prototype by interacting with components that are blue such as blue links buttons icons etc"
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

        public async Task<ClaimsIdentity> CreateIdentity(IOwinContext context, string IMEDCode)
        {
            ClaimsIdentity identity;
            if (Cache.Contains("IMED:IMEDCode:" + IMEDCode))
            {
                identity = Cache.GetCacheItem("IMED:IMEDCode:" + IMEDCode).Value as ClaimsIdentity;
            }
            else
            {
                identity = await CreateFromContext(context, IMEDCode);
                Cache.Add("IMED:IMEDCode:" + IMEDCode, identity, AbsoluteExpiration());
            }
            return identity;
        }

        public Task<string> GetIMEDCode(IOwinContext context)
        {
            return Task.FromResult("");
        }
    }
}