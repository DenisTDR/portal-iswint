using System;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Newtonsoft.Json;
using PortalIswintBE.App_Start;

namespace PortalIswintBE
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AutoMapperConfig.RegisterMappings();
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            var config = GlobalConfiguration.Configuration;
            config.Formatters.JsonFormatter.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Serialize;
            config.Formatters.JsonFormatter.SerializerSettings.PreserveReferencesHandling =
                PreserveReferencesHandling.Objects;
        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {
            if (Request.HttpMethod.ToLower().Equals("options"))
            {
                AddHeadersToReponse();
                Context.Response.StatusCode = 200;
                Context.Response.End();
                return;
            }

            if (Context.Request.Path.ToLower().Contains("odata/") ||
                Context.Request.Path.ToLower().Contains("api/"))
            {
                AddHeadersToReponse();
            }
        }

        private void AddHeadersToReponse()
        {
            Context.Response.AddHeader("Access-Control-Allow-Origin", "*");
            Context.Response.AddHeader("Access-Control-Allow-Headers", "*, Content-Type, Authorization");
            Context.Response.AddHeader("Access-Control-Allow-Methods", "*, DELETE");
        }
    }
}
