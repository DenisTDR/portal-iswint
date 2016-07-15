using System.ComponentModel;
using PortalIswintBE.Misc.Attributes;

namespace PortalIswintBE.Data.Models.ViewModels
{
    public class ViewModel
    {
        [ViewName("ID")]
        [ReadOnly(true)]
        [AdminOnly]
        public virtual int Id { get; set; }
    }
}