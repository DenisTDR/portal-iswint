using System.Collections.Generic;

namespace PortalIswintBE.Models.Entities
{
    public class Workshop : Entity
    {
        public virtual IList<Participant> Participants { get; set; }
        public Mentor Mentor { get; set; }
        public Organizer Wanted { get; set; }
    }
}