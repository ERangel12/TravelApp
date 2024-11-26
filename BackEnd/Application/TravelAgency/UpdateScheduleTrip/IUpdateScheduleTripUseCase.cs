using Application.TravelAgency.CreateScheduleTrips;

namespace Application.TravelAgency.EditScheduleTrip
{
    public interface IUpdateScheduleTripUseCase
    {
        Task<bool> UpdateScheduleTripUseCaseAsync(int idSchedule, ScheduleTripRequest request);
    }
}
