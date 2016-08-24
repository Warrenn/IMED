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

[assembly: OwinStartup(typeof(IMED.Startup))]

namespace IMED
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            var options = new FileServerOptions();
            var rootPath = string.IsNullOrEmpty(ConfigurationManager.AppSettings["IMED:QueryPath"])
                ? "./wwwroot"
                : ConfigurationManager.AppSettings["IMED:QueryPath"];

            options.ConfigureCaching(ConfigurationManager.AppSettings["IMED:Caching"]);
            options.ConfigureRequestPath(ConfigurationManager.AppSettings["IMED:QueryPath"]);
            app.UseAngularServer(rootPath, "/index.html", options);
        }
    }
}
