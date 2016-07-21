
namespace PortalIswintBE.Data.Models.Entities
{
    public class TrasPeCur:Entity
    {
        public virtual Organizer Organizer { get; set; }
        public string Reason { get; set; }
        public string Punishment { get; set; }
        public bool PunishmentDone { get; set; }
    }
}