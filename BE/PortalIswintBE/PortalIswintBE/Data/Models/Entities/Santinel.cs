using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PortalIswintBE.Data.Models.Entities
{
    public class Santinel:Entity
    {
        public virtual Organizer Organizer1 { get; set; }
        public virtual Organizer Organizer2 { get; set; }
        public DateTime From { get; set; }
        public DateTime To { get; set; }
    }
}