
using PortalIswintBE.Misc.Attributes;

namespace PortalIswintBE.Data.Models.ViewModels
{
    public class TrasPeCurViewModel : ViewModel
    {
        [VisibleInTable]
        public OrganizerViewModel Organizer { get; set; }

        [VisibleInTable]
        public string Reason { get; set; }

        [VisibleInTable]
        public string Punishment { get; set; }

        [VisibleInTable]
        public bool PunishmentDone { get; set; }
    }
}