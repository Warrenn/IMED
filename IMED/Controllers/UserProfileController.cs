using System.Web.Http;
using IMED.Models;
using IMED.Services;

namespace IMED.Controllers
{
    public class UserProfileController : ApiController
    {
        private readonly IUserProfileService service;

        public UserProfileController(IUserProfileService service)
        {
            this.service = service;
        }

        [HttpGet]
        public UserProfile GetUserProfile()
        {
            return service.GetUserProfile();
        }
    }
}