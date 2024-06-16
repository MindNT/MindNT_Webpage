document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('languageToggle');
    const isEnglish = localStorage.getItem('isEnglish') === 'true';

    if (isEnglish) {
        languageToggle.checked = true;
    } else {
        languageToggle.checked = false;
    }

    // Add event listener for toggle switch
    languageToggle.addEventListener('change', function() {
        if (this.checked) {
            localStorage.setItem('isEnglish', 'true');
            window.location.href = 'indexEN.html'; // Asegúrate de que esta URL sea correcta
        } else {
            localStorage.setItem('isEnglish', 'false');
            window.location.href = 'index.html'; // Asegúrate de que esta URL sea correcta
        }
    });
});
