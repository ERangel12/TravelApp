
using Domain.Agency;
using Microsoft.EntityFrameworkCore;

namespace Domain
{
    public class DbContextSql : DbContext
    {
        public DbContextSql(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Operator> Operators { get; set; } 
        public DbSet<City> Cities { get; set; }
        public DbSet<TravelSchedule> TravelSchedule { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfigurationsFromAssembly(typeof(DbContextSql).Assembly);
        }
    }
}
