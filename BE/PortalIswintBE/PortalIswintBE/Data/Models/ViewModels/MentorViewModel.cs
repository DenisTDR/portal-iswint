
using PortalIswintBE.Misc.Attributes;

namespace PortalIswintBE.Data.Models.ViewModels
{
    [Scaffoldable]
    public class MentorViewModel : PersonViewModel
    {

        [InitialVisible(true)]
        [VisibleInTable]
        public WorkshopViewModel Workshop { get; set; }
    }
}