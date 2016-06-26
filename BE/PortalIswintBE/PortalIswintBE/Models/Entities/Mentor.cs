namespace PortalIswintBE.Models.Entities
{
    public class Mentor : Person
    {
        public virtual Workshop Workshop { get; set; }
    }
}