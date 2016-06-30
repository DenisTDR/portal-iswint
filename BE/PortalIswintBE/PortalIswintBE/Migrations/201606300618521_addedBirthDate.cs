namespace PortalIswintBE.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addedBirthDate : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.People", "BirthDate", c => c.DateTime(nullable: false, precision: 0));
        }
        
        public override void Down()
        {
            DropColumn("dbo.People", "BirthDate");
        }
    }
}
