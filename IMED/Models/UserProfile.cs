using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.Identity;

namespace IMED.Models
{
    public class UserProfile
    {
        public string UserName { get; set; }
        public string WelcomeMessage { get; set; }
    }
}