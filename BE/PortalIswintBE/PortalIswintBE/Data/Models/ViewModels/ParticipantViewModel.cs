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
        [OrderIndex(3)]
        public WorkshopViewModel Workshop { get; set; }

        [MainView]
        [VisibleInTable]
        [ViewName("Nationality")]
        [Tab("Residence")]
        public CountryViewModel Nationality { get; set; }

        [MainView]
        [VisibleInTable]
        [ViewName("Country of Residence")]
        [Tab("Residence")]
        [OrderIndex(4)]
        public CountryViewModel Residence { get; set; }

        [VisibleInTable]
        [ViewName("Need Visa")]
        [Tab("Residence")]
        public bool NeedVisa { get; set; }

        [VisibleInTable]
        [ViewName("Arrival Time")]
        [Tab("Arrival And Departure")]
        public DateTime ArrivalTime { get; set; }

        [VisibleInTable]
        [ViewName("Arrival Location")]
        [Tab("Arrival And Departure")]
        public string ArrivalLocation { get; set; }

        [VisibleInTable]
        [Tab("Logistic")]
        [ViewName("He paid?")]
        [OrderIndex(6)]
        public bool Paid { get; set; }

        [VisibleInTable]
        [Tab("Logistic")]
        [ViewName("Food Preferences")]
        [OrderIndex(7)]
        public string FoodPreferences { get; set; }

        [VisibleInTable]
        [Tab("Logistic")]
        [ViewName("Food Preferences")]
        [OrderIndex(8)]
        public string Allergies { get; set; }

        [VisibleInTable]
        [Tab("Logistic")]
        [ViewName("Additional Food Preferences")]
        public string AdditionalFoodPreferences { get; set; }

    }
}
