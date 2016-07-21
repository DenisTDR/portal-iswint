using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PortalIswintBE.Data.Models.ViewModels
{
    public class LostOrFoundViewModel : ViewModel
    {
        public string What { get; set; }
        public string When { get; set; }
        public string Where { get; set; }
        public string Description { get; set; }
    }
}