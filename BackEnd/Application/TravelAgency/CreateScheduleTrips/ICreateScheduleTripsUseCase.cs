namespace Application.TravelAgency.CreateScheduleTrips
{
    public interface ICreateScheduleTripsUseCase
    {
        Task CreateScheduleTripsAsync(ScheduleTripRequest request);
    }
}
