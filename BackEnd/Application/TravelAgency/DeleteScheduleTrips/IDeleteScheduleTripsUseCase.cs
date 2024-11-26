namespace Application.TravelAgency.DeleteScheduleTrips
{
    public interface IDeleteScheduleTripsUseCase
    {
        Task<bool> DeleteScheduleTripAsync(int id);
    }
}
