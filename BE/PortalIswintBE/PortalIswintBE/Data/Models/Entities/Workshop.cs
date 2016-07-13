using System.Collections.Generic;
using PortalIswintBE.Attributes;

namespace PortalIswintBE.Models.Entities
{

    [Scaffoldable]
    public class Workshop : Entity
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public virtual IList<Participant> Participants { get; set; }
        public virtual Mentor Mentor { get; set; }
        public virtual Organizer Wanted { get; set; }
    }
}