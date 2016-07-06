using System.Collections.Generic;
using PortalIswintBE.Attributes;

namespace PortalIswintBE.Models.ViewModels
{

    [Scaffoldable]
    public class RoomViewModel: ViewModel
    {
        public string Name { get; set; }
        public virtual IList<PersonViewModel> People { get; set; }
    }
}