// Fonctionnalités pour la page Contact
document.addEventListener('DOMContentLoaded', function() {
    // Compteur de caractères
    const messageTextarea = document.getElementById('message');
    const charCounter = document.getElementById('char-counter');
    
    if (messageTextarea && charCounter) {
        messageTextarea.addEventListener('input', function() {
            charCounter.textContent = this.value.length;
            
            if (this.value.length > 450) {
                charCounter.style.color = '#ff6b6b';
            } else if (this.value.length > 400) {
                charCounter.style.color = '#e6a400';
            } else {
                charCounter.style.color = 'inherit';
            }
        });
    }
    
    // FAQ accordéon
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', function() {
            // Fermer tous les autres items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                }
            });
            
            // Basculer l'item actuel
            item.classList.toggle('active');
        });
    });
    
    // Validation du formulaire
    const contactForm = document.querySelector('.contact-form-main');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulation d'envoi
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                alert('Merci ! Votre message a été envoyé. Nous vous répondrons dans les plus brefs délais.');
                contactForm.reset();
                charCounter.textContent = '0';
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
});