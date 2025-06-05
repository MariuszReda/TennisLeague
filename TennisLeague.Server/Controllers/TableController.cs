using Microsoft.AspNetCore.Mvc;
using TennisLeague.Server.Dto;
using TennisLeague.Server.Interface;
using TennisLeague.Server.Services;

namespace TennisLeague.Server.Controllers
{
    [ApiController]
    [Route(ApiRoutes.Table.BaseRoute)]
    public class TableController : Controller
    {
        private readonly ITableService _tableService;
        public TableController(ITableService tableService)
        {
            _tableService = tableService;
        }

        [HttpGet(ApiRoutes.Table.GetTable)]
        public async Task<ActionResult<ICollection<PlayerStatsDto>>> GetTable()
        {
            var table = await _tableService.GetTable();
            return Ok(table);
        }
    }
}
