using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PortalIswintBE.Data.Models.ViewModels
{
    public class ArrivalViewModel
    {
        public ParticipantViewModel Participant { get; set; }
        public DateTime ArrivalTime { get; set; }
        public string ArrivalLocation { get; set; }
    }
}