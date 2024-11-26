using Application.TravelAgency.CreateScheduleTrips;
using Domain.Abstractions;

namespace Application.TravelAgency.EditScheduleTrip
{
    public class UpdateScheduleTripUseCase : IUpdateScheduleTripUseCase
    {
        private IAgencyRepository repo;

        public UpdateScheduleTripUseCase(IAgencyRepository repo)
        {
            this.repo = repo;
        }

        public async Task<bool> UpdateScheduleTripUseCaseAsync(int idSchedule, ScheduleTripRequest request)
        {
            var schedule = await repo.SelectTravelScheduleAsync(idSchedule);
            if (schedule is null)
            {
                return false;
            }
            
            schedule.StartDate = request.StartDate;
            schedule.EndDate = request.EndDate;
            schedule.DestinationId = request.DestinationId;
            schedule.OriginId = request.OriginId;
            schedule.OperatorId = request.OperatorId;

            await repo.UpdateTravelScheduleAsync(schedule);
            return true;
        }
    }
}
