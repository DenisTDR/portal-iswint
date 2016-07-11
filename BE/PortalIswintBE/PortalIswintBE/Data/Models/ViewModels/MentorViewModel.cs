﻿
using PortalIswintBE.Attributes;

namespace PortalIswintBE.Models.ViewModels
{
    [Scaffoldable]
    public class MentorViewModel : PersonViewModel
    {
        public WorkshopViewModel Workshop { get; set; }
    }
}