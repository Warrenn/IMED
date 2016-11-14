using System.Configuration;
using Microsoft.Owin;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;
using Owin;

namespace IMED.App_Start
{
    public static class FileServerConfig
    {
        public static void RegisterFileServer(this IAppBuilder app, FileServerOptions options)
        {
            var rootPath = string.IsNullOrEmpty(ConfigurationManager.AppSettings["IMED:RootPath"])
                ? "./wwwroot"
                : ConfigurationManager.AppSettings["IMED:RootPath"];
            
            ConfigureCaching(options,ConfigurationManager.AppSettings["IMED:FileServer:Caching"]);
            options.RequestPath = new PathString(ConfigurationManager.AppSettings["IMED:QueryPath"] ?? string.Empty);
            options.FileSystem = new PhysicalFileSystem(rootPath);

            app.UseFileServer(options);
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