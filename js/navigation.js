// Navigation améliorée
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    const logoLink = document.querySelector('.logo-link');
    
    // Menu mobile
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function() {
            navMenu.classList.toggle('show');
            // Changer l'icône
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('show')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Fermer le menu en cliquant sur un lien
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('show');
                // Remettre l'icône hamburger
                const icon = mobileMenu.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
        
        // Fermer le menu en cliquant en dehors
        document.addEventListener('click', function(event) {
            if (!event.target.closest('nav') && navMenu.classList.contains('show')) {
                navMenu.classList.remove('show');
                const icon = mobileMenu.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // Logo cliquable - déjà fonctionnel avec le href
    if (logoLink) {
        logoLink.addEventListener('click', function() {
            // Animation supplémentaire si souhaitée
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    }
    
    // Indicateur de page active
    function setActivePage() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('nav ul li a');
        
        navLinks.forEach(link => {
            const linkPage = link.getAttribute('href').split('/').pop();
            if (linkPage === currentPage || 
                (currentPage === '' && linkPage === 'index.html') ||
                (currentPage.includes(linkPage.replace('.html', '')))) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    setActivePage();
    
    // Navigation fluide pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Fermer le menu mobile si ouvert
                if (navMenu && navMenu.classList.contains('show')) {
                    navMenu.classList.remove('show');
                    const icon = mobileMenu.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        });
    });
});