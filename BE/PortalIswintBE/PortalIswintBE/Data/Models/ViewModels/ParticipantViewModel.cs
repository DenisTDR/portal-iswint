using System;
using PortalIswintBE.Misc.Attributes;

namespace PortalIswintBE.Data.Models.ViewModels
{
    [TabbedModal]
    [Scaffoldable]
    public class ParticipantViewModel : PersonViewModel
    {

        [VisibleInTable]
        [Tab("Logistic")]
        public WorkshopViewModel Workshop { get; set; }

        [MainView]
        [VisibleInTable]
        [ViewName("Country of Residence")]
        [Tab("Residence")]
        public CountryViewModel Country { get; set; }

        [VisibleInTable]
        [ViewName("Need Visa")]
        [Tab("Residence")]
        public bool NeedVisa { get; set; }

        [VisibleInTable]
        [ViewName("Arrival Time")]
        [TypeName("date")]
        [Tab("Arrival And Departure")]
        public DateTime ArrivalTime { get; set; }

        [VisibleInTable]
        [ViewName("Arrival Location")]
        [Tab("Arrival And Departure")]
        public string ArrivalLocation { get; set; }

        [VisibleInTable]
        [Tab("Logistic")]
        [ViewName("He paid?")]
        public bool Paid { get; set; }

        [VisibleInTable]
        [Tab("Logistic")]
        [ViewName("Food Preferences")]
        public string FoodPreferences { get; set; }

    }
}
