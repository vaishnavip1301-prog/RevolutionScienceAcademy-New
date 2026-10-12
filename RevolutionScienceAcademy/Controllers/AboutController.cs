using Microsoft.AspNetCore.Mvc;

namespace RevolutionScienceAcademy.Controllers
{
    public class AboutController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
