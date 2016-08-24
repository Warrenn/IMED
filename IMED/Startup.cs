using System;
using System.Collections.Generic;
using System.Linq;
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
            var physicalFileSystem = new PhysicalFileSystem(@".\wwwroot");
            var options = new FileServerOptions
            {
                RequestPath = PathString.Empty,
                EnableDefaultFiles = true,
                FileSystem = physicalFileSystem
            };

            options.StaticFileOptions.OnPrepareResponse += ctx =>
            {
                ctx.OwinContext.Response.Headers.Add("Cache-Control",
                    new[] {"public", "max-age=1000"});
            };

            options.StaticFileOptions.FileSystem = physicalFileSystem;
            options.StaticFileOptions.ServeUnknownFileTypes = false;
            options.DefaultFilesOptions.DefaultFileNames = new[] { "index.html" };

            app.UseFileServer(options);
        }
    }
}
