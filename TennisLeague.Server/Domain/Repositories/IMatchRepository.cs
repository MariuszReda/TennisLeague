using TennisLeague.Server.Domain.Aggregates;

namespace TennisLeague.Server.Domain.Repositories
{
    public interface IMatchRepository
    {
        Task<MatchAggregate> GetByIdAsync(Guid matchId);
        Task<IEnumerable<MatchAggregate>> GetAllAsync();
        Task SaveAsync(MatchAggregate match);
    }
}
