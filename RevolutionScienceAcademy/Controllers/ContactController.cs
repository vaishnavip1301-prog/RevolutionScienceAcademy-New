using Microsoft.AspNetCore.Mvc;

namespace RevolutionScienceAcademy.Controllers
{
    public class ContactController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
