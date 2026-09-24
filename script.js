// when on smaller tab, menu icon will show instead of whole header
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
  navLinks.classList.toggle('active');
}

// contact me
const contractForm = document.querySelector('#contact-form');

contractForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.querySelector('#contact-name').value.trim();
  const email = document.querySelector('#contact-email').value.trim();
  const subject = document.querySelector('#contact-subject').value.trim();
  const message = document.querySelector('#contact-message').value.trim();

  const body = `Hi Nhi, \n\n${message}\n\nFrom: ${name}\nEmail: ${email}`;

  window.location.href = `mailto:nluu05@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});