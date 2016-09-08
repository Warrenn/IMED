using Microsoft.Practices.Unity;
using System.Web.Http;
using IMED.Services;
using Unity.WebApi;

namespace IMED
{
    public static class UnityConfig
    {
        public static void RegisterComponents(HttpConfiguration configuration)
        {
			var container = new UnityContainer();

            container.RegisterType<IQuotesService, QuotesFakeService>();
            container.RegisterType<IPayrollService, PayrollFakeService>();
            container.RegisterType<IUserProfileService, UserProfileFakeService>();

            configuration.DependencyResolver = new UnityDependencyResolver(container);
        }
    }
}