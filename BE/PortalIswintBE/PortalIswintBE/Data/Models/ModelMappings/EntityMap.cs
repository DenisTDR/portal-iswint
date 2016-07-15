using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;
using PortalIswintBE.Data.Models.Entities;

namespace PortalIswintBE.Data.Models.ModelMappings
{
    public class EntityMap<T>: EntityTypeConfiguration<T> where T:Entity
    {
        public EntityMap()
        {
            HasKey(t => t.Id);
            Property(t => t.Id).HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity);
        }
    }
}