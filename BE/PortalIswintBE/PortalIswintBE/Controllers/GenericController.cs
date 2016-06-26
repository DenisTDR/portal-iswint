using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;
using AutoMapper;
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
    }
}
