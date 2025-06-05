namespace TennisLeague.Server.Entities
{
    public class PlayerMatch
    {
        public int PlayerId { get; set; }
        public Player Player { get; set; }
        public int MatchId { get; set; }
        public Match Match { get; set; }
        public int SetsWon {  get; set; }
        public int SetsLost { get; set; }
        public bool IsWinner { get; set; }
    }
}
