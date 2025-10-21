using TennisLeague.Server.Domain.ValueObjects;

namespace TennisLeague.Server.Domain.Aggregates
{
    public class MatchAggregate
    {
        public Guid Id { get; }
        public DateTime Date { get; private set; }
        public string Location { get; private set; }

        private readonly List<PlayerInMatch> _players = new();
        public IReadOnlyCollection<PlayerInMatch> Players => _players.AsReadOnly();
        public MatchResult? Result { get; private set; }


        public void MatchResult(Guid winnerPlayerId, int setsPlayerWinner, int setsPlayerLoser)
        {
            if (_players.Count != 2)
                throw new Exception("Match must have two players before recording result.");

            if (!_players.Any(p => p.PlayerId == winnerPlayerId))
                throw new Exception("Winner must be one of the players in this match.");

            Result = new MatchResult(Id, winnerPlayerId, setsPlayerWinner, setsPlayerLoser);

        }
    }
}
