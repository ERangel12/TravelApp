using Application.Abstraction;
using Application.TravelAgency.CreateScheduleTrips;
using Application.TravelAgency.DeleteScheduleTrips;
using Application.TravelAgency.EditScheduleTrip;
using Application.TravelAgency.GetCountries;
using Application.TravelAgency.GetOperators;
using Application.TravelAgency.GetScheduleTrips;

namespace Application
{
    public class UseCaseManager : IUseCaseManager
    {
        public UseCaseManager(IGetOperatorsUseCase getOperatorsUseCase,
                              IGetCitiesUseCase getCountries,
                              IGetScheduleTripsUseCase getScheduleTrips,
                              ICreateScheduleTripsUseCase createScheduleTripsUse,
                              IDeleteScheduleTripsUseCase deleteScheduleTripsUseCase,
                              IUpdateScheduleTripUseCase updateScheduleTripsUseCase)
        {
            GetOperatorsUseCase = getOperatorsUseCase;
            GetCitiesUseCase = getCountries;
            GetScheduleTripsUseCase = getScheduleTrips;
            CreateScheduleTripsUse = createScheduleTripsUse;
            DeleteScheduleTripsUseCase = deleteScheduleTripsUseCase;
            UpdateScheduleTripsUseCase = updateScheduleTripsUseCase;
        }

        public IGetOperatorsUseCase GetOperatorsUseCase { get; }
        public IGetCitiesUseCase GetCitiesUseCase { get; }
        public IGetScheduleTripsUseCase GetScheduleTripsUseCase { get; }
        public ICreateScheduleTripsUseCase CreateScheduleTripsUse { get; }
        public IDeleteScheduleTripsUseCase DeleteScheduleTripsUseCase { get; }
        public IUpdateScheduleTripUseCase UpdateScheduleTripsUseCase { get; }
    }
}
