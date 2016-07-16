namespace PortalIswintBE.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class accountName : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Accounts", "Name", c => c.String(unicode: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.Accounts", "Name");
        }
    }
}
