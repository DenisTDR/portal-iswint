namespace PortalIswintBE.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class sessionExpiration : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Sessions", "Expiration", c => c.DateTime(nullable: false, precision: 0));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Sessions", "Expiration");
        }
    }
}
