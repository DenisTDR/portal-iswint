
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using AutoMapper;
using PortalIswintBE.Data.Models.ViewModels;
using PortalIswintBE.Data.Db;
using PortalIswintBE.Data.Models.Entities.Auth;
using PortalIswintBE.Data.Models.ViewModels.Auth;
using PortalIswintBE.Misc;

namespace PortalIswintBE.Controllers
{
    public class AccountController : ApiController
    {
        [HttpPost]
        public async Task<IHttpActionResult> Login([FromBody] LoginRequest request)
        {
            if (request == null)
            {
                return BadRequest(ModelState);
            }
            using (var db = new Database())
            {
                var account =
                    await
                        db.Repo<Account>()
                            .FindAsync(acc => acc.Username == request.Username && acc.Password == request.Password);
                if (account == null)
                {
                    return Ok(new {Status = "error", Reason = "Invalid user or password"});
                }
                var session = new Session
                {
                    Account = account,
                    Expiration = DateTime.Now.AddHours(2),
                    Token = Util.RandomString(64)
                };
                var tokenResponse = Mapper.Map<TokenResponse>(session);
                tokenResponse.Name = session.Account.Name;
                tokenResponse.Username = session.Account.Username;
                tokenResponse.Role = session.Account.Role;
                await db.Repo<Session>().AddAsync(session);
                return Ok(new {Status = "success", Session = tokenResponse});
            }

        }
    }
}
