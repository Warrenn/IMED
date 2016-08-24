using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using Microsoft.Owin;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.StaticFiles;
using Owin;
using AppFunc = System.Func<System.Collections.Generic.IDictionary<string, object>, System.Threading.Tasks.Task>;

namespace IMED.App_Start
{
    public static class AngularServerExtension
    {

        public static FileServerOptions ConfigureCaching(this FileServerOptions fileServerOptions, string cacheAge)
        {
            if (string.IsNullOrEmpty(cacheAge))
            {
                return fileServerOptions;
            }

            fileServerOptions.StaticFileOptions.OnPrepareResponse += ctx =>
            {
                ctx.OwinContext.Response.Headers.Add("Cache-Control",
                    new[] {"public", "max-age=" + cacheAge});
            };

            return fileServerOptions;
        }

        public static FileServerOptions ConfigureRequestPath(this FileServerOptions fileServerOptions,
            string requestPath)
        {
            fileServerOptions = fileServerOptions ?? new FileServerOptions();
            fileServerOptions.RequestPath = new PathString(requestPath ?? string.Empty);

            return fileServerOptions;
        }

        public static IAppBuilder UseAngularServer(this IAppBuilder builder,
            string rootPath,
            string entryPath,
            FileServerOptions fileServerOptions = null)
        {
            var entryPathString = new PathString(entryPath);
            var physicalFileSystem = new PhysicalFileSystem(rootPath);
            var defaultFile = Path.GetFileName(entryPath);

            fileServerOptions = fileServerOptions ?? new FileServerOptions();
            fileServerOptions.EnableDefaultFiles = true;
            fileServerOptions.EnableDirectoryBrowsing = false;
            fileServerOptions.FileSystem = physicalFileSystem;
            fileServerOptions.StaticFileOptions.FileSystem = physicalFileSystem;
            fileServerOptions.StaticFileOptions.ServeUnknownFileTypes = true;
            fileServerOptions.DefaultFilesOptions.DefaultFileNames = new[] {defaultFile};

            builder.UseDefaultFiles(fileServerOptions.DefaultFilesOptions);

            return
                builder.Use(
                    new Func<AppFunc, AppFunc>(
                        next => new AngularServerMiddleware(next, fileServerOptions, entryPathString).Invoke));
        }
    }
}