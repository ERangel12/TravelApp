using Application.Extensions;
using Infraestructure.Extensions;

namespace Travel_Agency_Api.Extensions
{
    public static class DependencyInjection
    {
        public static IServiceCollection AddServices(this IServiceCollection service)
        {
            service.AddApplication();
            service.AddRepositories();
            return service;
        }
    }
}
