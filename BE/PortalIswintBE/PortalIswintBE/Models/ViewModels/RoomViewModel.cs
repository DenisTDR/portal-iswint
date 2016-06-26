using System.Collections.Generic;

namespace PortalIswintBE.Models.ViewModels
{
    public class RoomViewModel: ViewModel
    {
        public string Name { get; set; }
        public IList<PersonViewModel> People { get; set; }
    }
}