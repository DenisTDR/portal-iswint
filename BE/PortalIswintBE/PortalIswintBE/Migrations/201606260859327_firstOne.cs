namespace PortalIswintBE.Migrations
{
    using System.Data.Entity.Migrations;
    
    public partial class firstOne : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.People",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        LastName = c.String(unicode: false),
                        FirstName = c.String(unicode: false),
                        ShirtSize = c.String(unicode: false),
                        ShirtGiven = c.Boolean(nullable: false),
                        BadgeGiven = c.Boolean(nullable: false),
                        PhoneNumber = c.String(unicode: false),
                        PhotoUrl = c.String(unicode: false),
                        EMail = c.String(unicode: false),
                        FacebookUrl = c.String(unicode: false),
                        Discriminator = c.String(nullable: false, maxLength: 128, storeType: "nvarchar"),
                        Room_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Rooms", t => t.Room_Id)
                .Index(t => t.Room_Id);
            
            CreateTable(
                "dbo.Rooms",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(unicode: false),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.People", "Room_Id", "dbo.Rooms");
            DropIndex("dbo.People", new[] { "Room_Id" });
            DropTable("dbo.Rooms");
            DropTable("dbo.People");
        }
    }
}
