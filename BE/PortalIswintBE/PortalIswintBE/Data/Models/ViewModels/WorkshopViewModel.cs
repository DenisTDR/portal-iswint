
using System.Collections;
using System.Collections.Generic;
using PortalIswintBE.Attributes;
using PortalIswintBE.Models.Entities;

namespace PortalIswintBE.Models.ViewModels
{

    [Scaffoldable]
    public class WorkshopViewModel : ViewModel
    {
        [VisibleInTable]
        public string Name { get; set; }

        [VisibleInTable]
        public string Description { get; set; }
        public IList<Participant> Participants { get; set; }

        [VisibleInTable]
        public MentorViewModel Mentor { get; set; }

        [VisibleInTable]
        public OrganizerViewModel Wanted { get; set; }
    }
}