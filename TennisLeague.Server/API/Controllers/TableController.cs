using Microsoft.AspNetCore.Mvc;
using TennisLeague.Server.API.Dto;
using TennisLeague.Server.Application;

namespace TennisLeague.Server.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TableController : ControllerBase
    {
        private readonly ITableService _tableService;
        public TableController(ITableService tableService)
        {
            _tableService = tableService;
        }

        [HttpGet]
        public async Task<ActionResult<ICollection<PlayerStatsDto>>> GetTable()
        {
            var table = await _tableService.GetTable();
            return Ok(table);
        }
    }
}
