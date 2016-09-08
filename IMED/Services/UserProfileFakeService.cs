using IMED.Models;

namespace IMED.Services
{
    public class UserProfileFakeService : IUserProfileService
    {
        public UserProfile GetUserProfile()
        {
            return new UserProfile
            {
                UserName = "Johnny Snot",
                WelcomeMessage = "This prototype illustrates a proof of concept for the IMED Responsive Site Please note that this is a work in progress and some section may still be incomplete This prototype is Low Fidelity i.e.no UI Styling has been applied Navigate through this prototype by interacting with components that are blue such as blue links buttons icons etc"
            };
        }
    }
}