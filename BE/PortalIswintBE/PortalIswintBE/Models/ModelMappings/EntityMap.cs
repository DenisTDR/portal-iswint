using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using PortalIswintBE.Models.Entities;

namespace PortalIswintBE.Models.ModelMappings
{
    public class EntityMap<T>: EntityTypeConfiguration<T> where T:Entity
    {
        public Dictionary<string, Tuple<Type, string>> RelationsDictionary;
        public EntityMap()
        {
            HasKey(t => t.Id);
            Property(t => t.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
            RelationsDictionary = new Dictionary<string, Tuple<Type, string>>();
        }
    }
}