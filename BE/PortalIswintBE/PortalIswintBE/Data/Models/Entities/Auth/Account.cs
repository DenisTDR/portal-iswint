using PortalIswintBE.Misc;

namespace PortalIswintBE.Data.Models.Entities.Auth
{
    public class Account : Entity
    {
        public string Username { get; set; }
        public string Password { get; set; }
        public string Name { get; set; }
        public Role Role { get; set; }
    }
}