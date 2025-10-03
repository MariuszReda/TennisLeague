using TennisLeague.Server.API.Dto;

namespace TennisLeague.Server.Application
{
    public interface ITableService
    {
        Task<ICollection<PlayerStatsDto>> GetTable();
    }
}
