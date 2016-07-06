using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using AutoMapper;
using PortalIswintBE.Data;
using PortalIswintBE.Models.Entities;
using PortalIswintBE.Models.ViewModels;

namespace PortalIswintBE.Controllers
{
    public class RoomsController : GenericController<Room, RoomViewModel>
    {
        public async Task<IHttpActionResult> GetWithoutPeople()
        {
            using (var db = new Database())
            {
                var rooms = await db.Repo<Room>().GetAllAsync();
                var roomsVm = Mapper.Map<List<RoomViewModel>>(rooms);
                roomsVm.ForEach(rvm => rvm?.People?.Clear());
                return Ok(roomsVm);
            }
        }
    }
}