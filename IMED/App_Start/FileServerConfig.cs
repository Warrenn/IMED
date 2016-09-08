using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using Microsoft.Owin;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;
using Owin;

namespace IMED.App_Start
{
    public static class FileServerConfig
    {
        public static void Register(FileServerOptions options)
        {
            var rootPath = string.IsNullOrEmpty(ConfigurationManager.AppSettings["IMED:QueryPath"])
                ? "./wwwroot"
                : ConfigurationManager.AppSettings["IMED:QueryPath"];
            
            ConfigureCaching(options,ConfigurationManager.AppSettings["IMED:Caching"]);
            options.RequestPath = new PathString(ConfigurationManager.AppSettings["IMED:QueryPath"] ?? string.Empty);
            options.FileSystem = new PhysicalFileSystem(rootPath);
        }

        public static void ConfigureCaching(FileServerOptions fileServerOptions, string cacheAge)
        {
            if (string.IsNullOrEmpty(cacheAge))
            {
                cacheAge = "31536000";
            }

            fileServerOptions.StaticFileOptions.OnPrepareResponse += ctx =>
            {
                ctx.OwinContext.Response.Headers.Add("Cache-Control",
                    new[] { "public", "max-age=" + cacheAge });
            };
        }

        public static void ConfigureRoutes(this IAppBuilder app)
        {
            var routesConfig = ConfigurationManager.AppSettings["IMED:Routes"];
            if (string.IsNullOrEmpty(routesConfig))
            {
                return;
            }

            var routePaths = routesConfig.Split(";".ToCharArray(), StringSplitOptions.RemoveEmptyEntries);
            Action<IAppBuilder> configuration = spa =>
            {
                spa.Use((ctx, next) =>
                {
                    ctx.Request.Path = new PathString("/index.html");
                    return next();
                });
            };

            foreach (var routePath in routePaths)
            {
                if (string.IsNullOrEmpty(routePath) || (routePath[0] != '/'))
                {
                    continue;
                }
                app.Map(routePath, configuration);
            }
        }
    }
}