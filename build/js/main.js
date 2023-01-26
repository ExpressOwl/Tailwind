document.getElementById('year').innerHTML = new Date().getFullYear();

const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById('mobile-menu');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
    hamburgerBtn.classList.toggle('toggle-btn');
  }

  hamburgerBtn.addEventListener('click', toggleMenu);
  mobileMenu.addEventListener('click', toggleMenu);
};

document.addEventListener('DOMContentLoaded', initApp);

// flowbite toast
const submit = document.getElementById('submit');

submit.addEventListener('click', toasty);

function toasty(e) {
  e.preventDefault();

  let subject = document.getElementById('subject').value;
  let message = document.getElementById('message').value;
  let toast = document.getElementById('toast-success');

  if (subject.length >= 3 && message.length >= 6) {
    toast.classList.toggle('invisible');
  }
}