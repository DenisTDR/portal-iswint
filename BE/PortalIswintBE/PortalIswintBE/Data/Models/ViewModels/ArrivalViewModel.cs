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
        [InitialVisible(true)]
        public ParticipantViewModel Participant { get; set; }

        [VisibleInTable]
        [InitialVisible(true)]
        public DateTime ArrivalTime { get; set; }

        [VisibleInTable]
        [InitialVisible(true)]
        public string ArrivalLocation { get; set; }
        
    }
}