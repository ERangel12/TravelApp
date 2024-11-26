namespace Domain.Agency
{
    public class TravelSchedule
    {
        public int TravelId { get; set; }
        public City Origin { get; set; }
        public int OriginId { get; set; }
        public City Destination { get; set; }
        public int DestinationId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public Operator Operator { get; set; }
        public int OperatorId { get; set; }
        public bool Status { get; set; }

    }
}
