using System;
using PortalIswintBE.Misc.Attributes;

namespace PortalIswintBE.Data.Models.Entities
{
    [Scaffoldable]
    public abstract class Person : Entity
    {

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public virtual Room Room { get; set; }
        public ShirtSizes ShirtSize { get; set; }
        public bool ShirtGiven { get; set; }
        public bool BadgeGiven { get; set; }
        public string PhoneNumber { get; set; }
        
        public string PhotoUrl { get; set; } = "images/randomPerson.png";
        public string EMail { get; set; }
        public string FacebookUrl { get; set; }
        public Genre Genre { get; set; }
        public DateTime BirthDate { get; set; } = new DateTime(1996, 7, 24);
    }
}