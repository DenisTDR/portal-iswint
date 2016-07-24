using System.Collections.Generic;
using PortalIswintBE.Misc.Attributes;

namespace PortalIswintBE.Data.Models.ViewModels
{

    [Scaffoldable]
    public class WorkshopViewModel : ViewModel
    {
        [VisibleInTable]
        [InitialVisible(true)]
        public string Name { get; set; }

        [VisibleInTable]
        public string Description { get; set; }

        [VisibleInTable]
        [InitialVisible(true)]
        public IList<ParticipantViewModel> Participants { get; set; }

        [VisibleInTable]
        [InitialVisible(true)]
        public MentorViewModel Mentor { get; set; }

        [VisibleInTable]
        [InitialVisible(true)]
        public OrganizerViewModel Wanted { get; set; }
    }
}