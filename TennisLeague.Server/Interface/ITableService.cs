using TennisLeague.Server.Dto;

namespace TennisLeague.Server.Interface
{
    public interface ITableService
    {
        Task<ICollection<PlayerStatsDto>> GetTable();
    }
}
