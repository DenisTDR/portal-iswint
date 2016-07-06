using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PortalIswintBE.Attributes
{
    public class BooleanAttribute : Attribute
    {
        public string Name => this.GetType().Name.Replace("Attribute", "");
    }
}