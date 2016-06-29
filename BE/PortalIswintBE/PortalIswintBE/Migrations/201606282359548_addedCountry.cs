namespace PortalIswintBE.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class addedCountry : DbMigration
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
            
            AddColumn("dbo.People", "Country_Id", c => c.Int());
            CreateIndex("dbo.People", "Country_Id");
            AddForeignKey("dbo.People", "Country_Id", "dbo.Countries", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.People", "Country_Id", "dbo.Countries");
            DropIndex("dbo.People", new[] { "Country_Id" });
            DropColumn("dbo.People", "Country_Id");
            DropTable("dbo.Countries");
        }
    }
}
