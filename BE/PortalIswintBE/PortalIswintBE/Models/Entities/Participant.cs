using PortalIswintBE.Attributes;

namespace PortalIswintBE.Models.Entities
{

    [Scaffoldable]
    public class Participant : Person
    {
        public virtual Workshop Workshop { get; set; }
        public virtual Country Country { get; set; }
    }
}