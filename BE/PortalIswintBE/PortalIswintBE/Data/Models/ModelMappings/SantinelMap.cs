using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PortalIswintBE.Data.Models.Entities;

namespace PortalIswintBE.Data.Models.ModelMappings
{
    public class SantinelMap: EntityMap<Santinel>
    {

        public SantinelMap()
        {
            HasOptional(sant => sant.Organizer1);
            HasOptional(sant => sant.Organizer2);
        }
    }
}