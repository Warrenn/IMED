using System.Security.Claims;
using System.Threading.Tasks;
using IMED.Models;
using IMED.Security;

namespace IMED.Services
{
    public interface IUserProfileService
    {
        UserProfile GetUserProfile();

        Task<ClaimsIdentity> RegenerateIdentity(IMEDUserManager userManager, UserProfile profile);

        string GetUserId(ClaimsIdentity identity);
    }
}