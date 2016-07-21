namespace PortalIswintBE.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class trasPeCur : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.TrasPeCurs",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Reason = c.String(unicode: false),
                        Punishment = c.String(unicode: false),
                        PunishmentDone = c.Boolean(nullable: false),
                        Organizer_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Organizers", t => t.Organizer_Id)
                .Index(t => t.Organizer_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.TrasPeCurs", "Organizer_Id", "dbo.Organizers");
            DropIndex("dbo.TrasPeCurs", new[] { "Organizer_Id" });
            DropTable("dbo.TrasPeCurs");
        }
    }
}
