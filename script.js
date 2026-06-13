// Custom Cursor
const cursor = document.querySelector('.cursor');
if (cursor) {
    const updateCursor = (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };
    
    document.addEventListener('mousemove', updateCursor);

    // Hover effect for interactive elements
    const links = document.querySelectorAll('a, button, .project-card, .service-card, .faq-item');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
        link.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
    });
}

// Scroll Reveal Observer
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('active');
            // Optional: stop observing once revealed
            // revealObserver.unobserve(entry.target); 
        }
    });
}, {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
});

revealElements.forEach(el => revealObserver.observe(el));

// Simple Parallax Effect on Images
const parallaxElements = document.querySelectorAll('.parallax');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    parallaxElements.forEach(el => {
        const speed = el.dataset.speed || 0.1;
        // Limit parallax to avoid jumping too much on small screens
        if (window.innerWidth > 768) {
            el.style.transform = `translateY(${scrolled * speed}px) scale(1.1)`;
        } else {
            el.style.transform = `scale(1.05)`;
        }
    });
});

// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
        // Close other items
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        // Toggle current item
        item.classList.toggle('active');
    });
});