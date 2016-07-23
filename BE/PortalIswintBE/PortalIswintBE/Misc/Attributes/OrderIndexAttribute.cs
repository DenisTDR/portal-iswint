using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PortalIswintBE.Misc.Attributes
{
    public class OrderIndexAttribute:Attribute
    {
        public int Index { get; set; }
        public OrderIndexAttribute(int index)
        {
            Index = index;
        }
    }
}