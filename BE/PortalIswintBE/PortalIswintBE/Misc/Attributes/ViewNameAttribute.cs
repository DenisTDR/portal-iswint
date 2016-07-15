using System;

namespace PortalIswintBE.Misc.Attributes
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