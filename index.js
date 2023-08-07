const newsletterForm = document.getElementById('newsletterForm');

newsletterForm.addEventListener('submit', (e) => {
  e.preventDefault();

  // Form validation
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');

  if (!nameInput.value.trim()) {
    alert('Please enter your name.');
    nameInput.focus();
    return;
  }

  if (!emailInput.value.trim()) {
    alert('Please enter your email address.');
    emailInput.focus();
    return;
  }

  if (!isValidEmail(emailInput.value)) {
    alert('Please enter a valid email address.');
    emailInput.focus();
    return;
  }

  // Form submission successful
  alert('Thank you for subscribing to our newsletter!');
  newsletterForm.reset();
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}