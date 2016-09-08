using System;
using System.Security.Claims;
using System.Threading.Tasks;
using IMED.Models;
using IMED.Security;

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

        public Task<ClaimsIdentity> RegenerateIdentity(IMEDUserManager userManager, UserProfile profile)
        {
            return Task.FromResult(new ClaimsIdentity());
        }

        public string GetUserId(ClaimsIdentity identity)
        {
            return string.Empty;
        }
    }
}