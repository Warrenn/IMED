using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Web;
using Microsoft.Owin;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;

namespace IMED.App_Start
{
    public class FileServerConfig
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
    }
}