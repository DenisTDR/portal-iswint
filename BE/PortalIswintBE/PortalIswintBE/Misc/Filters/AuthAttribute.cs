using System;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Controllers;
using PortalIswintBE.Data.Db;
using PortalIswintBE.Data.Models.Entities.Auth;
using Swashbuckle.Swagger;

namespace PortalIswintBE.Misc.Filters
{
    public class AuthAttribute : AuthorizeAttribute
    {
        public Role Role { get; private set; }
        public AuthAttribute(Role role = Role.Visitor)
        {
            Role = role;
        }
        
        protected override bool IsAuthorized(HttpActionContext httpActionContext)
        {
            if (!httpActionContext.Request.Headers.Contains("Authorization"))
            {
                SetResponse("Authorization header not found", httpActionContext);
                return false;
            }
            var authHeader = httpActionContext.Request.Headers.GetValues("Authorization").First();

            if (string.IsNullOrEmpty(authHeader) || !authHeader.StartsWith("Please "))
            {
                SetResponse("Invalid Authorization header", httpActionContext);
                return false;
            }
            var token = authHeader.Replace("Please ", "");

            if (string.IsNullOrEmpty(token) || token.Length < 10)
            {
                SetResponse("Invalid Token format", httpActionContext);
                return false;
            }

            using (var db = new Database())
            {
                var repo = db.Repo<Session>();
                var session = repo.FindAsync(ses => ses.Token == token).Result;
                if (session == null)
                {
                    SetResponse("Invalid Token (not registered!)", httpActionContext);
                    return false;
                }
                if (session.Account.Role < Role)
                {
                    SetResponse("You don't have the required Role(" + Role + ") for this action", httpActionContext);
                    return false;
                }
                httpActionContext.Request.Headers.Add("Role", session.Account.Role.ToString());
            }

            httpActionContext.Request.Headers.Add("AuthOk", "yes");
            return true;
        }

        private void SetResponse(string message, HttpActionContext httpActionContext)
        {
            httpActionContext.Request.Headers.Add("AuthOk", "no");
            var msg = new HttpResponseMessage(HttpStatusCode.Unauthorized);
            msg.Headers.Add("Reason", message);

            throw new HttpResponseException(msg);
        }
    }
}