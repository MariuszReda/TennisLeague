namespace TennisLeague.Server.Dto
{
    public class PlayerStatsDto
    {
        public int Id { get; set; } 
        public int Position { get; set; }
        public string FullName { get; set; }

        public int Matches { get; set; }
        public int Wins { get; set; }
        public int Losses { get; set; }

        public int SetsWon { get; set; }
        public int SetsLost { get; set; }

        public int Points { get; set; }
    }
}
