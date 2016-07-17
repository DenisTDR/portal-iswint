using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PortalIswintBE.Data.Models.Entities;
using PortalIswintBE.Misc.Attributes;

namespace PortalIswintBE.Data.Models.ViewModels
{
    [Scaffoldable]
    public class SantinelViewModel : ViewModel
    {
        [VisibleInTable]
        public virtual OrganizerViewModel Organizer1 { get; set; }

        [VisibleInTable]
        public virtual OrganizerViewModel Organizer2 { get; set; }

        [VisibleInTable]
        public DateTime From { get; set; }

        [VisibleInTable]
        public DateTime To { get; set; }
    }
}