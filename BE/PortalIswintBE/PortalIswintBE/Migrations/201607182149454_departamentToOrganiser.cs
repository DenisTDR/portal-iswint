namespace PortalIswintBE.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class departamentToOrganiser : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Organizers", "Departament", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Organizers", "Departament");
        }
    }
}
