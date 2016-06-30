namespace PortalIswintBE.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addedGenre : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.People", "Genre", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.People", "Genre");
        }
    }
}
