using Microsoft.AspNetCore.Mvc;

namespace TennisLeague.Server.Controllers
{
    public class MatchController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
