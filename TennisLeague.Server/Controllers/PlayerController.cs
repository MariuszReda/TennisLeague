using Microsoft.AspNetCore.Mvc;

namespace TennisLeague.Server.Controllers
{
    public class PlayerController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
