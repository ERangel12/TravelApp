namespace Application.TravelAgency.GetScheduleTrips
{
    public class GetScheduleTripResponse
    {
        public int TravelId { get; set; }
        public string? OrigenName { get; set; }
        public string? DestinationName { get; set; }
        public string? OperatorName { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
    }
}
