using PortalIswintBE.Models.Entities;

namespace PortalIswintBE.Models.ModelMappings
{
    public class RoomMap: EntityMap<Room>
    {
        public RoomMap()
        {
            HasMany(r => r.People).WithOptional(p => p.Room);
        }
    }
}