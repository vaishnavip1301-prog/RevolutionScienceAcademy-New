using System.ComponentModel.DataAnnotations;

namespace RevolutionScienceAcademy.Models
{
    public class EnquiryModel
    {

        public int Id { get; set; }

        [Required]
        [Display(Name = "Student Name")]
        public string StudentName { get; set; } = string.Empty;

        [Required]
        [Display(Name = "Parent Name")]
        public string ParentName { get; set; } = string.Empty;

        [Required]
        [Phone]
        [Display(Name = "Phone Number")]
        public string Phone { get; set; } = string.Empty;

        [EmailAddress]
        [Display(Name = "Email Address")]
        public string? Email { get; set; }

        [Required]
        [Display(Name = "Course")]
        public string Course { get; set; } = string.Empty;

        [Display(Name = "Message")]
        public string? Message { get; set; }
    }
}
