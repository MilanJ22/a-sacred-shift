// =========================================
//  A SACRED SHIFT — main.js
// =========================================

// Nav: apply scrolled style after 50px
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

// Close mobile nav when a link is clicked
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// Smooth scroll with nav offset for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const offset = nav.offsetHeight;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// Mailchimp form: show fallback message if action URL not yet configured
const form = document.getElementById('mc-embedded-subscribe-form');
const formMessage = document.getElementById('form-message');

if (form && formMessage) {
    form.addEventListener('submit', function (e) {
        if (form.getAttribute('action') === 'YOUR_MAILCHIMP_FORM_ACTION_URL') {
            e.preventDefault();
            formMessage.textContent = 'Newsletter signup coming soon. In the meantime, reach us at planningasacredshift@gmail.com.';
        }

    });
}
