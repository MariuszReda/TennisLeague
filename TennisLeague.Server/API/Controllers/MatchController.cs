using Microsoft.AspNetCore.Mvc;

namespace TennisLeague.Server.API.Controllers
{
    public class MatchController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
