using Domain;
using Domain.Abstractions;
using Domain.Agency;
using Microsoft.EntityFrameworkCore;

namespace Infraestructure.Repository
{

    public class AgencyRepository : IAgencyRepository
    {
        private readonly DbContextSql _context;

        public AgencyRepository(DbContextSql context)
        {
            _context = context;
        }

        public async Task AddTravelScheduleAsync(TravelSchedule request)
        {
            _context.TravelSchedule.Add(request);
            await _context.SaveChangesAsync();
        }

        public async Task<List<City>> GetCitiesAsync() => await _context.Cities.ToListAsync();

        public async Task<List<Operator>> GetOperatorsAsync() => await _context.Operators.ToListAsync();

        public async Task<List<TravelSchedule>> GetTravelScheduleAsync() => await _context.TravelSchedule
                                                                                         .Include(s => s.Origin)
                                                                                         .Include(s => s.Destination)
                                                                                         .Include(s => s.Operator)
                                                                                         .Where(s => s.Status)
                                                                                         .ToListAsync();
        public async Task<TravelSchedule> SelectTravelScheduleAsync(int idTravelSchedule) => await _context.TravelSchedule.Where(s=> s.Status && s.TravelId==idTravelSchedule).FirstAsync();

        public async Task DeleteTravelScheduleAsync(TravelSchedule request)
        {
            request.Status = false;
            _context.TravelSchedule.Update(request);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateTravelScheduleAsync(TravelSchedule request)
        {
            _context.TravelSchedule.Update(request);
            await _context.SaveChangesAsync();
        }
    }
}
