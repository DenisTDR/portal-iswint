﻿using PortalIswintBE.Models.Entities;

namespace PortalIswintBE.Models.ModelMappings
{
    public class WorkshopMap:EntityMap<Workshop>
    {
        public WorkshopMap()
        {
            HasMany(ws => ws.Participants).WithOptional(p => p.Workshop);
            HasOptional(ws => ws.Mentor).WithOptionalDependent(m => m.Workshop);
            HasOptional(ws => ws.Wanted);
        }
    }
}