using PortalIswintBE.Data.Models.Entities;

namespace PortalIswintBE.Data.Models.ModelMappings
{
    public class RoomMap: EntityMap<Room>
    {
        public RoomMap()
        {
            //HasMany(r => r.People).WithOptional(p => p.Room);
        }
    }
}