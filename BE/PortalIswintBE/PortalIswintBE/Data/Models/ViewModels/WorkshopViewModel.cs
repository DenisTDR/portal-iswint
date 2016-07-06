﻿
using System.Collections;
using System.Collections.Generic;
using PortalIswintBE.Attributes;
using PortalIswintBE.Models.Entities;

namespace PortalIswintBE.Models.ViewModels
{

    [Scaffoldable]
    public class WorkshopViewModel : ViewModel
    {
        public IList<Participant> Participants { get; set; }
        public MentorViewModel Mentor { get; set; }
        public OrganizerViewModel Wanted { get; set; }
    }
}