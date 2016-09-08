using System.Security.Claims;
using System.Threading.Tasks;
using IMED.Models;
using IMED.Security;
using Microsoft.Owin;

namespace IMED.Services
{
    public interface IUserProfileService
    {
        UserProfile GetUserProfile();

        Task<ClaimsIdentity> CreateIdentity(IOwinContext context,string IMEDCode);

        Task<string> GetIMEDCode(IOwinContext context);
    }
}