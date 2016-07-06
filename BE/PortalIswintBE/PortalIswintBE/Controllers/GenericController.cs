﻿using System;
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
                var entities = await db.Repo<Model>().GetAllAsync();
                var vms = Mapper.Map<List<ViewModel>>(entities);
                return Ok(vms);
            }
        }

        // GET: api/Room/5
        public async Task<IHttpActionResult> Get(int id)
        {
            using (var db = new Database())
            {
                var entity = await db.Repo<Model>().FindAsync(x => x.Id == id);
                var vm = Mapper.Map<ViewModel>(entity);
                return Ok(vm);
            }
        }

        // POST: api/Room
        public async Task<IHttpActionResult> Post([FromBody] ViewModel vm)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            vm.Sanitize();
            var entity = Mapper.Map<Model>(vm);
            using (var db = new Database())
            {
                await db.Repo<Model>().AddAsync(entity);
            }

            return Created("nowhere", Mapper.Map<ViewModel>(entity));
        }

        // PUT: api/Room/5
        public async Task<IHttpActionResult> Put(int id, [FromBody] ViewModel vm)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (id != vm.Id)
            {
                return BadRequest();
            }
            var entity = Mapper.Map<Model>(vm);
            using (var db = new Database())
            {
                try
                {
                    if (await db.Repo<Model>().UpdateAsync(entity) != null)
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
                var affectedRows = await db.Repo<Model>().DeleteAsync(id);
                if (affectedRows == 0)
                {
                    return NotFound();
                }
                return Ok();
            }
        }
        
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
            var updated = new List<string>();
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
                            if (await UpdateCustomProperty(tmpEntity, prop, db, propertyBag))
                            {
                                skipSettingProperty = true;
                                updated.Add(prop.Name);
                            }
                        }
                        try
                        {
                            if (!skipSettingProperty)
                            {
                                prop.SetValue(tmpEntity, propertyBag[prop.Name]);
                                repo.SetModifiedProperty(tmpEntity, prop.Name);
                                updated.Add(prop.Name);
                            }
                        }
                        catch (Exception exc)
                        {
                            
                        }


                    }
                });
                await repo.SaveChangesAsync();
            }
            return Ok(updated);
        }

        private async Task<bool> UpdateCustomProperty(Model tmpEntity, PropertyInfo prop, Database db, Dictionary<string, object> propertyBag  )
        {
            var propVm =
                (Models.ViewModels.ViewModel)
                    ((JObject) propertyBag[prop.Name]).ToObject(prop.PropertyType.GetMappingType());

            var mInfo = typeof(Database).GetMethods().FirstOrDefault(m => m.Name == "Repository");

            mInfo = mInfo?.MakeGenericMethod(prop.PropertyType);

            var propRepo = mInfo?.Invoke(db, null);

            var findAsyncMethodInfo = propRepo?.GetType().GetMethods().FirstOrDefault(m => m.Name == "GetAsync");

            if (findAsyncMethodInfo == null)
            {
                return false;
            }

            var propEntityGood =
                await(dynamic) findAsyncMethodInfo.Invoke(propRepo, new object[] { propVm.Id });

            prop.SetValue(tmpEntity, propEntityGood);
            return true;
        }
    }
}
