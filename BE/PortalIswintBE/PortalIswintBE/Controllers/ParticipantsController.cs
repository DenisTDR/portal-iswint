using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
using AutoMapper;
using Microsoft.Ajax.Utilities;
using PortalIswintBE.Data.Db;
using PortalIswintBE.Data.Models.Entities;
using PortalIswintBE.Data.Models.ViewModels;

namespace PortalIswintBE.Controllers
{
    public class ParticipantsController : GenericController<Participant, ParticipantViewModel>
    {
        [System.Web.Mvc.HttpGet]
        public async Task<IHttpActionResult> GetArrivals()
        {
            using (var db = new Database())
            {
                var repo = db.Repo<Participant>();
                var list = new List<ArrivalViewModel>();
                (await repo.GetAllAsync()).ForEach(part =>
                {
                    list.Add(new ArrivalViewModel
                    {
                        Participant = new ParticipantViewModel
                        {
                            Id = part.Id,
                            FirstName = part.FirstName,
                            LastName = part.LastName
                        },
                        ArrivalLocation = part.ArrivalLocation,
                        ArrivalTime = part.ArrivalTime
                    });
                });
                return Ok(list);
            }
        }
    }
}