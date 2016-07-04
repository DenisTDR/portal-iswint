using System;
using System.ComponentModel;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
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
        [JsonConverter(typeof(StringEnumConverter))]
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
        [ForeignValue]
        public RoomViewModel Room { get; set; }

        [OrganizerOnly]
        [ReadOnly(true)]
        [AdminOnly]
        public int RoomId { get; set; }

        [MainView]
        [VisibleInTable]
        [ViewName("Genre")]
        [JsonConverter(typeof(StringEnumConverter))]
        public Genre Genre { get; set; }

        [MainView]
        [VisibleInTable]
        [ViewName("Birth Date")]
        [TypeName("date")]
        public DateTime BirthDate { get; set; }
    }
}