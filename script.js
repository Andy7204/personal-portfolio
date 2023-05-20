// Form submission handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    // Perform form validation
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }
  
    // Simulate form submission (replace with your own backend processing)
    alert('Form submitted!'); // You can remove this alert and replace it with your own logic
    document.getElementById('contact-form').reset(); // Reset the form after submission
  });
  