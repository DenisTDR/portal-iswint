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
using PortalIswintBE.Data.Db;
using PortalIswintBE.Data.Models.Entities;
using PortalIswintBE.Data.Models.ViewModels;
using PortalIswintBE.Misc;
using PortalIswintBE.Misc.Attributes;
using PortalIswintBE.Misc.Filters;

namespace PortalIswintBE.Controllers
{
    public class GenericController<Model, ViewModel> : ApiController
        where Model : Entity, new()
        where ViewModel : Data.Models.ViewModels.ViewModel
    {
        [HttpGet]
        public async Task<IHttpActionResult> GetAll()
        {
            return Ok(await GetAllList());
        }

        protected async Task<ICollection<ViewModel>> GetAllList()
        {
            using (var db = new Database())
            {
                var entities = await db.Repo<Model>().GetAllAsync();
                var vms = Mapper.Map<List<ViewModel>>(entities);
                if (vms.Count > 0 && vms.FirstOrDefault().GetType().GetProperties().Any(prop => prop.Name == "Name"))
                {
                    vms.Sort(
                        (m1, m2) => string.Compare(((dynamic)m1).Name.ToString(), ((dynamic)m2).Name.ToString()));
                }
                return vms;
            }
        }

        [HttpGet]
        public async Task<IHttpActionResult> GetById(int id)
        {
            using (var db = new Database())
            {
                var entity = await db.Repo<Model>().FindAsync(x => x.Id == id);
                var vm = Mapper.Map<ViewModel>(entity);
                return Ok(vm);
            }
        }
        
        [Auth(Role.Organizer)]
        [HttpPost]
        public async Task<IHttpActionResult> AddNew([FromBody] Dictionary<string, object> propertyBag)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            if (propertyBag == null)
            {
                return BadRequest("ViewModel not sent.");
            }
//            vm.Sanitize();
            var entity = new Model();
            using (var db = new Database())
            {
               
                await db.Repo<Model>().AddAsync(entity);
            }

            await UpdateProperties(entity.Id, propertyBag);
            ViewModel viewModel;
            try
            {
                using (var db = new Database())
                {
                    entity = await db.Repo<Model>().GetAsync(entity.Id);
                    
                    viewModel = Mapper.Map<ViewModel>(entity);
                }
            }
            catch (Exception exc)
            {
                return InternalServerError(exc);
            }

            return Created("nowhere", viewModel);
        }
        
//        [Auth(Role.Organizer)]
//        [HttpPut]
//        public async Task<IHttpActionResult> Update(int id, [FromBody] ViewModel vm)
//        {
//            if (!ModelState.IsValid)
//            {
//                return BadRequest(ModelState);
//            }
//            if (id != vm.Id)
//            {
//                return BadRequest();
//            }
//            var entity = Mapper.Map<Model>(vm);
//            using (var db = new Database())
//            {
//                try
//                {
//                    if (await db.Repo<Model>().UpdateAsync(entity) != null)
//                    {
//                        return Ok();
//                    }
//                    return NotFound();
//                }
//                catch (Exception exc)
//                {
//                    return InternalServerError(exc);
//                }
//            }
//        }

        // DELETE: api/Room/5
        [HttpDelete]
        public async Task<IHttpActionResult> Delete(int id)
        {
            try
            {
                using (var db = new Database())
                {
                    var affectedRows = await db.Repo<Model>().DeleteAsync(id);
                    if (affectedRows == 0)
                    {
                        return NotFound();
                    }
                    await Task.Delay(2000);
                    return Ok();
                }
            }
            catch (Exception exc)
            {
                return BadRequest(exc.Message);
            }
        }

        [HttpPost]
        [Auth(Role.Organizer)]
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
                    try
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
                    }
                    catch (Exception exc)
                    {
                        
                    }
                
                });
                await repo.SaveChangesAsync();
            }
            return Ok(updated);
        }

        private async Task<bool> UpdateCustomProperty(
            Model tmpEntity, 
            PropertyInfo prop, 
            Database db,
            Dictionary<string, object> propertyBag)
        {
            var propVm =
                (Data.Models.ViewModels.ViewModel)
                    ((JObject) propertyBag[prop.Name]).ToObject(prop.PropertyType.GetMappingType());

            var methodInfo = typeof(Database).GetMethods().FirstOrDefault(m => m.Name == "Repository");

            methodInfo = methodInfo?.MakeGenericMethod(prop.PropertyType);

            var propRepository = methodInfo?.Invoke(db, null);

            var getAsyncMethodInfo = propRepository?.GetType().GetMethods().FirstOrDefault(m => m.Name == "GetAsync");

            if (getAsyncMethodInfo == null)
            {
                return false;
            }

            var propEntity =
                await (dynamic) getAsyncMethodInfo.Invoke(propRepository, new object[] {propVm.Id});

            prop.SetValue(tmpEntity, propEntity);
            return true;
        }
    }
}
