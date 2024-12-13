var submittedApplications = [];
function validateForm(event) {
  event.preventDefault();
    var emailInput = document.getElementById('email');
    var phoneNumberInput = document.getElementById('phoneNumber');
    var firstNameInput = document.getElementById('firstName');
    var lastNameInput = document.getElementById('lastName');
    var streetInput = document.getElementById('street')
    var cityInput = document.getElementById('city')
    var stateInput = document.getElementById('state')
    var zipcodeInput = document.getElementById('zipcode')
    var resumeInput = document.getElementById('resume')
    var schoolNameInput = document.getElementById('schoolName')
    var majorInput = document.getElementById('major')
    var graduationYearInput = document.getElementById('graduationYear')
    var companyNamesInput = document.getElementById('companyNames')
    var employmentDatesInput = document.getElementById('employmentDates')
    var relevantSkillsInput = document.getElementById('relevantSkills')
    var certificationsInput = document.getElementById('certifications')
    var startDateInput = document.getElementById('startDate')
    var workScheduleInput = document.getElementById('workSchedule')
    var referenceNameInput = document.getElementById('referenceName')
    var referenceContactInput = document.getElementById('referenceContact')
    var relationshipInput = document.getElementById('relationship')
    var agreeTermsInput = document.getElementById('agreeTerms')
    var privacyPolicyAckInput = document.getElementById('privacyPolicyAck')
    var displayElement = document.getElementById('street');
    // displayElement.innerHTML = "Name: " + name + "<br>Email: " + email + "<br>Message: " + message;

    // if (
    //     !validateField(firstNameInput) ||
    //     !validateField(lastNameInput) ||
    //     !validateField(phoneNumberInput) ||
    //     !validateField(emailInput) ||
    //     !validateField(streetInput) ||
    //     !validateField(cityInput) ||
    //     !validateField(stateInput) ||
    //     !validateField(zipcodeInput) ||
    //     !validateField(resumeInput) ||
    //     !validateField(schoolNameInput) ||
    //     !validateField(majorInput) ||
    //     !validateField(graduationYearInput) ||
    //     !validateField(companyNamesInput) ||
    //     !validateField(employmentDatesInput) ||
    //     !validateField(relevantSkillsInput) ||
    //     !validateField(certificationsInput) ||
    //     !validateField(startDateInput) ||
    //     !validateField(workScheduleInput) ||
    //     !validateField(referenceNameInput) ||
    //     !validateField(referenceContactInput) ||
    //     !validateField(relationshipInput) ||
    //     !validateField(agreeTermsInput) ||
    //     !validateField(privacyPolicyAckInput)
    //   ) {
    //     alert('Please fill out all required fields.');
    //     return;
    //   }
    // if (!validateEmail(emailInput.value)) {
    //   alert('Please enter a valid email address.');
    //   return;
    // }
    // if (!validatePhoneNumber(phoneNumberInput.value)) {
    //   alert('Please enter a valid phone number.');
    //   return;
    // }
    // document.getElementById('jobApplicationForm').submit();
    setTimeout(function() {
      document.getElementById('jobApplicationForm').reset();
  }, 100);
  }
  function validateEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  function validatePhoneNumber(phoneNumber) {
    var phoneNumberRegex = /^[0-9\s\-]+$/;
    return phoneNumberRegex.test(phoneNumber);
  }

  function validateField(field) {
    return field.value.trim() !== '';
  }