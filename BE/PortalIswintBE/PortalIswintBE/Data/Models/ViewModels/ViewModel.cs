using System.ComponentModel;
using PortalIswintBE.Misc.Attributes;

namespace PortalIswintBE.Data.Models.ViewModels
{
    public class ViewModel
    {
        [ViewName("ID")]
        [ReadOnly(true)]
        [AdminOnly]
        [OrderIndex(0)]
        public virtual int Id { get; set; }
    }
}