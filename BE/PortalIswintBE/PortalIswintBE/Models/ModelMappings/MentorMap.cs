using System;
using PortalIswintBE.Models.Entities;

namespace PortalIswintBE.Models.ModelMappings
{
    public class MentorMap:EntityMap<Mentor>
    {
        public MentorMap()
        {
            RelationsDictionary.Add("Workshop", new Tuple<Type, string>(typeof(Workshop), "Mentor"));
        }
    }
}