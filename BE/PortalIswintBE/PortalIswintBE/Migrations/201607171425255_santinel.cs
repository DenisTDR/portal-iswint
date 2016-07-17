namespace PortalIswintBE.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class santinel : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Santinels",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        From = c.DateTime(nullable: false, precision: 0),
                        To = c.DateTime(nullable: false, precision: 0),
                        Organizer1_Id = c.Int(),
                        Organizer2_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Organizers", t => t.Organizer1_Id)
                .ForeignKey("dbo.Organizers", t => t.Organizer2_Id)
                .Index(t => t.Organizer1_Id)
                .Index(t => t.Organizer2_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Santinels", "Organizer2_Id", "dbo.Organizers");
            DropForeignKey("dbo.Santinels", "Organizer1_Id", "dbo.Organizers");
            DropIndex("dbo.Santinels", new[] { "Organizer2_Id" });
            DropIndex("dbo.Santinels", new[] { "Organizer1_Id" });
            DropTable("dbo.Santinels");
        }
    }
}
