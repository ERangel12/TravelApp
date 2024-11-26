using Domain.Agency;

namespace Domain.Abstractions
{
    public interface IAgencyRepository
    {
        Task<List<Operator>> GetOperatorsAsync();
        Task<List<City>> GetCitiesAsync();
        Task<List<TravelSchedule>> GetTravelScheduleAsync();
        Task AddTravelScheduleAsync(TravelSchedule request);
        Task<TravelSchedule> SelectTravelScheduleAsync(int idTravelSchedule);
        Task DeleteTravelScheduleAsync(TravelSchedule request);
        Task UpdateTravelScheduleAsync(TravelSchedule request);
    }
}
