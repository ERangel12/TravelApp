namespace Application.TravelAgency.GetScheduleTrips
{
    public interface IGetScheduleTripsUseCase
    {
        Task<List<GetScheduleTripResponse>> GetScheduleTripAsync();
    }
}
