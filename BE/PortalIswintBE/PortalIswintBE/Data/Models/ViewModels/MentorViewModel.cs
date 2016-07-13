
using PortalIswintBE.Attributes;

namespace PortalIswintBE.Models.ViewModels
{
    [Scaffoldable]
    public class MentorViewModel : PersonViewModel
    {

        [VisibleInTable]
        public WorkshopViewModel Workshop { get; set; }
    }
}