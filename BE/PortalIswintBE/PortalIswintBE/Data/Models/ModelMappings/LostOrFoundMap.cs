using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PortalIswintBE.Data.Models.Entities;

namespace PortalIswintBE.Data.Models.ModelMappings
{
    public class LostOrFoundMap:EntityMap<LostOrFound>
    {
        public LostOrFoundMap()
        {
            HasOptional(x => x.OrganizerContact);
        }
    }
}