using System.Collections.Generic;
using PortalIswintBE.Attributes;

namespace PortalIswintBE.Models.Entities
{
    [Scaffoldable]
    public class Room : Entity
    {
        public string Name { get; set; }
//        public virtual IList<Person> People { get; set; }
    }
}