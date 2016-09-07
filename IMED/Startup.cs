using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using IMED.App_Start;
using Microsoft.Owin;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;
using Microsoft.Owin.StaticFiles.Infrastructure;
using Owin;
using System.Web.Http;
using Microsoft.Owin.Extensions;

[assembly: OwinStartup(typeof(IMED.Startup))]

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

            app.Map("/newbusinesslaunching/incomplete", spa =>
            {
                spa.Use((ctx, next) =>
                {
                    ctx.Request.Path = new PathString("/index.html");
                    return next();
                });
            });

            app.Map("/newbusinessinstalling/installing", spa =>
            {
                spa.Use((ctx, next) =>
                {
                    ctx.Request.Path = new PathString("/index.html");
                    return next();
                });
            });

            var httpConfiguration = new HttpConfiguration();
            WebApiConfig.Register(httpConfiguration);
            app.UseWebApi(httpConfiguration);
            
            var options = new FileServerOptions();
            FileServerConfig.Register(options);
            app.UseFileServer(options);
            
            app.UseStageMarker(PipelineStage.MapHandler);
        }
    }
}
