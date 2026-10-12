using System;
using System.ComponentModel.DataAnnotations;

namespace RevolutionScienceAcademy.Models
{
    public class StudentRegistrationModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Please enter student full name")]
        [StringLength(100)]
        [Display(Name = "Student Full Name")]
        public string StudentName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Please enter parent name")]
        [StringLength(100)]
        [Display(Name = "Parent Name")]
        public string ParentName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Please enter mobile number")]
        [RegularExpression(@"^[6-9]\d{9}$",
            ErrorMessage = "Enter a valid 10-digit mobile number")]
        [Display(Name = "Mobile Number")]
        public string MobileNumber { get; set; } = string.Empty;

        [Required(ErrorMessage = "Please enter email")]
        [EmailAddress(ErrorMessage = "Enter a valid email")]
        [Display(Name = "Email Address")]
        public string Email { get; set; } = string.Empty;

        [Required(ErrorMessage = "Please select class")]
        [Display(Name = "Select Class")]
        public string ClassName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Please select course")]
        [Display(Name = "Select Course")]
        public string Course { get; set; } = string.Empty;

        [Required(ErrorMessage = "Please enter school name")]
        [Display(Name = "School / College Name")]
        public string SchoolName { get; set; } = string.Empty;

        [Required(ErrorMessage = "Please enter address")]
        [Display(Name = "Full Address")]
        public string Address { get; set; } = string.Empty;

        public DateTime RegistrationDate { get; set; } = DateTime.Now;
    }
}
