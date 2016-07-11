namespace PortalIswintBE.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class workshopAddedProperties : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Workshops", "Name", c => c.String(unicode: false));
            AddColumn("dbo.Workshops", "Description", c => c.String(unicode: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Workshops", "Description");
            DropColumn("dbo.Workshops", "Name");
        }
    }
}
