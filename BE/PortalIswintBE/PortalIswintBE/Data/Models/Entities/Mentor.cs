using PortalIswintBE.Attributes;

namespace PortalIswintBE.Models.Entities
{

    [Scaffoldable]
    public class Mentor : Person
    {
        public virtual Workshop Workshop { get; set; }
    }
}