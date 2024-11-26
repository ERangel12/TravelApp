using Application.Abstraction;
using Application.TravelAgency.CreateScheduleTrips;
using Microsoft.AspNetCore.Mvc;

namespace Travel_Agency_Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TravelScheduleController : ControllerBase
    {
        private IUseCaseManager _useCaseManager;

        public TravelScheduleController(IUseCaseManager useCaseManager)
        {
            _useCaseManager = useCaseManager;
        }
        
        /// <summary>
        /// 
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public async Task<ActionResult> GetScheduleTrips()
        {
            var result = await _useCaseManager.GetScheduleTripsUseCase.GetScheduleTripAsync();

            return Ok(result);
        }
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<ActionResult> CreateScheduleTrip([FromBody] ScheduleTripRequest request)
        {
            await _useCaseManager.CreateScheduleTripsUse.CreateScheduleTripsAsync(request);

            return Created();
        }
        
        /// <summary>
        /// 
        /// </summary>
        /// <param name="idSchedule"></param>
        /// <returns></returns>
        [HttpDelete("{idSchedule}")]
        public async Task<ActionResult> DeleteScheduleTrip(int idSchedule)
        {
            var result = await _useCaseManager.DeleteScheduleTripsUseCase.DeleteScheduleTripAsync(idSchedule);

            return result ? Ok() : BadRequest();
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="idSchedule"></param>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpPut("{idSchedule}")]
        public async Task<ActionResult> DeleteScheduleTrip(int idSchedule, [FromBody] ScheduleTripRequest request)
        {
            var result = await _useCaseManager.UpdateScheduleTripsUseCase.UpdateScheduleTripUseCaseAsync(idSchedule, request);

            return result ? Ok() : BadRequest();
        }
    }
}
