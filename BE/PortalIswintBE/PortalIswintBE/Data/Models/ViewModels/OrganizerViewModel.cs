using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using PortalIswintBE.Misc.Attributes;

namespace PortalIswintBE.Data.Models.ViewModels
{
    [Scaffoldable]
    public class OrganizerViewModel : PersonViewModel
    {
        [VisibleInTable]
        [JsonConverter(typeof(StringEnumConverter))]
//        [Tab("Logistic")]
        public Departament Departament { get; set; }
    }
}