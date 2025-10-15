// Gestion du menu mobile
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function() {
            navMenu.classList.toggle('show');
        });
        
        // Fermer le menu en cliquant sur un lien
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('show');
            });
        });
    }
});