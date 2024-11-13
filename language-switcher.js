function setLanguage(language) {
    if (language === 'en') {
        document.body.classList.add('en');
    } else {
        document.body.classList.remove('en');
    }
    localStorage.setItem('language', language); // Guardar la selección del usuario
}

// Aplicar la selección de idioma guardada al cargar la página
document.addEventListener("DOMContentLoaded", function() {
    const savedLanguage = localStorage.getItem('language') || 'es';
    setLanguage(savedLanguage);
});
