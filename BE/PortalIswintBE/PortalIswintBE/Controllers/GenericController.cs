using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using System.Web.Http;
using AutoMapper;
using Microsoft.Ajax.Utilities;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using PortalIswintBE.Data;
using PortalIswintBE.Models.Entities;
using PortalIswintBE.Models.ViewModels;

namespace PortalIswintBE.Controllers
{
    public class GenericController<Model, ViewModel> : ApiController
        where Model : Entity
        where ViewModel : Models.ViewModels.ViewModel
    {
        // GET: api/Room
        public async Task<IHttpActionResult> Get()
        {
            using (var db = new Database())
            {
                var rooms = await db.Repo<Model>().GetAllAsync();
                var roomsVm = Mapper.Map<List<ViewModel>>(rooms);
                return Ok(roomsVm);
            }
        }

        // GET: api/Room/5
        public async Task<IHttpActionResult> Get(int id)
        {
            using (var db = new Database())
            {
                var room = await db.Repo<Model>().FindAsync(x => x.Id == id);
                var roomVm = Mapper.Map<ViewModel>(room);
                return Ok(roomVm);
            }
        }

        // POST: api/Room
        public async Task<IHttpActionResult> Post([FromBody] ViewModel roomVm)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            roomVm.Sanitize();
            var room = Mapper.Map<Model>(roomVm);
            using (var db = new Database())
            {
                await db.Repo<Model>().AddAsync(room);
            }

            return Created("nowhere", Mapper.Map<ViewModel>(room));
        }

        // PUT: api/Room/5
        public async Task<IHttpActionResult> Put(int id, [FromBody] ViewModel roomVm)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (id != roomVm.Id)
            {
                return BadRequest();
            }
            var room = Mapper.Map<Model>(roomVm);
            using (var db = new Database())
            {
                try
                {
                    if (await db.Repo<Model>().UpdateAsync(room) != null)
                    {
                        return Ok();
                    }
                    return NotFound();
                }
                catch (Exception exc)
                {
                    return InternalServerError(exc);
                }
            }
        }

        // DELETE: api/Room/5
        public async Task<IHttpActionResult> Delete(int id)
        {
            using (var db = new Database())
            {
                var rez = await db.Repo<Model>().DeleteAsync(id);
                if (rez == 0)
                {
                    return NotFound();
                }
                return Ok();
            }
        }

        [ActionName("UpdateProperties")]

        public async Task<IHttpActionResult> UpdateProperties(int id, [FromBody] Dictionary<string, object> propertyBag )
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (propertyBag == null || propertyBag.Count == 0)
            {
                return BadRequest("no properties given");
            }
            using (var db = new Database())
            {
                var repo = db.Repo<Model>();
                var rez = await repo.FindAsync(entity=>entity.Id == id);
                if (rez == null)
                {
                    return NotFound();
                }
                var tmpEntity = rez;// (Model)Activator.CreateInstance(typeof(Model));
                repo.Attach(tmpEntity);
                typeof(Model).GetProperties().ForEach(async prop =>
                {
                    if (propertyBag.ContainsKey(prop.Name))
                    {
                        var skipSettingProperty = false;
                        if (prop.PropertyType.IsBooleanType())
                        {
                            bool value;
                            bool.TryParse(propertyBag[prop.Name].ToString(), out value);
                            propertyBag[prop.Name] = value;
                        }
                        else if (prop.PropertyType.IsEnum)
                        {
                            propertyBag[prop.Name] = Enum.Parse(prop.PropertyType, propertyBag[prop.Name].ToString());
                        }
                        else if (prop.PropertyType.IsCustomEntity())
                        {
                            if (typeof(Room).IsAssignableFrom(prop.PropertyType))
                            {
                                var roomVm = ((JObject) propertyBag[prop.Name]).ToObject<RoomViewModel>();
                               //var roomX = Mapper.Map<Room>(roomVm);
                                var propRepo = db.Repo<Room>();
                                var room = await propRepo.FindAsync(r => r.Id == roomVm.Id);
                                var person = (Person) (object) tmpEntity;
                                person.Room?.People.Remove(person);
                                room?.People?.Add(person);
                                skipSettingProperty = true;
                            }
                        }
                        try
                        {
                            if (!skipSettingProperty)
                            {
                                prop.SetValue(tmpEntity, propertyBag[prop.Name]);
                                repo.SetModifiedProperty(tmpEntity, prop.Name);
                            }
                        }
                        catch (Exception exc)
                        {
                            
                        }


                    }
                });
                await repo.SaveChangesAsync();
            }
            return Ok();
        }
    }
}
