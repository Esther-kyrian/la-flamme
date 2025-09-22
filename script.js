// Navbar scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('shadow');
    } else {
        navbar.classList.remove('shadow');
    }
});

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if(position.top < window.innerHeight - 100) {
            element.classList.add('animated');
        }
    });
}

// Run animation on scroll
window.addEventListener('scroll', animateOnScroll);
// Run once on load
window.addEventListener('load', animateOnScroll);

// Active nav link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// Set active nav link on page load
window.addEventListener('load', setActiveNavLink);

// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const nameInput = contactForm.querySelector('input[type="text"]');
            const emailInput = contactForm.querySelector('input[type="email"]');
            const messageInput = contactForm.querySelector('textarea');
            
            let isValid = true;
            
            if (!nameInput.value.trim()) {
                isValid = false;
                highlightError(nameInput);
            } else {
                removeHighlight(nameInput);
            }
            
            if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
                isValid = false;
                highlightError(emailInput);
            } else {
                removeHighlight(emailInput);
            }
            
            if (!messageInput.value.trim()) {
                isValid = false;
                highlightError(messageInput);
            } else {
                removeHighlight(messageInput);
            }
            
            if (isValid) {
                // Here you would typically send the form data to a server
                alert('Merci pour votre message! Nous vous contacterons bientôt.');
                contactForm.reset();
            }
        });
    }
});

function highlightError(element) {
    element.style.borderColor = 'red';
}

function removeHighlight(element) {
    element.style.borderColor = '';
}

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Initialize tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
});