﻿using System;
using PortalIswintBE.Attributes;
using PortalIswintBE.Models.Entities;

namespace PortalIswintBE.Models.ViewModels
{
    public class PersonViewModel: ViewModel
    {

        [VisibleInTable]
        [ViewName("Last name")]
        public string LastName { get; set; }

        [VisibleInTable]
        [ViewName("First name")]
        public string FirstName { get; set; }

        [MainView]
        [VisibleInTable]
        [OrganizerOnly]
        [ViewName("Shirt size")]
        public ShirtSizes ShirtSize { get; set; }

        [VisibleInTable]
        [OrganizerOnly]
        [ViewName("Shirt given")]
        [EditableInTable]
        public bool ShirtGiven { get; set; }

        [VisibleInTable]
        [OrganizerOnly]
        [ViewName("Badge given")]
        [EditableInTable]
        public bool BadgeGiven { get; set; }

        [MainView]
        [VisibleInTable]
        [OrganizerOnly]
        [ViewName("Phone number")]
        public string PhoneNumber { get; set; }

        [ViewName("Photo")]
        [TypeName("photourl")]
        public string PhotoUrl { get; set; }

        [MainView]
        [VisibleInTable]
        [OrganizerOnly]
        [ViewName("Email")]
        [TypeName("mail")]
        public string EMail { get; set; }

        [VisibleInTable]
        [ViewName("Facebook")]
        [TypeName("url")]
        public string FacebookUrl { get; set; }

        [VisibleInTable]
        [OrganizerOnly]
        [ViewName("Room")]
        public RoomViewModel Room { get; set; }

        [OrganizerOnly]
        public int RoomId { get; set; }

        [MainView]
        [VisibleInTable]
        [ViewName("Genre")]
        public Genre Genre { get; set; }

        [MainView]
        [VisibleInTable]
        [ViewName("Birth Date")]
        public DateTime BirthDate { get; set; }

        [MainView]
        [VisibleInTable]
        public Country Country { get; set; }
    }
}