using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using PortalIswintBE.Models.Entities;

namespace PortalIswintBE.Migrations
{
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<Data.PortalIswintContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Data.PortalIswintContext context)
        {
            var orgs = context.Set<Organizer>();
            var rooms = context.Set<Room>();
            if (orgs.Any())
            {
                return;
            }
            var org1 = new Organizer
            {
                FirstName = "FN",
                LastName = "LN",
                EMail = "EMail",
                BadgeGiven = false
            };
            var org2 = new Organizer
            {
                FirstName = "FN2",
                LastName = "LN2",
                EMail = "EMail2",
                BadgeGiven = true
            };
            orgs.Add(org1);
            orgs.Add(org2);
            rooms.Add(new Room
            {
                Name = "404A"
            });
            rooms.Add(new Room
            {
                Name = "504B"
            });

        }
    }
}
