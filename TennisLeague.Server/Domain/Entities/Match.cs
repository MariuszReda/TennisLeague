namespace TennisLeague.Server.Domain.Entities
{
    public class Match
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string Location { get; set; }        
        public ICollection<PlayerMatch> PlayerMatches { get; set; }
    }
}
