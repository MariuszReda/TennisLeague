using Microsoft.AspNetCore.Mvc;

namespace TennisLeague.Server.API.Controllers
{
    public class AccountController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
