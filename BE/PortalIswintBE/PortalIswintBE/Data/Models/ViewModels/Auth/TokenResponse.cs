﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PortalIswintBE.Misc;

namespace PortalIswintBE.Data.Models.ViewModels.Auth
{
    public class TokenResponse
    {
        public string Token { get; set; }
        public DateTime Expiration { get; set; }
        public string Username { get; set; }
        public string Name { get; set; }
        public Role Role { get; set; }
    }
}