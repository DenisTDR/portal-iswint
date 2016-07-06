using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PortalIswintBE.Attributes
{
    public class TypeNameAttribute : Attribute
    {
        public string Name { get; private set; }

        public TypeNameAttribute(string typeName)
        {
            Name = typeName;
        }
    }
}