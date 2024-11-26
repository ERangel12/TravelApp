using Domain.Agency;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infraestructure.EntityConfigurations
{
    public class TravelScheduleConfig : IEntityTypeConfiguration<TravelSchedule>
    {
        public void Configure(EntityTypeBuilder<TravelSchedule> builder)
        {
            builder.ToTable("TRAVEL_SCHEDULE");

            builder.HasKey(TravelSchedule => TravelSchedule.TravelId)
                   .HasName("TRAVEL_ID");

            builder.HasOne(TravelSchedule => TravelSchedule.Origin)
                   .WithMany()
                   .HasForeignKey(s=> s.OriginId);

            builder.HasOne(TravelSchedule => TravelSchedule.Destination)
                    .WithMany()
                    .HasForeignKey(s => s.DestinationId);

            builder.HasOne(TravelSchedule => TravelSchedule.Operator)
                    .WithMany()
                    .HasForeignKey(s => s.OperatorId);

            builder.Property(TravelSchedule => TravelSchedule.TravelId)
                    .HasColumnName("TRAVEL_ID");

            builder.Property(TravelSchedule => TravelSchedule.OriginId)
                    .HasColumnName("ORIGEN_ID");

            builder.Property(TravelSchedule => TravelSchedule.DestinationId)
                    .HasColumnName("DESTINATION_ID");

            builder.Property(TravelSchedule => TravelSchedule.StartDate)
                    .HasColumnName("START_DATE");

            builder.Property(TravelSchedule => TravelSchedule.EndDate)
                    .HasColumnName("END_DATE");

            builder.Property(TravelSchedule => TravelSchedule.OperatorId)
                    .HasColumnName("OPERATOR_ID");

            builder.Property(TravelSchedule => TravelSchedule.Status)
                    .HasColumnName("STATUS");
        }
    }
}
