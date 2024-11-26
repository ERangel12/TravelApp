namespace Application.TravelAgency.GetCountries
{
    public interface IGetCitiesUseCase
    {
        Task<List<CityResult>> GetCitiesAsync();
    }
}
