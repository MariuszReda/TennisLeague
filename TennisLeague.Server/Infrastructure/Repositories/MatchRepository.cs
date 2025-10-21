using TennisLeague.Server.Domain.Aggregates;
using TennisLeague.Server.Domain.Repositories;

namespace TennisLeague.Server.Infrastructure.Repositories
{
    public class MatchRepository : IMatchRepository
    {
        public Task<IEnumerable<MatchAggregate>> GetAllAsync()
        {
            throw new NotImplementedException();
        }

        public Task<MatchAggregate> GetByIdAsync(Guid matchId)
        {
            throw new NotImplementedException();
        }

        public Task SaveAsync(MatchAggregate match)
        {
            throw new NotImplementedException();
        }
    }
}
