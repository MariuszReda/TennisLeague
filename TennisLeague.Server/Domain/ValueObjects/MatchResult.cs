namespace TennisLeague.Server.Domain.ValueObjects
{
    public record MatchResult(Guid MatchId, Guid WinnerId, int SetsWon, int SetsLost)
    {
        public bool IsWInner => SetsWon > SetsLost;
    }
}
