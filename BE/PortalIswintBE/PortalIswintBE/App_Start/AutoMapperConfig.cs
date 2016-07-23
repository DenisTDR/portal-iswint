using AutoMapper;
using PortalIswintBE.Data.Models.Entities;
using PortalIswintBE.Data.Models.Entities.Auth;
using PortalIswintBE.Data.Models.ViewModels;
using PortalIswintBE.Data.Models.ViewModels.Auth;

namespace PortalIswintBE
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
                    pvm.Nationality = Mapper.Map<CountryViewModel>(p.Country);
                });
                cfg.CreateMap<ParticipantViewModel, Participant>().AfterMap((pvm, p) =>
                {
                    p.Country = Mapper.Map<Country>(pvm.Nationality);
                });

                cfg.CreateMap<Country, CountryViewModel>();
                cfg.CreateMap<CountryViewModel, Country>();

                cfg.CreateMap<Workshop, WorkshopViewModel>().AfterMap((w, wvm) =>
                {
                    if (wvm.Mentor != null)
                    {
                        wvm.Mentor.Workshop = null;
                    }
                });
                cfg.CreateMap<WorkshopViewModel, Workshop>();

                cfg.CreateMap<Mentor, MentorViewModel>().AfterMap((m, mvm) =>
                {
                    if (mvm.Workshop != null)
                    {
                        mvm.Workshop.Mentor = null;
                    }
                });
                cfg.CreateMap<MentorViewModel, Mentor>();

                cfg.CreateMap<Session, TokenResponse>();
                cfg.CreateMap<TokenResponse, Session>();

                cfg.CreateMap<Santinel, SantinelViewModel>();
                cfg.CreateMap<SantinelViewModel, Santinel>();

            });


        }
    }
}