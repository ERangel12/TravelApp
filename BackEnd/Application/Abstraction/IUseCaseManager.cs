using Application.TravelAgency.CreateScheduleTrips;
using Application.TravelAgency.DeleteScheduleTrips;
using Application.TravelAgency.EditScheduleTrip;
using Application.TravelAgency.GetCountries;
using Application.TravelAgency.GetOperators;
using Application.TravelAgency.GetScheduleTrips;

namespace Application.Abstraction
{
    public interface IUseCaseManager
    {
        public IGetOperatorsUseCase GetOperatorsUseCase { get; }
        public IGetCitiesUseCase GetCitiesUseCase { get; }
        public IGetScheduleTripsUseCase GetScheduleTripsUseCase { get; }  
        public ICreateScheduleTripsUseCase CreateScheduleTripsUse { get; }
        public IDeleteScheduleTripsUseCase DeleteScheduleTripsUseCase { get; }
        public IUpdateScheduleTripUseCase UpdateScheduleTripsUseCase { get; }
    }
}
