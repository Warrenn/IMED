using System;
using System.Configuration;
using System.Security.Claims;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;
using IMED;
using IMED.App_Start;
using IMED.Models;
using IMED.Security;
using Microsoft.Owin;
using Microsoft.Owin.Extensions;
using Microsoft.Owin.Security;
using Microsoft.Owin.Security.Cookies;
using Microsoft.Owin.StaticFiles;
using Microsoft.Owin.StaticFiles.Infrastructure;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Identity.Owin;
using Owin;

[assembly: OwinStartup(typeof(Startup))]

namespace IMED
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.RegisterRoutes();

            var httpConfiguration = new HttpConfiguration();
            var container = UnityConfig.RegisterComponents(httpConfiguration);
            WebApiConfig.Register(httpConfiguration);
            app.UseWebApi(httpConfiguration);

            var options = new FileServerOptions();
            FileServerConfig.Register(options);
            app.UseFileServer(options);

            app.ConfigureSecurity(container);
            app.UseStageMarker(PipelineStage.MapHandler);
        }
    }
}
