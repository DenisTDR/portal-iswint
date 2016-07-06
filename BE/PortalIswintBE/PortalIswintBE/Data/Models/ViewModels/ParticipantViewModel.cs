using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PortalIswintBE.Attributes;

namespace PortalIswintBE.Models.ViewModels
{

    [Scaffoldable]
    public class ParticipantViewModel : PersonViewModel
    {

        [ForeignValue]
        public WorkshopViewModel Workshop { get; set; }

        [MainView]
        [VisibleInTable]
        [ForeignValue]
        public CountryViewModel Country { get; set; }
        
    }
}
