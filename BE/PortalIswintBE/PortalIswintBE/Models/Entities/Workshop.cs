using System.Collections.Generic;
using PortalIswintBE.Attributes;

namespace PortalIswintBE.Models.Entities
{

    [Scaffoldable]
    public class Workshop : Entity
    {
        public virtual IList<Participant> Participants { get; set; }
        public Mentor Mentor { get; set; }
        public Organizer Wanted { get; set; }
    }
}