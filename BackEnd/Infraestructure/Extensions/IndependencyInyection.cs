using Domain.Abstractions;
using Infraestructure.Repository;
using Microsoft.Extensions.DependencyInjection;

namespace Infraestructure.Extensions
{
    public static class IndependencyInyection
    {
        public static IServiceCollection AddRepositories(this IServiceCollection service)
        {
            service.AddScoped<IAgencyRepository, AgencyRepository>();
            return service;
        }
    }
}
