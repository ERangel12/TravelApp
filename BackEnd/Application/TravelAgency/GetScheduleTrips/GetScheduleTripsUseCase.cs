
using Domain.Abstractions;

namespace Application.TravelAgency.GetScheduleTrips
{
    public class GetScheduleTripsUseCase : IGetScheduleTripsUseCase
    {
        private IAgencyRepository repo;

        public GetScheduleTripsUseCase(IAgencyRepository repo)
        {
            this.repo = repo;
        }

        public async Task<List<GetScheduleTripResponse>> GetScheduleTripAsync()=> (await repo.GetTravelScheduleAsync()).Select(s=> new GetScheduleTripResponse()
        {
            TravelId = s.TravelId,
            OrigenName = s.Origin.CityName,
            DestinationName = s.Destination.CityName,
            OperatorName = s.Operator.FullName,
            StartDate = s.StartDate,
            EndDate = s.EndDate,
        }).ToList();
    }
}
