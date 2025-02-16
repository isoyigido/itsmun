if (window.innerWidth <= 1000) {
    document.addEventListener("DOMContentLoaded", function () {
        const menuIcon = document.querySelector("nav-phone .menu-icon");
        const navbar = document.querySelector("nav-phone .navbar");
    
        menuIcon.addEventListener("click", function (event) {
            event.stopPropagation(); // Prevents immediate closing when clicking the icon
            navbar.classList.toggle("active");
        });
    
        document.addEventListener("click", function (event) {
            if (!navbar.contains(event.target) && !menuIcon.contains(event.target)) {
                navbar.classList.remove("active"); // Close menu if clicked outside
            }
        });
    });
}

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
            
            if(currentPage === '/index.html' || currentPage === '/') {
                document.getElementById('contact-text').textContent = data.contact_text || 'Null';
            }
            
        })
        .catch(error => {
            console.error('Error loading language file:', error);
        });
}

window.onload = function() {
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);
};