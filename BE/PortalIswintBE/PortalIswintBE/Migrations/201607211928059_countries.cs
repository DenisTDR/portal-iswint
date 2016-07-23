namespace PortalIswintBE.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class countries : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Participants", "Allergies", c => c.String(unicode: false));
            AddColumn("dbo.Participants", "AdditionalFoodPreferences", c => c.String(unicode: false));
            AddColumn("dbo.Participants", "Residence_Id", c => c.Int());
            CreateIndex("dbo.Participants", "Residence_Id");
            AddForeignKey("dbo.Participants", "Residence_Id", "dbo.Countries", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Participants", "Residence_Id", "dbo.Countries");
            DropIndex("dbo.Participants", new[] { "Residence_Id" });
            DropColumn("dbo.Participants", "Residence_Id");
            DropColumn("dbo.Participants", "AdditionalFoodPreferences");
            DropColumn("dbo.Participants", "Allergies");
        }
    }
}
