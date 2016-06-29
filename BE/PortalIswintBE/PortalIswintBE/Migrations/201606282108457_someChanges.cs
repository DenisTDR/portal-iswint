namespace PortalIswintBE.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class someChanges : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.People", "ShirtSize", c => c.Int(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.People", "ShirtSize", c => c.String(unicode: false));
        }
    }
}
