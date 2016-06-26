namespace PortalIswintBE.Models.Entities
{
    public class Person : Entity
    {
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public Room Room { get; set; }
        public string ShirtSize { get; set; }
        public bool ShirtGiven { get; set; }
        public bool BadgeGiven { get; set; }
        public string PhoneNumber { get; set; }
        public string PhotoUrl { get; set; }
        public string EMail { get; set; }
        public string FacebookUrl { get; set; }
    }
}