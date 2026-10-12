
using Microsoft.EntityFrameworkCore;
using RevolutionScienceAcademy.Models;

namespace RevolutionScienceAcademy.Data
{
    public class AcademyDbContext : DbContext
    {
        public AcademyDbContext(DbContextOptions<AcademyDbContext> options): base(options)
        {

        }

        public DbSet<StudentRegistrationModel> StudentRegistrations { get; set; } = null!;

        public DbSet<EnquiryModel> Enquiries { get; set; } = null!;

        public DbSet<ContactMessage> ContactMessages{get;set;} = null!;
    }
}
