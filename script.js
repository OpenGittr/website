// Smooth scrolling for anchor links
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

// Add scroll-based animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and sections for scroll animations
document.querySelectorAll('.card, .point').forEach(el => {
    observer.observe(el);
});

// Add a subtle parallax effect to the hero section
let lastScrollY = window.scrollY;
let ticking = false;

function updateParallax() {
    const heroVisual = document.querySelector('.hero-visual');
    if (heroVisual && window.scrollY < window.innerHeight) {
        heroVisual.style.transform = `translateY(${window.scrollY * 0.3}px)`;
    }
    ticking = false;
}

window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateParallax();
        });
        ticking = true;
    }
});

// Add typing effect to code
const codeElement = document.querySelector('.window-body code');
if (codeElement) {
    const originalHTML = codeElement.innerHTML;
    codeElement.innerHTML = '';

    let charIndex = 0;
    const typingSpeed = 15;

    // Wait a bit before starting the typing animation
    setTimeout(() => {
        function typeCode() {
            if (charIndex < originalHTML.length) {
                // Add character by character
                const char = originalHTML.charAt(charIndex);

                // If we hit a tag, add the whole tag at once
                if (char === '<') {
                    const closingBracket = originalHTML.indexOf('>', charIndex);
                    codeElement.innerHTML += originalHTML.substring(charIndex, closingBracket + 1);
                    charIndex = closingBracket + 1;
                } else {
                    codeElement.innerHTML += char;
                    charIndex++;
                }

                setTimeout(typeCode, typingSpeed);
            }
        }

        typeCode();
    }, 500);
}

// Add cursor blink effect in code window
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    @keyframes blink {
        0%, 49% { opacity: 1; }
        50%, 100% { opacity: 0; }
    }

    .window-body code::after {
        content: '▊';
        color: var(--accent-primary);
        animation: blink 1s infinite;
        margin-left: 2px;
    }
`;
document.head.appendChild(cursorStyle);

// Add glitch effect on logo hover
const logo = document.querySelector('.logo-text');
if (logo) {
    logo.addEventListener('mouseenter', () => {
        logo.style.animation = 'glitch 0.3s ease';
    });

    logo.addEventListener('animationend', () => {
        logo.style.animation = '';
    });
}

// Add glitch animation
const glitchStyle = document.createElement('style');
glitchStyle.textContent = `
    @keyframes glitch {
        0% {
            transform: translate(0);
        }
        20% {
            transform: translate(-2px, 2px);
        }
        40% {
            transform: translate(-2px, -2px);
        }
        60% {
            transform: translate(2px, 2px);
        }
        80% {
            transform: translate(2px, -2px);
        }
        100% {
            transform: translate(0);
        }
    }
`;
document.head.appendChild(glitchStyle);

// Track active section for navigation highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');

function highlightNavigation() {
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.style.color = link.getAttribute('href') === `#${sectionId}`
                    ? 'var(--accent-primary)'
                    : 'var(--text-secondary)';
            });
        }
    });
}

window.addEventListener('scroll', highlightNavigation);

// Add particle effect on button hover (subtle)
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        this.style.transform = 'translateY(-2px) scale(1.02)';
    });

    button.addEventListener('mouseleave', function(e) {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Console easter egg for developers
console.log('%c🚀 OpenGittr', 'font-size: 24px; font-weight: bold; color: #58a6ff;');
console.log('%cBuilding the future of developer productivity', 'font-size: 14px; color: #8b949e;');
console.log('%cInterested in joining us? Reach out at hello@opengittr.com', 'font-size: 12px; color: #3fb950;');
console.log('%c\nFound this? You\'re our kind of developer! 👨‍💻', 'font-size: 12px; font-style: italic; color: #d2a8ff;');
