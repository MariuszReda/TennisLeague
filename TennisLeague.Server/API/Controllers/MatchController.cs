using Microsoft.AspNetCore.Mvc;
using TennisLeague.Server.API.Dto;
using TennisLeague.Server.Application.Interfaces;

namespace TennisLeague.Server.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class MatchController : ControllerBase
    {
        private readonly IMatchAppService _matchService;
        public MatchController(IMatchAppService matchService)
        {
            _matchService = matchService;
        }


        [HttpGet]
        public async Task<IActionResult> GetAllMatches()
        {
            var matches = _matchService.GetAllMatchesAsync();
            return Ok(matches);
        }

        [HttpGet("{matchId}")]
        public async Task<IActionResult> GetMatchById(Guid matchId)
        {
            var match = await _matchService.GetMatchByIdAsync(matchId);
            if(match == null) 
                return NotFound();

            return Ok(match);
        }

        [HttpPost("{matchId}/result")]
        public async Task<IActionResult> MatchResult(Guid matchId, [FromBody] RecordMatchResultDto dto)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            await _matchService.RecordMatchResultAsync(matchId, dto);

            return Ok(new {message = "Match result is updated"});
        }


    }
}
