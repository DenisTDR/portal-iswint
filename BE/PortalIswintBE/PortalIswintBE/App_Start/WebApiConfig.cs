using System.Net.Http.Formatting;
using System.Web.Http;
using Newtonsoft.Json;
using PortalIswintBE.Controllers;

namespace PortalIswintBE
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
//
//            var jsonFormatter = new JsonMediaTypeFormatter
//            {
//                SerializerSettings =
//                {
//                    ReferenceLoopHandling = ReferenceLoopHandling.Serialize,
//                    PreserveReferencesHandling = PreserveReferencesHandling.Objects
//                }
//            };
//
//            config.Services.Replace(typeof(IContentNegotiator), new JsonContentNegotiator(jsonFormatter));
        }
    }
}
