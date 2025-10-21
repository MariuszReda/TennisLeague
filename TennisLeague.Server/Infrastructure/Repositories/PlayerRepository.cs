using TennisLeague.Server.Domain.Aggregates;
using TennisLeague.Server.Domain.Repositories;

namespace TennisLeague.Server.Infrastructure.Repositories
{
    public class PlayerRepository : IPlayerRepository
    {
        public Task<IEnumerable<PlayerAggregate>> GetPlayersInMatchByIdAsync(Guid matchId)
        {
            throw new NotImplementedException();
        }

        public Task SaveManyAsync(IEnumerable<PlayerAggregate> players)
        {
            throw new NotImplementedException();
        }
    }
}
