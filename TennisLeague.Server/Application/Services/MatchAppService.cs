using TennisLeague.Server.API.Dto;
using TennisLeague.Server.Application.Interfaces;
using TennisLeague.Server.Domain.Repositories;
using TennisLeague.Server.Domain.Services;

namespace TennisLeague.Server.Application.Services
{
    public class MatchAppService : IMatchAppService
    {
        private readonly IMatchRepository _matchRepository;
        private readonly IPlayerRepository _playerRepository;
        private readonly MatchResultService _matchResultService;
        public MatchAppService(IMatchRepository matchRepository, IPlayerRepository playerRepository)
        {
            _matchRepository = matchRepository;
            _playerRepository = playerRepository;
        }
        public async Task<IEnumerable<object>> GetAllMatchesAsync()
        {
            var macthes = await _matchRepository.GetAllAsync();

            return macthes;
        }

        public async Task<object> GetMatchByIdAsync(Guid matchId)
        {
            var match = await _matchRepository.GetByIdAsync(matchId);
            if (match == null)
                return null;
            return match;
        }

        public async Task RecordMatchResultAsync(Guid matchId, RecordMatchResultDto dto)
        {
            var match = await _matchRepository.GetByIdAsync(matchId);
            if (match == null)
                throw new InvalidOperationException("Match not found");

            var players = (await _playerRepository.GetPlayersInMatchByIdAsync(matchId)).ToList();

            if (players.Count > 2)
                throw new InvalidOperationException("No players found for this match");


            match.MatchResult(dto.WinnerPlayerId, dto.SetsWinnerPlayer, dto.SetsLoserPlayer);
            _matchResultService.ApplyMatchResult(match, players[0], players[1]);

            await _matchRepository.SaveAsync(match);
            await _playerRepository.SaveManyAsync(players);
        }
    }
}
