
using PortalIswintBE.Attributes;

namespace PortalIswintBE.Models.ViewModels
{
    [Scaffoldable]
    public class MentorViewModel : PersonViewModel
    {
        [ForeignValue]
        public WorkshopViewModel Workshop { get; set; }
    }
}