
using Domain.Abstractions;

namespace Application.TravelAgency.GetOperators
{
    public class GetOperatorsUseCase : IGetOperatorsUseCase
    {
        private IAgencyRepository repo;

        public GetOperatorsUseCase(IAgencyRepository repo)
        {
            this.repo = repo;
        }

        public async Task<List<OperatorsResponse>> GetOperatorsAsync() => (await repo.GetOperatorsAsync())
                                                                                    .Select(s => new OperatorsResponse { 
                                                                                                                            Id = s.Id, 
                                                                                                                            Name = s.FullName 
                                                                                                                        }).ToList();

    }
}
