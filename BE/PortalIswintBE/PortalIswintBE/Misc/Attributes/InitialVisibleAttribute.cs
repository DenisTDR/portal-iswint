using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PortalIswintBE.Misc.Attributes
{
    public class InitialVisibleAttribute : BooleanAttribute
    {
        public InitialVisibleAttribute(bool initialVisible = false) : base(initialVisible)
        {
        }
    }
}