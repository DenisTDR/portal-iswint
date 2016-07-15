using PortalIswintBE.Misc.Attributes;

namespace PortalIswintBE.Data.Models.Entities
{

    [Scaffoldable]
    public class Mentor : Person
    {
        public virtual Workshop Workshop { get; set; }
    }
}