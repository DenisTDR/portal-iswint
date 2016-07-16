using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PortalIswintBE.Data.Models.Entities.Auth
{
    public class Session : Entity
    {
        public string Token { get; set; }
        public DateTime Expiration { get; set; }
        public virtual Account Account { get; set; }
    }
}