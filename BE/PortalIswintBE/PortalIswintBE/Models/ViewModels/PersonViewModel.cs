using PortalIswintBE.Attributes;

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

        [VisibleInTable]
        [OrganizerOnly]
        [ViewName("Phone number")]
        public string PhoneNumber { get; set; }

        [ViewName("Photo")]
        [TypeName("photourl")]
        public string PhotoUrl { get; set; }

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
        [ViewName("Room ID")]
        public int RoomId { get; set; }
    }
}