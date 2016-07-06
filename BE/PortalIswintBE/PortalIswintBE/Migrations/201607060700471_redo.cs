namespace PortalIswintBE.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class redo : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Countries",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(unicode: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Mentors",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        FirstName = c.String(unicode: false),
                        LastName = c.String(unicode: false),
                        ShirtSize = c.Int(nullable: false),
                        ShirtGiven = c.Boolean(nullable: false),
                        BadgeGiven = c.Boolean(nullable: false),
                        PhoneNumber = c.String(unicode: false),
                        PhotoUrl = c.String(unicode: false),
                        EMail = c.String(unicode: false),
                        FacebookUrl = c.String(unicode: false),
                        Genre = c.Int(nullable: false),
                        BirthDate = c.DateTime(nullable: false, precision: 0),
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
            
            CreateTable(
                "dbo.Workshops",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Mentor_Id = c.Int(),
                        Wanted_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Mentors", t => t.Mentor_Id)
                .ForeignKey("dbo.Organizers", t => t.Wanted_Id)
                .Index(t => t.Mentor_Id)
                .Index(t => t.Wanted_Id);
            
            CreateTable(
                "dbo.Participants",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        FirstName = c.String(unicode: false),
                        LastName = c.String(unicode: false),
                        ShirtSize = c.Int(nullable: false),
                        ShirtGiven = c.Boolean(nullable: false),
                        BadgeGiven = c.Boolean(nullable: false),
                        PhoneNumber = c.String(unicode: false),
                        PhotoUrl = c.String(unicode: false),
                        EMail = c.String(unicode: false),
                        FacebookUrl = c.String(unicode: false),
                        Genre = c.Int(nullable: false),
                        BirthDate = c.DateTime(nullable: false, precision: 0),
                        Country_Id = c.Int(),
                        Room_Id = c.Int(),
                        Workshop_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Countries", t => t.Country_Id)
                .ForeignKey("dbo.Rooms", t => t.Room_Id)
                .ForeignKey("dbo.Workshops", t => t.Workshop_Id)
                .Index(t => t.Country_Id)
                .Index(t => t.Room_Id)
                .Index(t => t.Workshop_Id);
            
            CreateTable(
                "dbo.Organizers",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        FirstName = c.String(unicode: false),
                        LastName = c.String(unicode: false),
                        ShirtSize = c.Int(nullable: false),
                        ShirtGiven = c.Boolean(nullable: false),
                        BadgeGiven = c.Boolean(nullable: false),
                        PhoneNumber = c.String(unicode: false),
                        PhotoUrl = c.String(unicode: false),
                        EMail = c.String(unicode: false),
                        FacebookUrl = c.String(unicode: false),
                        Genre = c.Int(nullable: false),
                        BirthDate = c.DateTime(nullable: false, precision: 0),
                        Room_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Rooms", t => t.Room_Id)
                .Index(t => t.Room_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Workshops", "Wanted_Id", "dbo.Organizers");
            DropForeignKey("dbo.Organizers", "Room_Id", "dbo.Rooms");
            DropForeignKey("dbo.Participants", "Workshop_Id", "dbo.Workshops");
            DropForeignKey("dbo.Participants", "Room_Id", "dbo.Rooms");
            DropForeignKey("dbo.Participants", "Country_Id", "dbo.Countries");
            DropForeignKey("dbo.Workshops", "Mentor_Id", "dbo.Mentors");
            DropForeignKey("dbo.Mentors", "Room_Id", "dbo.Rooms");
            DropIndex("dbo.Organizers", new[] { "Room_Id" });
            DropIndex("dbo.Participants", new[] { "Workshop_Id" });
            DropIndex("dbo.Participants", new[] { "Room_Id" });
            DropIndex("dbo.Participants", new[] { "Country_Id" });
            DropIndex("dbo.Workshops", new[] { "Wanted_Id" });
            DropIndex("dbo.Workshops", new[] { "Mentor_Id" });
            DropIndex("dbo.Mentors", new[] { "Room_Id" });
            DropTable("dbo.Organizers");
            DropTable("dbo.Participants");
            DropTable("dbo.Workshops");
            DropTable("dbo.Rooms");
            DropTable("dbo.Mentors");
            DropTable("dbo.Countries");
        }
    }
}
