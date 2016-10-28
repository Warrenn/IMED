using Microsoft.Practices.Unity;
using System.Web.Http;
using IMED.Models;
using IMED.Security;
using IMED.Services;
using Microsoft.AspNet.Identity;
using Unity.WebApi;

namespace IMED
{
    public static class UnityConfig
    {
        public static IUnityContainer RegisterComponents(HttpConfiguration configuration)
        {
			var container = new UnityContainer();

            container.RegisterType<IQuotesService, QuotesFakeService>();
            container.RegisterType<IPayrollService, PayrollFakeService>();
            container.RegisterType<IUserProfileService, UserProfileFakeService>();
            container.RegisterType<IDashboardService, DashboardService>();
            container.RegisterType<ILaunchingService, LaunchingService>();
            container.RegisterType<IClaimsService, ClaimsService>();
            container.RegisterType<IInstallingService, InstallingService>();
            container.RegisterType<IAuthenticationHandler, AuthenticationHandler>();

            configuration.DependencyResolver = new UnityDependencyResolver(container);
            return container;
        }
    }
}