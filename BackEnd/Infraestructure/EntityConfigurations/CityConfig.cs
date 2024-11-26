using Domain.Agency;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infraestructure.EntityConfigurations
{
    public class CityConfig : IEntityTypeConfiguration<City>
    {
        public void Configure(EntityTypeBuilder<City> builder)
        {
            builder.ToTable("DESTINATION_CITIES");

            builder.HasKey(City => City.CityId)
                   .HasName("ID_CITY");

            builder.Property(City => City.CityId)
                    .HasColumnName("ID_CITY");

            builder.Property(City => City.CityName)
                    .HasColumnName("CITY");
        }
    }
}
