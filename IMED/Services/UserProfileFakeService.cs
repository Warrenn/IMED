using System;
using System.Security.Claims;
using System.Threading.Tasks;
using IMED.Models;
using IMED.Security;
using Microsoft.Owin;

namespace IMED.Services
{
    public class UserProfileFakeService : IUserProfileService
    {
        public UserProfile GetUserProfile()
        {
            return new UserProfile
            {
                UserName = "Johnny Snot"
            };
        }

        public Task<ClaimsIdentity> CreateIdentity(IOwinContext context, string IMEDCode)
        {
            var claims = new[]
            {
                new Claim(ClaimTypes.Name, "Badri")
            };
            var identity = new ClaimsIdentity(claims, "Basic");
            return Task.FromResult(identity);
        }

        public Task<string> GetIMEDCode(IOwinContext context)
        {
            return Task.FromResult("code");
        }
    }
}