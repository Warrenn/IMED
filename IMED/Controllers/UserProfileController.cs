using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using IMED.Models;

namespace IMED.Controllers
{
    public class UserProfileController : ApiController
    {
        [HttpGet]
        public UserProfile GetUserProfile()
        {
            return new UserProfile
            {
                UserName = "Johnny Snot"
            };
        }
    }
}