function setLanguage(languageCode) {
    localStorage.setItem('language', languageCode);

    fetch('lang/' + languageCode + '.json')
        .then(response => response.json())
        .then(data => {
            const currentPage = window.location.pathname;

            document.getElementById('selected-lang').textContent = data.language || 'Null';
            document.getElementById('selected-lang').style.setProperty('--flag-image', 'url(res/flags/' + languageCode + '.png)' || '#000');
            document.getElementById('navbar-committees').textContent = data.navbar_committees || 'Null';
            document.getElementById('navbar-team').textContent = data.navbar_team || 'Null';
            document.getElementById('navbar-applications').textContent = data.navbar_applications || 'Null';
            document.getElementById('navbar-faq').textContent = data.navbar_faq || 'Null';
            document.getElementById('navbar-forms').textContent = data.navbar_forms || 'Null';
            
//            if(currentPage === '/index.html' || currentPage === '/') {
//                document.querySelector('.introduction .text').innerHTML = data.introduction_text || 'Null';
//                document.querySelector('.text-container.history .text').innerHTML = data.history_text || 'Null';
//                document.querySelector('.text-container.modelling .text').innerHTML = data.modelling_text || 'Null';
//                document.querySelector('.text-container.quiz .text').innerHTML = data.quiz_text || 'Null';
//            }
            
        })
        .catch(error => {
            console.error('Error loading language file:', error);
        });
}

window.onload = function() {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
};
