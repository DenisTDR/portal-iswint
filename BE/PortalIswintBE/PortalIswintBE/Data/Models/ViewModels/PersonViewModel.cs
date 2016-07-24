using System;
using System.ComponentModel;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using PortalIswintBE.Misc.Attributes;

namespace PortalIswintBE.Data.Models.ViewModels
{
    public class PersonViewModel: ViewModel
    {

        [InitialVisible(true)]
        [VisibleInTable]
        [ViewName("First name")]
        [UnderImage]
        [Tab("Personal")]
        [OrderIndex(1)]
        public string FirstName { get; set; }

        [InitialVisible(true)]
        [VisibleInTable]
        [ViewName("Last name")]
        [UnderImage]
        [Tab("Personal")]
        [OrderIndex(2)]
        public string LastName { get; set; }

        [MainView]
        [VisibleInTable]
        [OrganizerOnly]
        [ViewName("Shirt size")]
        [JsonConverter(typeof(StringEnumConverter))]
        [Tab("Logistic")]
        public ShirtSizes ShirtSize { get; set; }

        [VisibleInTable]
        [OrganizerOnly]
        [ViewName("Shirt given")]
        [EditableInTable]
        [Tab("Logistic")]
        public bool ShirtGiven { get; set; }

        [VisibleInTable]
        [OrganizerOnly]
        [ViewName("Badge given")]
        [EditableInTable]
        [Tab("Logistic")]
        public bool BadgeGiven { get; set; }

        [MainView]
        [VisibleInTable]
//        [OrganizerOnly]
        [ViewName("Phone number")]
        [Tab("Personal")]
        public string PhoneNumber { get; set; }

        [ViewName("Photo")]
        [TypeName("photourl")]
        [Tab("Personal")]
        public string PhotoUrl { get; set; }

        [MainView]
        [VisibleInTable]
        [OrganizerOnly]
        [ViewName("Email")]
        [TypeName("mail")]
        [Tab("Personal")]
        public string EMail { get; set; }

        [VisibleInTable]
        [ViewName("Facebook")]
        [TypeName("url")]
        [Tab("Personal")]
        public string FacebookUrl { get; set; }

        [InitialVisible(true)]
        [VisibleInTable]
        [OrganizerOnly]
        [ViewName("Room")]
        [Tab("Logistic")]
        [OrderIndex(5)]
        public RoomViewModel Room { get; set; }
        
        [ReadOnly(true)]
        [AdminOnly]
        [Tab("Logistic")]
        public int RoomId { get; set; }

        [InitialVisible(true)]
        [MainView]
        [VisibleInTable]
        [JsonConverter(typeof(StringEnumConverter))]
        [Tab("Personal")]
        public Genre Genre { get; set; }

        [MainView]
        [VisibleInTable]
        [OrganizerOnly]
        [ViewName("Birth Date")]
        [TypeName("date")]
        [Tab("Personal")]
        public DateTime BirthDate { get; set; }

    }
}