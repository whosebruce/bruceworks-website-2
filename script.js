// Initialize Lucide Icons
lucide.createIcons();

// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Sticky Header & Scroll Effect
const header = document.getElementById('main-header');
const navLinks = document.querySelectorAll('.nav-link');
const headerText = document.querySelectorAll('.header-text');
const btnHeader = document.querySelector('.btn-header');

window.addEventListener('scroll', () => {
    if (!header) return;
    
    if (window.scrollY > 10) {
        header.classList.add('bg-white', 'shadow-md', 'py-3');
        header.classList.remove('lg:bg-transparent', 'py-5');
        
        // Change text colors for light background
        navLinks.forEach(link => {
            link.classList.remove('text-white');
            link.classList.add('text-gray-700');
        });
        
        headerText.forEach(text => {
            text.classList.remove('lg:text-white');
            text.classList.add('text-gray-900');
        });

        if(btnHeader) {
            btnHeader.classList.remove('text-secondary', 'bg-white');
            btnHeader.classList.add('text-white', 'bg-primary');
        }

    } else {
        header.classList.remove('bg-white', 'shadow-md', 'py-3');
        header.classList.add('lg:bg-transparent', 'py-5');
        
        // Revert text colors
        navLinks.forEach(link => {
            link.classList.add('text-white');
            link.classList.remove('text-gray-700');
        });

        headerText.forEach(text => {
            text.classList.add('lg:text-white');
            text.classList.remove('text-gray-900');
        });
        
        if(btnHeader) {
            btnHeader.classList.add('text-secondary', 'bg-white');
            btnHeader.classList.remove('text-white', 'bg-primary');
        }
    }
});

// FAQ Accordion
const faqBtns = document.querySelectorAll('.faq-btn');

faqBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        const icon = btn.querySelector('.faq-icon');
        
        // Toggle current
        content.classList.toggle('hidden');
        
        // Rotate icon (simple switch for now, could be css transform)
        if (content.classList.contains('hidden')) {
            icon.setAttribute('data-lucide', 'chevron-down');
        } else {
            icon.setAttribute('data-lucide', 'chevron-up');
        }
        lucide.createIcons();
    });
});

// Scroll to Contact
function scrollToContact() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth' });
    } else {
        window.location.href = 'index.html#contact-form';
    }
}