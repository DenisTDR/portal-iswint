using System.Net;
using System.Threading.Tasks;
using System.Web.Http;
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
                
            }
            return null;
        }
    }
}