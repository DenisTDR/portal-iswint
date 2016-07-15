using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PortalIswintBE.Misc.Attributes
{
    public class TabAttribute:Attribute
    {
        public string Tab { get; set; }

        public TabAttribute(string tab)
        {
            Tab = tab;
        }
    }
}