namespace PortalIswintBE.Models.Entities
{
    public class Participant : Person
    {
        public virtual Workshop Workshop { get; set; }
    }
}