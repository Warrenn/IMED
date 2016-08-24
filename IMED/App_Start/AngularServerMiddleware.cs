using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using Microsoft.Owin;
using Microsoft.Owin.StaticFiles;
using AppFunc = System.Func<System.Collections.Generic.IDictionary<string, object>, System.Threading.Tasks.Task>;

namespace IMED.App_Start
{
    public class AngularServerMiddleware
    {
        private readonly PathString entryPath;
        private readonly StaticFileMiddleware innerMiddleware;

        public AngularServerMiddleware(AppFunc next, FileServerOptions fileServerOptions, PathString entryPath)
        {
            this.entryPath = entryPath;

            innerMiddleware = new StaticFileMiddleware(next, fileServerOptions.StaticFileOptions);
        }

        public async Task Invoke(IDictionary<string, object> arg)
        {
            await innerMiddleware.Invoke(arg);

            if ((int)arg["owin.ResponseStatusCode"] == 404)
            {
                arg["owin.RequestPath"] = entryPath.Value;
                await innerMiddleware.Invoke(arg);
            }
        }
    }
}