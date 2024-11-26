using Application.Abstraction;
using Application.TravelAgency.CreateScheduleTrips;
using Application.TravelAgency.DeleteScheduleTrips;
using Application.TravelAgency.EditScheduleTrip;
using Application.TravelAgency.GetCountries;
using Application.TravelAgency.GetOperators;
using Application.TravelAgency.GetScheduleTrips;
using Microsoft.Extensions.DependencyInjection;

namespace Application.Extensions
{
    public static class IndependencyInyection
    {
        public static IServiceCollection AddApplication(this IServiceCollection service)
        {
            service.AddUseManager();
            service.AddUseCases();
            return service;
        }

        public static IServiceCollection AddUseManager(this IServiceCollection service)
        {
            service.AddScoped<IUseCaseManager, UseCaseManager>();
            return service;

        }

        public static IServiceCollection AddUseCases(this IServiceCollection service)
        {
            service.AddScoped<IGetOperatorsUseCase, GetOperatorsUseCase>();
            service.AddScoped<IGetCitiesUseCase, GetCititesUseCase>();
            service.AddScoped<IGetScheduleTripsUseCase, GetScheduleTripsUseCase>();
            service.AddScoped<ICreateScheduleTripsUseCase, CreateScheduleTripsUseCase>();
            service.AddScoped<IDeleteScheduleTripsUseCase, DeleteScheduleTripsUseCase>();
            service.AddScoped<IUpdateScheduleTripUseCase, UpdateScheduleTripUseCase>();
            return service;

        }
    }
}
