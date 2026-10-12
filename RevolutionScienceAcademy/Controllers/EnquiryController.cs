using Microsoft.AspNetCore.Mvc;
using RevolutionScienceAcademy.Models;

namespace RevolutionScienceAcademy.Controllers
{
    public class EnquiryController : Controller
    {

        [HttpGet]
        public IActionResult Enquiry()
        {
            return View();
        }
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Enquiry(EnquiryModel model)
        {
            if(!ModelState.IsValid)
            {
                TempData["EnquiryError"] =
                   "Please fill all required fields correctly.";

                return RedirectToAction("Index", "Home");
            }

            return View();
        }
    }
}
