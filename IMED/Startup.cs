using System.Web.Http;
using IMED;
using IMED.App_Start;
using Microsoft.Owin;
using Microsoft.Owin.Extensions;
using Microsoft.Owin.StaticFiles;
using Microsoft.Owin.StaticFiles.Infrastructure;
using Owin;

[assembly: OwinStartup(typeof(Startup))]

namespace IMED
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.ConfigureRoutes();

            var httpConfiguration = new HttpConfiguration();
            UnityConfig.RegisterComponents(httpConfiguration);
            WebApiConfig.Register(httpConfiguration);
            app.UseWebApi(httpConfiguration);
            
            var options = new FileServerOptions();
            FileServerConfig.Register(options);
            app.UseFileServer(options);

            app.UseStageMarker(PipelineStage.MapHandler);
        }
    }
}
