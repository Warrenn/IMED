using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Formatting;
using System.Web.Http;
using Microsoft.Owin.Security.OAuth;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Serialization;
using Owin;

namespace IMED
{
    public static class WebApiConfig
    {
        public static void ConfigureFormatters(HttpConfiguration config)
        {
            var json = config.Formatters.JsonFormatter;
            var jsonSettings = json.SerializerSettings;

            jsonSettings.DefaultValueHandling = DefaultValueHandling.IgnoreAndPopulate;
            jsonSettings.NullValueHandling = NullValueHandling.Ignore;
            jsonSettings.ContractResolver = new CamelCasePropertyNamesContractResolver();
            jsonSettings.Converters.Add(new StringEnumConverter(true));
        }

        public static void RegisterWebApi(this IAppBuilder app, HttpConfiguration config)
        {
            ConfigureFormatters(config);

            config.MapHttpAttributeRoutes();
            config.Routes.MapHttpRoute(
                name: "IMEDApi",
                routeTemplate: "api/{controller}/{action}",
                defaults: new { id = RouteParameter.Optional }
            );

            app.UseWebApi(config);
        }
    }
}
