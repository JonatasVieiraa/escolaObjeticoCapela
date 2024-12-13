document.addEventListener('DOMContentLoaded', function() {
  var dropdownBtn = document.querySelector(".dropdown-btn");
  var dropdownContent = document.querySelector(".dropdown-content");
  
  // Garante que o dropdown inicie fechado em dispositivos responsivos
  function handleResponsiveDropdown() {
    if (window.innerWidth <= 830) {
      dropdownContent.style.display = "none";
      
      dropdownBtn.addEventListener("click", toggleDropdown);
    } else {
      dropdownContent.style.display = "";
      dropdownBtn.removeEventListener("click", toggleDropdown);
    }
  }

  function toggleDropdown() {
    if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
      dropdownContent.style.display = "grid";
    } else {
      dropdownContent.style.display = "none";
    }
  }

  // Chama inicialmente
  handleResponsiveDropdown();

  // Adiciona listener de resize
  window.addEventListener('resize', handleResponsiveDropdown);
});