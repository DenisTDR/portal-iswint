using PortalIswintBE.Data.Models.Entities.Auth;

namespace PortalIswintBE.Data.Models.ModelMappings.Auth
{
    public class SessionMap:EntityMap<Session>
    {
        public SessionMap()
        {
            HasRequired(ses => ses.Account);
        }
    }
}