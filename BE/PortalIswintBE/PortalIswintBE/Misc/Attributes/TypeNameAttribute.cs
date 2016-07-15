using System;

namespace PortalIswintBE.Misc.Attributes
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