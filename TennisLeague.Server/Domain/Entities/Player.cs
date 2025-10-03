namespace TennisLeague.Server.Domain.Entities
{
    public class Player
    {
        public int Id { get; set; }
        public int Points { get; set; }
        public int Matches { get; set; }
        public Guid UserId { get; set; }
        public User User { get; set; }
        public ICollection<PlayerMatch> PlayerMatches { get; set; }
    }
}
