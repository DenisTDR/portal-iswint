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

                cfg.CreateMap<Person, PersonViewModel>().AfterMap((p, pvm) =>
                {
                    pvm.RoomId = p.Room?.Id ?? 0;
                    pvm.Room?.People?.Clear();
                });
                cfg.CreateMap<PersonViewModel, Person>();

                cfg.CreateMap<Organizer, OrganizerViewModel>().AfterMap((p, pvm) =>
                {
                    pvm.RoomId = p.Room?.Id ?? 0;
                    pvm.Room?.People?.Clear();
                });
                cfg.CreateMap<OrganizerViewModel, Organizer>();

                cfg.CreateMap<Participant, ParticipantViewModel>().AfterMap((p, pvm) =>
                {
                    pvm.RoomId = p.Room?.Id ?? 0;
                    pvm.Room?.People?.Clear();
                    pvm.Workshop?.Participants?.Clear();
                });
                cfg.CreateMap<ParticipantViewModel, Participant>();

                cfg.CreateMap<Country, CountryViewModel>();
                cfg.CreateMap<CountryViewModel, Country>();

                cfg.CreateMap<Workshop, WorkshopViewModel>();
                cfg.CreateMap<WorkshopViewModel, Workshop>();

                cfg.CreateMap<Mentor, MentorViewModel>();
                cfg.CreateMap<MentorViewModel, Mentor>();

            });


        }
    }
}