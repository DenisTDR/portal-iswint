using System;
using PortalIswintBE.Misc.Attributes;

namespace PortalIswintBE.Data.Models.Entities
{

    [Scaffoldable]
    public class Participant : Person
    {
        public virtual Workshop Workshop { get; set; }
        public virtual Country Country { get; set; }
        public virtual Country Residence { get; set; }
        public bool NeedVisa { get; set; }
        public DateTime ArrivalTime { get; set; }
        public string ArrivalLocation { get; set; }
        public bool Paid { get; set; }
        public string FoodPreferences { get; set; }
        public string Allergies { get; set; }
        public string AdditionalFoodPreferences { get; set; }
    }
}