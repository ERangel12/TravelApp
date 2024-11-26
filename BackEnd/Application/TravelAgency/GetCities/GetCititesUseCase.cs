
using Domain.Abstractions;

namespace Application.TravelAgency.GetCountries
{
    public class GetCititesUseCase : IGetCitiesUseCase
    {
        private IAgencyRepository repo;

        public GetCititesUseCase(IAgencyRepository repo)
        {
            this.repo = repo;
        }

        public async Task<List<CityResult>> GetCitiesAsync() => (await repo.GetCitiesAsync()).Select(s => new CityResult()
        {
            Id = s.CityId,
            City = s.CityName
        }).ToList();
    }
}
