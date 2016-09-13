using System.Threading.Tasks;
using System.Web.Http;
using IMED.Models;
using IMED.Security;
using IMED.Services;

namespace IMED.Controllers
{
    [Authorize]
    public class UserProfileController : ApiController
    {
        private readonly IUserProfileService service;

        public UserProfileController(IUserProfileService service)
        {
            this.service = service;
        }

        [HttpGet]
        public async Task<UserProfile> GetUserProfile()
        {
            return await service.GetUserProfile();
        }
    }
}