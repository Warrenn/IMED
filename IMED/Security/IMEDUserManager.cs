using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using IMED.Models;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Microsoft.Owin;
using Microsoft.Practices.Unity;

namespace IMED.Security
{
    public class IMEDUserManager : UserManager<UserProfile>
    {
        public IMEDUserManager(IUserStore<UserProfile> store) : base(store)
        {
        }

        public static Func<IdentityFactoryOptions<IMEDUserManager>, IOwinContext, IMEDUserManager> Create(IUnityContainer container)
        {
            return (options, context) =>
            {
                var manager = container.Resolve<IMEDUserManager>();
                container.RegisterInstance(manager);
                return manager;
            };
        }
    }
}