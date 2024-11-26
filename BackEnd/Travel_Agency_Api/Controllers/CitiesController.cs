using Application.Abstraction;
using Application.TravelAgency.GetOperators;
using Microsoft.AspNetCore.Mvc;

namespace Travel_Agency_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CitiesController : ControllerBase
    {

        private IUseCaseManager _useCaseManager;

        public CitiesController(IUseCaseManager useCaseManager)
        {
            _useCaseManager = useCaseManager;
        }


        [HttpGet]
        public async Task<ActionResult<List<OperatorsResponse>>> GetCities()
        {
            var result = await _useCaseManager.GetCitiesUseCase.GetCitiesAsync();
            return Ok(result);
        }

    }
}
