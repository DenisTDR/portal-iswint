using System.Collections.Generic;
using PortalIswintBE.Misc.Attributes;

namespace PortalIswintBE.Data.Models.ViewModels
{

    [Scaffoldable]
    public class WorkshopViewModel : ViewModel
    {
        [VisibleInTable]
        public string Name { get; set; }

        [VisibleInTable]
        public string Description { get; set; }

        [VisibleInTable]
        public IList<ParticipantViewModel> Participants { get; set; }

        [VisibleInTable]
        public MentorViewModel Mentor { get; set; }

        [VisibleInTable]
        public OrganizerViewModel Wanted { get; set; }
    }
}