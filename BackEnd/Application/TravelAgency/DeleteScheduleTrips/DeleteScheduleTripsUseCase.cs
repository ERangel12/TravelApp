
using Domain.Abstractions;

namespace Application.TravelAgency.DeleteScheduleTrips
{
    public class DeleteScheduleTripsUseCase : IDeleteScheduleTripsUseCase
    {
        private IAgencyRepository repo;

        public DeleteScheduleTripsUseCase(IAgencyRepository repo)
        {
            this.repo = repo;
        }

        public async Task<bool> DeleteScheduleTripAsync(int id)
        {
            var schedule = await repo.SelectTravelScheduleAsync(id);
            if (schedule is null)
            {
                return false;
            }
            
            await repo.DeleteTravelScheduleAsync(schedule);
            
            return true;
        }


    }
}
