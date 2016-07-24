using System.Collections.Generic;
using System.ComponentModel;
using PortalIswintBE.Misc.Attributes;

namespace PortalIswintBE.Data.Models.ViewModels
{

    [Scaffoldable]
    public class RoomViewModel: ViewModel
    {
        [VisibleInTable]
        [InitialVisible(true)]
        public string Name { get; set; }
        [VisibleInTable]
        [InitialVisible(true)]
        public virtual IList<PersonViewModel> People { get; set; }
    }
}