using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web.Http;
using AutoMapper;
using Microsoft.Ajax.Utilities;
using PortalIswintBE.Data;
using PortalIswintBE.Data.Db;
using PortalIswintBE.Data.Models.Entities;
using PortalIswintBE.Data.Models.ViewModels;
using AjaxMinExtensions = Microsoft.Ajax.Utilities.AjaxMinExtensions;

namespace PortalIswintBE.Controllers
{
    public class RoomsController : GenericController<Room, RoomViewModel>
    {
        public async Task<IHttpActionResult> GetAllWithPeople()
        {
            var roomsVm = await GetAllList();
            var persons = new List<Person>();
            using (var db = new Database())
            {
                persons.AddRange((await db.Repo<Participant>().GetAllAsync()).Cast<Person>().ToList());
                persons.AddRange((await db.Repo<Organizer>().GetAllAsync()).Cast<Person>().ToList());
                persons.AddRange((await db.Repo<Mentor>().GetAllAsync()).Cast<Person>().ToList());

                foreach (var roomViewModel in roomsVm)
                {
                    roomViewModel.People =
                        Mapper.Map<List<PersonViewModel>>(persons.Where(pers => pers.Room?.Id == roomViewModel.Id));
                }
            }
            return Ok(roomsVm);
        }


    }
}