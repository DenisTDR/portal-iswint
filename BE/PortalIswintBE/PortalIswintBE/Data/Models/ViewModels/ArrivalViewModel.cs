using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PortalIswintBE.Misc.Attributes;

namespace PortalIswintBE.Data.Models.ViewModels
{
    [Scaffoldable, NoActions]
    public class ArrivalViewModel : ViewModel
    {
        [VisibleInTable]
        public ParticipantViewModel Participant { get; set; }

        [VisibleInTable]
        public DateTime ArrivalTime { get; set; }

        [VisibleInTable]
        public string ArrivalLocation { get; set; }
    }
}