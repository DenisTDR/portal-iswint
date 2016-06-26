using System.Collections.Generic;

namespace PortalIswintBE.Models.Entities
{
    public class Room : Entity
    {
        public string Name { get; set; }
        public virtual IList<Person> People { get; set; }
    }
}