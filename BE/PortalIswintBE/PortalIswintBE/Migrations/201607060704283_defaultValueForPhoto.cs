namespace PortalIswintBE.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class defaultValueForPhoto : DbMigration
    {
        public override void Up()
        {
            Sql("UPDATE Mentors SET PhotoUrl = 'images/randomPerson.png' WHERE PhotoUrl IS NULL");
            Sql("UPDATE Organizers SET PhotoUrl = 'images/randomPerson.png' WHERE PhotoUrl IS NULL;");
            Sql("UPDATE Participants SET PhotoUrl = 'images/randomPerson.png' WHERE PhotoUrl IS NULL;");

            AlterColumn("dbo.Mentors", "PhotoUrl",
                c => c.String(unicode: false, nullable: false, defaultValue: "images/randomPerson.png"));
            AlterColumn("dbo.Organizers", "PhotoUrl",
                c => c.String(unicode: false, nullable: false, defaultValue: "images/randomPerson.png"));
            AlterColumn("dbo.Participants", "PhotoUrl",
                c => c.String(unicode: false, nullable: false, defaultValue: "images/randomPerson.png"));
        }

        public override void Down()
        {
            AlterColumn("dbo.Mentors", "PhotoUrl",
                c => c.String(unicode: false, nullable: true));
            AlterColumn("dbo.Organizers", "PhotoUrl",
                c => c.String(unicode: false, nullable: true));
            AlterColumn("dbo.Participants", "PhotoUrl",
                c => c.String(unicode: false, nullable: true));
        }
    }
}
