using AutoMapper;
using PortalIswintBE.Models.Entities;
using PortalIswintBE.Models.ViewModels;

namespace PortalIswintBE.App_Start
{
    public static class AutoMapperConfig
    {
        public static void RegisterMappings()
        {
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Room, RoomViewModel>();
                cfg.CreateMap<RoomViewModel, Room>();

                cfg.CreateMap<Person, PersonViewModel>().AfterMap((p, pvm) => { pvm.RoomId = p.Room?.Id??0; });
                cfg.CreateMap<PersonViewModel, Person>();

                cfg.CreateMap<Organizer, OrganizerViewModel>().AfterMap((p, pvm) => { pvm.RoomId = p.Room?.Id??0; });
                cfg.CreateMap<OrganizerViewModel, Organizer>();
                
            });


        }
    }
}