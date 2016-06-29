using System.ComponentModel;
using PortalIswintBE.Attributes;

namespace PortalIswintBE.Models.ViewModels
{
    public class ViewModel
    {
        [ViewName("ID")]
        [ReadOnly(true)]
        [AdminOnly]
        public int Id { get; set; }
    }
}