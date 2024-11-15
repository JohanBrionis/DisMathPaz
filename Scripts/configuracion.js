const translations = {
  es: {
      title: "Ajustes",
      darkModeLabel: "Modo Noche"
  },
  en: {
      title: "Settings",
      darkModeLabel: "Dark Mode"
  }
};

// Cambiar idioma basado en selección
document.getElementById('languageSelect').addEventListener('change', function() {
  const selectedLanguage = this.value;
  document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      element.textContent = translations[selectedLanguage][key];
  });
});

document.addEventListener("DOMContentLoaded", function() {
  // Comprobar y aplicar la preferencia de modo noche
  if (localStorage.getItem('darkMode') === 'enabled') {
      document.body.classList.add('dark-mode');
      document.getElementById('darkModeToggle').checked = true;
  }

  // Alternar modo noche y guardar preferencia
  document.getElementById('darkModeToggle').addEventListener('change', function() {
      if (this.checked) {
          document.body.classList.add('dark-mode');
          localStorage.setItem('darkMode', 'enabled');
      } else {
          document.body.classList.remove('dark-mode');
          localStorage.setItem('darkMode', 'disabled');
      }
  });
});
