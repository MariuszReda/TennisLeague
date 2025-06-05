using Microsoft.AspNetCore.Mvc;

namespace TennisLeague.Server.Controllers
{
    public class AccountController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
