namespace PortalIswintBE.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class lostOrFound : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.LostOrFounds",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        What = c.String(unicode: false),
                        When = c.String(unicode: false),
                        Where = c.String(unicode: false),
                        Description = c.String(unicode: false),
                        OrganizerContact_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Organizers", t => t.OrganizerContact_Id)
                .Index(t => t.OrganizerContact_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.LostOrFounds", "OrganizerContact_Id", "dbo.Organizers");
            DropIndex("dbo.LostOrFounds", new[] { "OrganizerContact_Id" });
            DropTable("dbo.LostOrFounds");
        }
    }
}
