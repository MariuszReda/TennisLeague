namespace TennisLeague.Server.API.Dto
{
    public class RecordMatchResultDto
    {
        public Guid WinnerPlayerId { get; set; }
        public int SetsWinnerPlayer { get; set; }
        public int SetsLoserPlayer { get; set; }
    }
}
