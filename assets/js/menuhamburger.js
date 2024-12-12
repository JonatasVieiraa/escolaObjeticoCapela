function toggleMenu() {
    const menu = document.getElementById('menu');
    const header = document.querySelector('.main-header');
    
    menu.classList.toggle('menu-open');
    header.classList.toggle('menu-open');
  }