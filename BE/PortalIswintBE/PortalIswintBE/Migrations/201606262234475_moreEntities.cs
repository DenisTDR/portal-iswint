namespace PortalIswintBE.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class moreEntities : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Workshops",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Mentor_Id = c.Int(),
                        Wanted_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.People", t => t.Mentor_Id)
                .ForeignKey("dbo.People", t => t.Wanted_Id)
                .Index(t => t.Mentor_Id)
                .Index(t => t.Wanted_Id);
            
            AddColumn("dbo.People", "Workshop_Id", c => c.Int());
            CreateIndex("dbo.People", "Workshop_Id");
            AddForeignKey("dbo.People", "Workshop_Id", "dbo.Workshops", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Workshops", "Wanted_Id", "dbo.People");
            DropForeignKey("dbo.People", "Workshop_Id", "dbo.Workshops");
            DropForeignKey("dbo.Workshops", "Mentor_Id", "dbo.People");
            DropIndex("dbo.Workshops", new[] { "Wanted_Id" });
            DropIndex("dbo.Workshops", new[] { "Mentor_Id" });
            DropIndex("dbo.People", new[] { "Workshop_Id" });
            DropColumn("dbo.People", "Workshop_Id");
            DropTable("dbo.Workshops");
        }
    }
}
