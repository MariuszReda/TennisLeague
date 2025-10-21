using TennisLeague.Server.Domain.Aggregates;

namespace TennisLeague.Server.Domain.Repositories
{
    public interface IPlayerRepository
    {
        Task<IEnumerable<PlayerAggregate>> GetPlayersInMatchByIdAsync(Guid matchId);
        Task SaveManyAsync(IEnumerable<PlayerAggregate> players);
    }
}
