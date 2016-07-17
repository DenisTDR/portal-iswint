using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Web;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace PortalIswintBE.Misc.Filters
{
    //[AttributeUsage(AttributeTargets.Class)]
    public class HeaderTransportFilterAttribute2 : ActionFilterAttribute
    {
        public override void OnActionExecuting(HttpActionContext actionContext)
        {

        }
        public override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
        {
            
            if (actionExecutedContext.Request.Headers.Contains("AuthResponse"))
            {
                actionExecutedContext.Response.Headers.Add("AuthResponse",
                    actionExecutedContext.Request.Headers.GetValues("AuthResponse").First());
            }
        }
    }
}