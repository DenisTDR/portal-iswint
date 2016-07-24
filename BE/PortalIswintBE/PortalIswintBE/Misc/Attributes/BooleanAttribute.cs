using System;

namespace PortalIswintBE.Misc.Attributes
{
    public class BooleanAttribute : Attribute
    {
        public string Name => this.GetType().Name.Replace("Attribute", "");

        public bool TheBool { get; set; }

        public BooleanAttribute(bool theBool = true)
        {
            TheBool = theBool;
        }
    }
}