using Microsoft.AspNetCore.Mvc;

namespace RevolutionScienceAcademy.Controllers
{
    public class EventsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
