using TennisLeague.Server.API.Dto;

namespace TennisLeague.Server.Application.Interfaces
{
    public interface IMatchAppService
    {
        Task<object> GetMatchByIdAsync(Guid matchId);
        Task<IEnumerable<Object>> GetAllMatchesAsync();
        Task RecordMatchResultAsync(Guid matchId, RecordMatchResultDto recordMatchResultDto);
    }
}
