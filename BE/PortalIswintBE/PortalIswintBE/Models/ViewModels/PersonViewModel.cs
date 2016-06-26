namespace PortalIswintBE.Models.ViewModels
{
    public class PersonViewModel: ViewModel
    {
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string ShirtSize { get; set; }
        public bool ShirtGiven { get; set; }
        public bool BadgeGiven { get; set; }
        public string PhoneNumber { get; set; }
        public string PhotoUrl { get; set; }
        public string EMail { get; set; }
        public string FacebookUrl { get; set; }
        public RoomViewModel Room { get; set; }
        public int RoomId { get; set; }
    }
}