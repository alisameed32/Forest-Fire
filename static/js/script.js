// Typewriter effect
class Typewriter {
    constructor(element, words, wait = 3000) {
        this.element = element;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
    }

    type() {
        const current = this.wordIndex % this.words.length;
        const fullTxt = this.words[current];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Update text with new vibrant color classes
        if (this.element) {
            const colorClass = `text-color-${(current + 1)}`; // Using new text-color classes
            this.element.innerHTML = `<span class="typing-text ${colorClass}">${this.txt}</span>`;
        }

        let typeSpeed = 100;

        if (this.isDeleting) {
            typeSpeed /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            typeSpeed = this.wait;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.wordIndex++;
            typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
    }
}

// Dark mode functionality
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const htmlElement = document.documentElement;
    
    // Function to update icons
    const updateIcons = (isDark) => {
        if (!darkModeToggle) return;
        const icon = darkModeToggle.querySelector('i');
        if (!icon) return;
        
        if (isDark) {
            if (icon.classList.contains('fa-moon')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            }
        } else {
            if (icon.classList.contains('fa-sun')) {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        }
    };

    // Function to toggle dark mode
    const toggleDarkMode = () => {
        const isDark = htmlElement.getAttribute('data-theme') === 'dark';
        
        if (isDark) {
            htmlElement.removeAttribute('data-theme');
            localStorage.removeItem('darkMode');
        } else {
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('darkMode', 'enabled');
        }
        
        updateIcons(!isDark);
    };

    // Check for saved dark mode preference
    if (darkModeToggle) {
        const darkMode = localStorage.getItem('darkMode');
        if (darkMode === 'enabled') {
            htmlElement.setAttribute('data-theme', 'dark');
            updateIcons(true);
        }

        // Add click listener
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize typewriter with specific words
    const typewriter = document.getElementById('typewriter');
    if (typewriter) {
        new Typewriter(typewriter, [
            'Forest Fire AI Model',
            'Developed by Ali Sameed Arbani',
            'Protecting Our Forests',
            'Using Advanced AI Technology'
        ], 3000);
    }

    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position

    // Initialize carousel with faster speed
    const carousel = document.querySelector('#heroCarousel');
    if (carousel) {
        const bsCarousel = new bootstrap.Carousel(carousel, {
            interval: 3000, // Change slides every 3 seconds
            ride: 'carousel',
            touch: true, // Enable touch swipe
            pause: 'hover' // Pause on hover
        });
    }

    // Add scroll animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hero-content, .about-content, .prediction-card, .contact-card');
    hiddenElements.forEach((el) => observer.observe(el));
});