using Microsoft.AspNetCore.Mvc;
using RevolutionScienceAcademy.Models;
using System.Diagnostics;

namespace RevolutionScienceAcademy.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
