using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.ExceptionHandling;
using Elmah.Contrib.WebApi;
using MB.Owin.Logging.Log4Net;
using Owin;

namespace IMED.App_Start
{
    public static class LoggingConfig
    {
        public static void RegisterLogging(this IAppBuilder app, HttpConfiguration config)
        {
            app.UseLog4Net("~/log4net.config");
            config.Services.Add(typeof(IExceptionLogger), new ElmahExceptionLogger());
        }
    }
}