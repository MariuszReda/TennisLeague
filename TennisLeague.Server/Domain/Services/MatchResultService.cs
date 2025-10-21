using TennisLeague.Server.Domain.Aggregates;
using TennisLeague.Server.Domain.ValueObjects;

namespace TennisLeague.Server.Domain.Services
{
    public class MatchResultService
    {
        public void ApplyMatchResult(MatchAggregate match, PlayerAggregate player1, PlayerAggregate player2)
        {
            if (match.Result == null)
                throw new Exception("Cannot apply result: match has no result.");

            var winnerId = match.Result.WinnerId;

            var p1Result = new MatchResult(
                match.Id,
                player1.Id,
                match.Result.SetsWon,
                match.Result.SetsLost
            );

            var p2Result = new MatchResult(
                match.Id,
                player2.Id,
                match.Result.SetsLost,
                match.Result.SetsWon
            );

            player1.RecordMatch(p1Result);
            player2.RecordMatch(p2Result);

        }
    }
}
