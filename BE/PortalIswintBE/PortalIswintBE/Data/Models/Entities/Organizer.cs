using PortalIswintBE.Misc.Attributes;

namespace PortalIswintBE.Data.Models.Entities
{
    [Scaffoldable]
    public class Organizer : Person
    {
        public Departament Departament { get; set; }
    }
}