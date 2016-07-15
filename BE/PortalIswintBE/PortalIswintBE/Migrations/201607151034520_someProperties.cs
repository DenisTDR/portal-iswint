namespace PortalIswintBE.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class someProperties : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Participants", "NeedVisa", c => c.Boolean(nullable: false));
            AddColumn("dbo.Participants", "ArrivalTime", c => c.DateTime(nullable: false, precision: 0));
            AddColumn("dbo.Participants", "ArrivalLocation", c => c.String(unicode: false));
            AddColumn("dbo.Participants", "Paid", c => c.Boolean(nullable: false));
            AddColumn("dbo.Participants", "FoodPreferences", c => c.String(unicode: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Participants", "FoodPreferences");
            DropColumn("dbo.Participants", "Paid");
            DropColumn("dbo.Participants", "ArrivalLocation");
            DropColumn("dbo.Participants", "ArrivalTime");
            DropColumn("dbo.Participants", "NeedVisa");
        }
    }
}
