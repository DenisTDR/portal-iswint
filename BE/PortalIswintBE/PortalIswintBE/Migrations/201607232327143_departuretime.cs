namespace PortalIswintBE.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class departuretime : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Participants", "DepartureTime", c => c.DateTime(nullable: false, precision: 0));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Participants", "DepartureTime");
        }
    }
}
