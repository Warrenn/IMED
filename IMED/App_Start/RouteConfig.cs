using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;
using Microsoft.Owin;
using Owin;

namespace IMED
{
    public static class RouteConfig
    {
        public static void RegisterRoutes(this IAppBuilder app)
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
