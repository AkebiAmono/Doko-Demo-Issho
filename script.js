document.addEventListener('DOMContentLoaded', (event) => {
  // Toggle class active
  const navbarNav = document.querySelector('.navbar-nav');
  
  // Deklarasikan menu
  const menu = document.querySelector('#menu');

  // Tambahkan event listener ke menu
  menu.addEventListener('click', () => {
    navbarNav.classList.toggle('active');
  });

  // Ketika (hamburger menu) menu di klik
  menu.onclick = () => {
    navbarNav.classList.toggle('active');
  };

  // Klik di luar sidebar untuk menghilangkan nav
  document.addEventListener('click', function(e) {
    if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove('active');
    }
  });
});