namespace Application.TravelAgency.GetOperators
{
    public interface IGetOperatorsUseCase
    {
        Task<List<OperatorsResponse>> GetOperatorsAsync();
    }
}
