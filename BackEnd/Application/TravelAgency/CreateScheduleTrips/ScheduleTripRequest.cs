namespace Application.TravelAgency.CreateScheduleTrips
{
    public class ScheduleTripRequest
    {
        public int DestinationId { get; set; }
        public int OriginId { get; set; }
        public int OperatorId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }

    }
}
