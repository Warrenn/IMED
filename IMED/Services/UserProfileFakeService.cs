using IMED.Models;

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
    }
}