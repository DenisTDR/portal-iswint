namespace PortalIswintBE.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class sessions : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Sessions",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Token = c.String(unicode: false),
                        Account_Id = c.Int(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Accounts", t => t.Account_Id, cascadeDelete: true)
                .Index(t => t.Account_Id);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Sessions", "Account_Id", "dbo.Accounts");
            DropIndex("dbo.Sessions", new[] { "Account_Id" });
            DropTable("dbo.Sessions");
        }
    }
}
