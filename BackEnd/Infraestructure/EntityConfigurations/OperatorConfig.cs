using Domain.Agency;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace Infraestructure.EntityConfigurations
{
    public class OperatorConfig : IEntityTypeConfiguration<Operator>
    {
        public void Configure(EntityTypeBuilder<Operator> builder)
        {
            builder.ToTable("OPERATORS");

            builder.HasKey(Operator=> Operator.Id)
                   .HasName("ID_OPERATOR");

            builder.Property(Operator => Operator.Id)
                    .HasColumnName("ID_OPERATOR");

            builder.Property(Operator => Operator.Name)
                .HasColumnName("NAME");

            builder.Property(Operator => Operator.LastName)
                .HasColumnName("LAST_NAME");


            builder.Property(Operator => Operator.FullName)
                .HasColumnName("FULL_NAME");
        }
    }
}
