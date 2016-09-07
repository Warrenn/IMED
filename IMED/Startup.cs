using System.Web.Http;
using IMED;
using IMED.App_Start;
using Microsoft.Owin;
using Microsoft.Owin.Extensions;
using Microsoft.Owin.StaticFiles;
using Owin;

[assembly: OwinStartup(typeof(Startup))]

namespace IMED
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.Map("/dashboard", spa =>
            {
                spa.Use((ctx, next) =>
                {
                    ctx.Request.Path = new PathString("/index.html");
                    return next();
                });
            });

            app.Map("/launching/incomplete", spa =>
            {
                spa.Use((ctx, next) =>
                {
                    ctx.Request.Path = new PathString("/index.html");
                    return next();
                });
            });

            app.Map("/installing/installing", spa =>
            {
                spa.Use((ctx, next) =>
                {
                    ctx.Request.Path = new PathString("/index.html");
                    return next();
                });
            });

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
