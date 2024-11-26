using Application.Abstraction;
using Application.TravelAgency.GetOperators;
using Microsoft.AspNetCore.Mvc;

namespace Travel_Agency_Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OperatorsController : ControllerBase
    {
        private IUseCaseManager _useCaseManager;

        public OperatorsController(IUseCaseManager useCaseManager)
        {
            _useCaseManager = useCaseManager;
        }

        [HttpGet]
        public async Task<ActionResult<List<OperatorsResponse>>> GetOperators()
        {
            var result = await _useCaseManager.GetOperatorsUseCase.GetOperatorsAsync();
            return Ok(result);
        }    
    }
}
