using System.Collections.Generic;
using System.ComponentModel;
using PortalIswintBE.Attributes;

namespace PortalIswintBE.Models.ViewModels
{

    [Scaffoldable]
    public class RoomViewModel: ViewModel
    {
        [VisibleInTable]
        [ReadOnly(true)]
        [ViewName("ID")]
        [AdminOnly]
        public override int Id { get; set; }

        [VisibleInTable]
        public string Name { get; set; }
        public virtual IList<PersonViewModel> People { get; set; }
    }
}