using PortalIswintBE.Misc.Attributes;

namespace PortalIswintBE.Data.Models.Entities
{
    [Scaffoldable]
    public class Room : Entity
    {
        public string Name { get; set; }
//        public virtual IList<Person> People { get; set; }
    }
}