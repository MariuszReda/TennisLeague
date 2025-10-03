using Microsoft.AspNetCore.Mvc;

namespace TennisLeague.Server.API.Controllers
{
    public class PlayerController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
