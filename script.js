// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the input fields and error messages
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('password-error');
  
    // Function to validate the name field
    function validateName() {
      if (nameInput.value.trim() === '') {
        nameError.style.display = 'block';
      } else {
        nameError.style.display = 'none';
      }
    }
  
    // Function to validate the email field
    function validateEmail() {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(emailInput.value)) {
        emailError.style.display = 'block';
      } else {
        emailError.style.display = 'none';
      }
    }
  
    // Function to validate the password field
    function validatePassword() {
      if (passwordInput.value.length < 8) {
        passwordError.style.display = 'block';
      } else {
        passwordError.style.display = 'none';
      }
    }
  
    // Add event listeners to the input fields
    nameInput.addEventListener('input', validateName);
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('input', validateEmail);
    emailInput.addEventListener('blur', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    passwordInput.addEventListener('blur', validatePassword);
  
    // Add event listener to the form's submit event
    document.getElementById('registration-form').addEventListener('submit', (e) => {
      if (nameError.style.display === 'block' || emailError.style.display === 'block' || passwordError.style.display === 'block') {
        e.preventDefault();
      }
    });
  });