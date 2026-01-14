document.addEventListener('DOMContentLoaded', () => {

    // FUNCIONALITAT 1: Menú Responsiu
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');

    if(menuToggle) {
        menuToggle.addEventListener('click', () => {
            // Afegeix o treu la classe 'show' al CSS per mostrar el menú
            navList.classList.toggle('show');
        });
    }

    // FUNCIONALITAT 2: Any automàtic al Copyright
    const yearSpan = document.getElementById('year');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // FUNCIONALITAT 3: Validació del Formulari
    const contactForm = document.getElementById('contactForm');
    const feedbackMsg = document.getElementById('form-feedback');

    if(contactForm) {
        contactForm.addEventListener('submit', function(event) {
            // Evitem que el formulari s'enviï realment (per veure l'efecte)
            event.preventDefault();

            // Validació extra (encara que HTML5 ja en fa)
            const phone = document.getElementById('phone').value;
            // Exemple de lògica JS: assegurar que el telèfon són números
            if (phone && isNaN(phone)) {
                alert("El telèfon només pot contenir números.");
                return;
            }

            // Si tot va bé, mostrem el missatge que surt al wireframe
            contactForm.style.display = 'none'; // Ocultem el form
            feedbackMsg.style.display = 'block'; // Mostrem el missatge

            // Aquí normalment faries un fetch() o submit real al servidor
            console.log("Formulari validat i 'enviat'");
        });
    }
});