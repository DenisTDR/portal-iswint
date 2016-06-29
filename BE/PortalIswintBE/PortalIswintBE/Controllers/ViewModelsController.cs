using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Threading.Tasks;
using System.Web.Http;
using PortalIswintBE.Attributes;
using PortalIswintBE.Models.Entities;
using PortalIswintBE.Models.ViewModels;
using WebGrease.Css.Extensions;

namespace PortalIswintBE.Controllers
{
    public class ViewModelsController : ApiController
    {
        private static List<Type> availableTypes = null;

        public async Task<IHttpActionResult> Get([FromUri] string typeName)
        {
            if (availableTypes == null)
            {
                LoadAvailableTypes();
            }

            var selectedType =
                availableTypes?.FirstOrDefault(
                    type =>
                        type.Name.Equals(typeName, StringComparison.InvariantCultureIgnoreCase) ||
                        type.Name.Equals(typeName + "ViewModel", StringComparison.InvariantCultureIgnoreCase));

            if (selectedType == null)
            {
                return NotFound();
            }
            var rez = new Dictionary<string, Dictionary<string, object>>();

            selectedType.GetProperties()
                .Select(GetTypeDescription)
                .ForEach(attr => rez.Add(attr["Name"].ToString(), attr));

            var typeBag = new Dictionary<string, object>
            {
                ["Name"] = selectedType.Name.Replace("ViewModel", ""),
                ["Properties"] = rez
            };

            return Ok(typeBag);
        }

        private void LoadAvailableTypes()
        {
            var types = Assembly.GetExecutingAssembly()
                .GetTypes()
                .Where(type => type.IsSubclassOf(typeof(ViewModel)))
                .Where(
                    type =>
                        type.GetCustomAttributes()
                            .Any(attrib => attrib is ScaffoldableAttribute))
                .ToList();
            availableTypes = types;
        }

        private Dictionary<string, object> GetTypeDescription(PropertyInfo propertyInfo)
        {
            var propName = propertyInfo.Name;
            var propertyBag = new Dictionary<string, object>();
            AddAttributes(propertyInfo, propertyBag);

            if (propertyBag.ContainsKey("Type")) return propertyBag;

            if (propertyInfo.PropertyType.IsBooleanType())
            {
                propertyBag["Type"] = "boolean";
            }
            else if (propertyInfo.PropertyType.IsStringType())
            {
                propertyBag["Type"] = "string";
            }
            else if (propertyInfo.PropertyType.IsNumericType())
            {
                propertyBag["Type"] = "numeric";
            }
            else if (propertyInfo.PropertyType.IsCollectionType())
            {
                propertyBag["Type"] = "list";
            }
            else
            {
                propertyBag["Type"] = propertyInfo.PropertyType.Name.ToLower().Replace("viewmodel", "");
            }

            return propertyBag;
        }

        private void AddAttributes(PropertyInfo propertyInfo, Dictionary<string, object> propertyBag)
        {
            if (propertyInfo.PropertyType.IsEnumType())
            {
                propertyBag["Type"] = "enum";
                propertyBag["Values"] = from object value in Enum.GetValues(propertyInfo.PropertyType) select value.ToString();
            }
            if (
                propertyInfo.GetCustomAttributes()
                    .Any(attr => attr is ReadOnlyAttribute && ((ReadOnlyAttribute)attr).IsReadOnly))
            {
                propertyBag["ReadOnly"] = true;
            }
            if (propertyInfo.GetCustomAttributes().Any(attr => attr is VisibleInTableAttribute))
            {
                propertyBag["VisibleInTable"] = true;
            }
            if (propertyInfo.GetCustomAttributes().Any(attr => attr is EditableInTableAttribute))
            {
                propertyBag["EditableInTable"] = true;
            }
            if (propertyInfo.GetCustomAttributes().Any(attr => attr is OrganizerOnlyAttribute))
            {
                propertyBag["OrganizerOnly"] = true;
            }
            propertyInfo.GetCustomAttributes().Where(attr => attr is TypeNameAttribute).Cast<TypeNameAttribute>().ForEach(attr =>
            {
                propertyBag["Type"] = attr.Name;
            });

            propertyInfo.GetCustomAttributes()
                .Where(attr => attr is ViewNameAttribute)
                .Cast<ViewNameAttribute>()
                .ForEach(attr => propertyBag["ViewName"] = attr.Name);
            propertyBag["Name"] = propertyInfo.Name;
        }
    }
}
