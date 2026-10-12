
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RevolutionScienceAcademy.Data;
using RevolutionScienceAcademy.Models;

namespace RevolutionScienceAcademy.Controllers
{
    public class RegisterController : Controller
    {
        private readonly AcademyDbContext _context;

        public RegisterController(AcademyDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Index()
        {
            return View(new StudentRegistrationModel());
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Index(StudentRegistrationModel model)
        {
            if (!ModelState.IsValid)
            {
                return View(model);
            }

            _context.StudentRegistrations.Add(model);
            await _context.SaveChangesAsync();

            TempData["RegisterSuccess"] =
                "Registration successful! Thank you for registering.";

            return RedirectToAction(nameof(Index));
        }
    }
}
