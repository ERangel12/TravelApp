
using Domain.Abstractions;

namespace Application.TravelAgency.CreateScheduleTrips
{
    public class CreateScheduleTripsUseCase : ICreateScheduleTripsUseCase
    {
        private IAgencyRepository repo;

        public CreateScheduleTripsUseCase(IAgencyRepository repo)
        {
            this.repo = repo;
        }

        public Task CreateScheduleTripsAsync(ScheduleTripRequest request)
        {
            return repo.AddTravelScheduleAsync(new Domain.Agency.TravelSchedule()
            {
                OriginId = request.OriginId,
                DestinationId = request.DestinationId,
                OperatorId = request.OperatorId,
                StartDate = request.StartDate,
                EndDate = request.EndDate,
                Status = true   
            });
        }
    }
}
