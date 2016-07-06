using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PortalIswintBE.Attributes
{
    public class ViewNameAttribute : Attribute
    {
        public string Name { get; private set; }

        public ViewNameAttribute(string name)
        {
            Name = name;
        }
    }
}