document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const errorDiv = document.getElementById('error-message');
  
    let error = '';
  
    if (name.length < 2) {
      error = 'Please enter a valid name (at least 2 characters).';
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      error = 'Please enter a valid email address.';

    } else if (message.length < 10) {
      error = 'Message should be at least 10 characters long.';
    }
  
    if (error) {
      errorDiv.textContent = error;
    } else {
      errorDiv.textContent = '';
      alert('Your message has been sent!');
      document.getElementById('contactForm').reset();
    }
  });