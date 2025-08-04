// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
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

// Navbar background change on scroll - Respect lumos-dark theme
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const body = document.body;
    
    // Check if we're using the lumos-dark theme
    if (body.classList.contains('lumos-dark')) {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 35, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(10, 10, 35, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    } else {
        // Default light theme behavior
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// Form submission handling
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            alert('Please fill in all fields');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            return;
        }
        
        // Simulate form submission (replace with actual form handling)
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call
        setTimeout(() => {
            alert('Thank you for your message! I\'ll get back to you soon.');
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.project-card, .stat-item, .skill-tag');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Project card hover effects
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Skill tag hover effects
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
        this.style.boxShadow = '0 4px 12px rgba(37, 99, 235, 0.3)';
    });
    
    tag.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
        this.style.boxShadow = 'none';
    });
});

// Typing effect for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing effect when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        typeWriter(heroTitle, originalText, 50);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const floatingChart = document.querySelector('.floating-chart');
    
    if (hero && floatingChart) {
        const rate = scrolled * -0.5;
        floatingChart.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Copy email to clipboard functionality
document.querySelectorAll('.contact-method').forEach(method => {
    method.addEventListener('click', function() {
        const text = this.querySelector('span').textContent;
        
        if (text.includes('@')) {
            navigator.clipboard.writeText(text).then(() => {
                // Show temporary success message
                const originalText = this.querySelector('span').textContent;
                this.querySelector('span').textContent = 'Copied!';
                
                setTimeout(() => {
                    this.querySelector('span').textContent = originalText;
                }, 2000);
            });
        }
    });
});

// Add cursor pointer to clickable contact methods
document.querySelectorAll('.contact-method').forEach(method => {
    method.style.cursor = 'pointer';
});

// Project launcher function
function launchProject(projectType) {
    const projectPaths = {
        'countries-dashboard': '~/Desktop/DV HW/dvhw6/countries-dashboard/',
        'dvhw5': '~/Desktop/DV HW/dvhw5/',
        'assignment-1': '~/Desktop/DV HW/assignment-1-tanvisun/',
        'dv2': '~/Desktop/DV HW/DV 2/'
    };
    
    const projectNames = {
        'countries-dashboard': 'Countries Dashboard (Vue.js)',
        'dvhw5': 'D3.js Interactive Charts',
        'assignment-1': 'Google Charts Data Viz',
        'dv2': 'R Markdown Data Analysis'
    };
    
    const projectCommands = {
        'countries-dashboard': 'npm run serve',
        'dvhw5': 'npm run serve',
        'assignment-1': 'open index.html',
        'dv2': 'open DV.html'
    };
    
    // Online URLs (update these after deployment)
    const projectUrls = {
        'countries-dashboard': 'https://tanvisun.github.io/DATAVISUALIZATION-1',
        'dvhw5': 'https://tanvisun.github.io/d3-interactive-charts',
        'assignment-1': 'https://tanvisun.github.io/google-charts-viz',
        'dv2': 'https://tanvisun.github.io/r-markdown-analysis'
    };
    
    const projectPath = projectPaths[projectType];
    const projectName = projectNames[projectType];
    const command = projectCommands[projectType];
    const onlineUrl = projectUrls[projectType];
    
    if (!projectPath) {
        alert('Project not found!');
        return;
    }
    
    // Show options to the user
    const choice = confirm(`
🚀 ${projectName}

Choose an option:

OK = View Online (Live Demo)
Cancel = Run Locally (Development)

Online Demo: ${onlineUrl}
Local Setup: ${projectPath}
    `);
    
    if (choice) {
        // Open online version
        window.open(onlineUrl, '_blank');
    } else {
        // Show local setup instructions
        const instructions = `
🔧 Local Setup for ${projectName}

To run this project locally:

1. Open Terminal
2. Navigate to: ${projectPath}
3. Run: ${command}

For Node.js projects (countries-dashboard, dvhw5):
- First run: npm install
- Then run: npm run serve

For static projects (assignment-1, dv2):
- Simply open the HTML file in your browser

Would you like me to open the project folder for you?
        `;
        
        if (confirm(instructions)) {
            // Open the project folder in Finder
            const fullPath = projectPath.replace('~', '/Users/tanvisawant');
            window.open('file://' + fullPath);
        }
    }
}

// Console welcome message
console.log(`
🚀 Data Visualization Portfolio
📊 Built with HTML, CSS, and JavaScript
🎨 Modern, responsive design
📱 Mobile-friendly interface
✨ Interactive animations and effects

Feel free to explore the code and customize it for your projects!
`); 

// Dynamic Background Interactive Effects
document.addEventListener('DOMContentLoaded', () => {
    const floatingElements = document.querySelectorAll('.floating-element');
    const bgLayers = document.querySelectorAll('.bg-layer');
    const hero = document.querySelector('.hero');
    
    // Mouse movement effect for dynamic background
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        
        // Parallax effect for background layers
        bgLayers.forEach((layer, index) => {
            const speed = (index + 1) * 0.02;
            const deltaX = (mouseX - centerX) * speed;
            const deltaY = (mouseY - centerY) * speed;
            
            layer.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
        });
        
        // Interactive floating elements
        floatingElements.forEach((element, index) => {
            const speed = parseFloat(element.dataset.speed) || 0.5;
            const deltaX = (mouseX - centerX) * speed * 0.01;
            const deltaY = (mouseY - centerY) * speed * 0.01;
            
            element.style.transform += ` translate(${deltaX}px, ${deltaY}px)`;
        });
    });
    
    // Scroll parallax effect for dynamic background
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.2;
        
        bgLayers.forEach((layer, index) => {
            const speed = (index + 1) * 0.1;
            const parallaxRate = rate * speed;
            layer.style.transform += ` translateY(${parallaxRate}px)`;
        });
        
        floatingElements.forEach((element, index) => {
            const speed = parseFloat(element.dataset.speed) || 0.5;
            const parallaxRate = rate * speed;
            element.style.transform += ` translateY(${parallaxRate}px)`;
        });
    });
    
    // Add depth effect on hover
    floatingElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform += ' scale(1.2)';
            element.style.opacity = '1';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = element.style.transform.replace(' scale(1.2)', '');
            element.style.opacity = '0.6';
        });
    });
    
    // Add click effect to create ripples
    hero.addEventListener('click', (e) => {
        const ripple = document.createElement('div');
        ripple.className = 'background-ripple';
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';
        
        hero.appendChild(ripple);
        
        setTimeout(() => {
            hero.removeChild(ripple);
        }, 1000);
    });
});

// Add ripple effect styles
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
.background-ripple {
    position: absolute;
    width: 20px;
    height: 20px;
    background: radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    animation: ripple-effect 1s ease-out forwards;
    z-index: 10;
}

@keyframes ripple-effect {
    0% {
        transform: scale(0);
        opacity: 1;
    }
    100% {
        transform: scale(20);
        opacity: 0;
    }
}
`;
document.head.appendChild(rippleStyle);

// Harry Potter Movie Introduction Control
document.addEventListener('DOMContentLoaded', () => {
    const movieIntro = document.querySelector('.movie-intro');
    const heroContainer = document.querySelector('.hero-container');
    
    // Start the movie intro
    if (movieIntro && heroContainer) {
        // Hide main content initially
        heroContainer.style.opacity = '0';
        
        // Show main content after intro completes
        setTimeout(() => {
            heroContainer.style.opacity = '1';
            movieIntro.classList.add('finished');
            setTimeout(() => {
                movieIntro.style.display = 'none';
            }, 1000);
        }, 8000);
    }
    
    // Add skip intro functionality
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && movieIntro && heroContainer) {
            movieIntro.style.display = 'none';
            heroContainer.style.opacity = '1';
        }
    });
    
    // Click to skip intro
    movieIntro?.addEventListener('click', () => {
        if (movieIntro && heroContainer) {
            movieIntro.style.display = 'none';
            heroContainer.style.opacity = '1';
        }
    });
}); 

// Hogwarts Splash Screen Control
document.addEventListener('DOMContentLoaded', () => {
    const hogwartsSplash = document.querySelector('.hogwarts-splash');
    const movieIntro = document.querySelector('.movie-intro');
    const heroContainer = document.querySelector('.hero-container');
    
    // Control splash screen timing
    if (hogwartsSplash) {
        // Hide splash after 4 seconds
        setTimeout(() => {
            hogwartsSplash.style.display = 'none';
            
            // Start movie intro after splash
            if (movieIntro && heroContainer) {
                heroContainer.style.opacity = '0';
                
                setTimeout(() => {
                    heroContainer.style.opacity = '1';
                    movieIntro.classList.add('finished');
                    setTimeout(() => {
                        movieIntro.style.display = 'none';
                    }, 1000);
                }, 8000);
            }
        }, 4000);
    }
    
    // Add skip functionality for splash
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && hogwartsSplash) {
            hogwartsSplash.style.display = 'none';
            if (heroContainer) {
                heroContainer.style.opacity = '1';
            }
        }
    });
    
    // Click to skip splash
    hogwartsSplash?.addEventListener('click', () => {
        hogwartsSplash.style.display = 'none';
        if (heroContainer) {
            heroContainer.style.opacity = '1';
        }
    });
});

// Enhanced magical effects
document.addEventListener('DOMContentLoaded', () => {
    // Add magical sound effects (optional)
    const addMagicalSounds = () => {
        // This would add subtle sound effects for interactions
        // For now, we'll just enhance the visual effects
    };
    
    // Enhanced hover effects for project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
            this.style.boxShadow = '0 15px 35px rgba(255, 215, 0, 0.3)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = '0 4px 15px rgba(255, 215, 0, 0.2)';
        });
    });
    
    // Add magical typing effect to hero title
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        // Start typing after splash and movie intro
        setTimeout(typeWriter, 12000);
    }
}); 

// Video Background Control
document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('.video-background video');
    
    if (video) {
        // Ensure video loads properly
        video.addEventListener('loadeddata', () => {
            console.log('Video loaded successfully');
        });
        
        // Handle video errors
        video.addEventListener('error', () => {
            console.log('Video failed to load, falling back to dynamic background');
            document.querySelector('.dynamic-background').style.display = 'block';
        });
        
        // Pause video when page is not visible (for performance)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                video.pause();
            } else {
                video.play();
            }
        });
        
        // Ensure video plays on mobile
        video.addEventListener('canplay', () => {
            video.play().catch(e => {
                console.log('Auto-play prevented, user interaction required');
            });
        });
    }
}); 

// Harry Potter Theme Music Control
document.addEventListener('DOMContentLoaded', () => {
    const hpTheme = document.getElementById('hp-theme');
    let musicStarted = false;
    
    // Start music on first user interaction
    const startMusic = () => {
        if (!musicStarted && hpTheme) {
            hpTheme.volume = 0.3; // Set volume to 30%
            hpTheme.play().then(() => {
                musicStarted = true;
                console.log('Harry Potter theme music started');
            }).catch(e => {
                console.log('Music autoplay prevented, user interaction required');
            });
        }
    };
    
    // Start music on any user interaction
    document.addEventListener('click', startMusic, { once: true });
    document.addEventListener('keydown', startMusic, { once: true });
    document.addEventListener('scroll', startMusic, { once: true });
    
    // Add music control button
    const musicControl = document.createElement('button');
    musicControl.innerHTML = '<i class="fas fa-music"></i>';
    musicControl.className = 'music-control';
    musicControl.title = 'Toggle Music';
    document.body.appendChild(musicControl);
    
    musicControl.addEventListener('click', () => {
        if (hpTheme.paused) {
            hpTheme.play();
            musicControl.innerHTML = '<i class="fas fa-volume-mute"></i>';
        } else {
            hpTheme.pause();
            musicControl.innerHTML = '<i class="fas fa-music"></i>';
        }
    });
}); 