using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PortalIswintBE.Misc.Attributes;

namespace PortalIswintBE.Data.Models.Entities
{
    public class LostOrFound : Entity
    {
        [VisibleInTable]
        public string What { get; set; }
        [VisibleInTable]
        public string When { get; set; }
        [VisibleInTable]
        public string Where { get; set; }
        [VisibleInTable]
        public string Description { get; set; }
        [VisibleInTable]
        public virtual Organizer OrganizerContact { get; set; }
    }
}