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

            document.querySelectorAll('#selected-lang').forEach(el => {
                el.textContent = data.language || 'Null';
                el.style.setProperty('--flag-image', `url(res/flags/${languageCode}.png)`);
            });

            document.querySelectorAll('#navbar-committees').forEach(el => el.textContent = data.navbar_committees || 'Null');
            document.querySelectorAll('#navbar-team').forEach(el => el.textContent = data.navbar_team || 'Null');
            document.querySelectorAll('#navbar-applications').forEach(el => el.textContent = data.navbar_applications || 'Null');
            document.querySelectorAll('#navbar-faq').forEach(el => el.textContent = data.navbar_faq || 'Null');
            document.querySelectorAll('#navbar-forms').forEach(el => el.textContent = data.navbar_forms || 'Null');
            document.querySelectorAll('#navbar-guides').forEach(el => el.textContent = data.navbar_guides || 'Null');

            if (currentPage === '/index.html' || currentPage === '/') {
                document.getElementById('date').textContent = data.date || 'Null';
                document.querySelectorAll('#contact-text').forEach(el => el.textContent = data.contact_text || 'Null');
            }
            
            
            if (currentPage === '/applications.html') {
                document.getElementById('app').innerHTML = data.app || 'Null';
            }

            if (currentPage === '/forms.html') {
                document.getElementById('form-1').innerHTML = data.form_1 || 'Null';
                document.getElementById('form-2').innerHTML = data.form_2 || 'Null';
                document.getElementById('form-3').innerHTML = data.form_3 || 'Null';
                document.getElementById('form-4').innerHTML = data.form_4 || 'Null';
            }

            if (currentPage === '/guides.html') {
                document.getElementById('enter-password').innerHTML = data.enter_password || 'Null';
                document.getElementById('submit').innerHTML = data.submit || 'Null';
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