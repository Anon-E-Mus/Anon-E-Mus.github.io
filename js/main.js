/**
 * ============================================
 * RAUDRA COSMOS - Main JavaScript
 * ============================================
 * Features:
 * - Interactive star field canvas with parallax
 * - Mouse tracking and smooth interpolation
 * - Custom cursor effects
 * - Scroll reveal animations
 * - Character slider functionality
 * - Newsletter form handling
 * - Preloader animation
 * ============================================
 */

// ============================================
// 1. PRELOADER
// ============================================

class Preloader {
    constructor() {
        this.preloader = document.getElementById('preloader');
        this.progress = document.querySelector('.preloader-progress');
        this.init();
    }

    init() {
        // Ensure minimum display time for smooth experience
        setTimeout(() => {
            this.preloader.classList.add('loaded');
        }, 2500);

        // Remove from DOM after animation
        setTimeout(() => {
            this.preloader.style.display = 'none';
        }, 3000);
    }
}

// ============================================
// 2. STAR FIELD ANIMATION SYSTEM
// ============================================

class Star {
    constructor(canvas, layer) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.layer = layer; // 0 = far, 1 = mid, 2 = near
        this.reset();
    }

    reset() {
        // Layer-based properties
        const layerConfigs = [
            { minSize: 0.5, maxSize: 1.5, minOpacity: 0.2, maxOpacity: 0.4, speedFactor: 0.2 },
            { minSize: 1, maxSize: 2.5, minOpacity: 0.4, maxOpacity: 0.7, speedFactor: 0.5 },
            { minSize: 2, maxSize: 4, minOpacity: 0.7, maxOpacity: 1, speedFactor: 1 }
        ];

        const config = layerConfigs[this.layer];

        // Position
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        this.z = Math.random() * 2 + 1; // Depth factor

        // Appearance
        this.size = Math.random() * (config.maxSize - config.minSize) + config.minSize;
        this.baseOpacity = Math.random() * (config.maxOpacity - config.minOpacity) + config.minOpacity;
        this.opacity = this.baseOpacity;
        this.twinkleSpeed = Math.random() * 0.02 + 0.005;
        this.twinklePhase = Math.random() * Math.PI * 2;

        // Movement
        this.vx = (Math.random() - 0.5) * 0.1 * config.speedFactor;
        this.vy = (Math.random() - 0.5) * 0.1 * config.speedFactor;
        this.speedFactor = config.speedFactor;

        // Color variation (subtle blue/purple tints)
        const tints = [
            { r: 255, g: 255, b: 255 }, // White
            { r: 200, g: 200, b: 255 }, // Blue tint
            { r: 230, g: 220, b: 255 }, // Purple tint
            { r: 255, g: 240, b: 220 }  // Warm tint
        ];
        this.color = tints[Math.floor(Math.random() * tints.length)];
    }

    update(mouseOffset, deltaTime) {
        // Twinkle effect
        this.twinklePhase += this.twinkleSpeed;
        this.opacity = this.baseOpacity + Math.sin(this.twinklePhase) * 0.2;
        this.opacity = Math.max(0.1, Math.min(1, this.opacity));

        // Parallax movement based on mouse
        const parallaxX = mouseOffset.x * this.speedFactor * 50;
        const parallaxY = mouseOffset.y * this.speedFactor * 50;

        // Natural drift
        this.x += this.vx;
        this.y += this.vy;

        // Wrap around edges
        if (this.x < -10) this.x = this.canvas.width + 10;
        if (this.x > this.canvas.width + 10) this.x = -10;
        if (this.y < -10) this.y = this.canvas.height + 10;
        if (this.y > this.canvas.height + 10) this.y = -10;

        return {
            x: this.x + parallaxX,
            y: this.y + parallaxY
        };
    }

    draw(ctx, position) {
        ctx.beginPath();
        ctx.arc(position.x, position.y, this.size, 0, Math.PI * 2);

        // Create gradient for glow effect
        const gradient = ctx.createRadialGradient(
            position.x, position.y, 0,
            position.x, position.y, this.size * 2
        );
        gradient.addColorStop(0, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity})`);
        gradient.addColorStop(0.5, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);

        ctx.fillStyle = gradient;
        ctx.fill();

        // Add glow to brighter stars
        if (this.baseOpacity > 0.7) {
            ctx.beginPath();
            ctx.arc(position.x, position.y, this.size * 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.opacity * 0.1})`;
            ctx.fill();
        }
    }
}

class ShootingStar {
    constructor(canvas) {
        this.canvas = canvas;
        this.active = false;
        this.reset();
    }

    reset() {
        this.active = false;
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height * 0.5;
        this.length = Math.random() * 80 + 40;
        this.speed = Math.random() * 15 + 10;
        this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.3;
        this.opacity = 1;
    }

    launch() {
        this.active = true;
        this.reset();
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height * 0.3;
    }

    update() {
        if (!this.active) return false;

        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.opacity -= 0.015;

        if (this.opacity <= 0 ||
            this.x > this.canvas.width + 100 ||
            this.y > this.canvas.height + 100) {
            this.active = false;
            return false;
        }
        return true;
    }

    draw(ctx) {
        if (!this.active) return;

        const gradient = ctx.createLinearGradient(
            this.x, this.y,
            this.x - Math.cos(this.angle) * this.length,
            this.y - Math.sin(this.angle) * this.length
        );
        gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`);
        gradient.addColorStop(0.3, `rgba(255, 200, 150, ${this.opacity * 0.8})`);
        gradient.addColorStop(1, 'rgba(255, 100, 50, 0)');

        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(
            this.x - Math.cos(this.angle) * this.length,
            this.y - Math.sin(this.angle) * this.length
        );
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}

class StarField {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;

        this.ctx = this.canvas.getContext('2d');
        this.stars = [];
        this.shootingStars = [];
        this.mouse = { x: 0, y: 0 };
        this.targetMouse = { x: 0, y: 0 };
        this.lastTime = 0;

        // Star counts per layer
        this.layerStarCounts = [200, 100, 50];

        this.init();
    }

    init() {
        this.resize();
        this.createStars();
        this.createShootingStars();
        this.addEventListeners();
        this.animate(0);
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    createStars() {
        this.stars = [];
        for (let layer = 0; layer < 3; layer++) {
            for (let i = 0; i < this.layerStarCounts[layer]; i++) {
                this.stars.push(new Star(this.canvas, layer));
            }
        }
    }

    createShootingStars() {
        this.shootingStars = [
            new ShootingStar(this.canvas),
            new ShootingStar(this.canvas)
        ];
    }

    addEventListeners() {
        window.addEventListener('resize', () => this.resize());

        // Mouse movement
        document.addEventListener('mousemove', (e) => {
            // Calculate mouse offset from center (-1 to 1)
            this.targetMouse.x = (e.clientX / window.innerWidth) * 2 - 1;
            this.targetMouse.y = (e.clientY / window.innerHeight) * 2 - 1;
        });

        // Touch support
        document.addEventListener('touchmove', (e) => {
            const touch = e.touches[0];
            this.targetMouse.x = (touch.clientX / window.innerWidth) * 2 - 1;
            this.targetMouse.y = (touch.clientY / window.innerHeight) * 2 - 1;
        }, { passive: true });

        // Reset mouse on touch end
        document.addEventListener('touchend', () => {
            this.targetMouse = { x: 0, y: 0 };
        });
    }

    animate(currentTime) {
        const deltaTime = currentTime - this.lastTime;
        this.lastTime = currentTime;

        // Clear canvas
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Smooth mouse interpolation
        this.mouse.x += (this.targetMouse.x - this.mouse.x) * 0.05;
        this.mouse.y += (this.targetMouse.y - this.mouse.y) * 0.05;

        // Update and draw stars
        this.stars.forEach(star => {
            const position = star.update(this.mouse, deltaTime);
            star.draw(this.ctx, position);
        });

        // Handle shooting stars
        if (Math.random() < 0.002) { // Chance to launch shooting star
            const inactiveStar = this.shootingStars.find(s => !s.active);
            if (inactiveStar) {
                inactiveStar.launch();
            }
        }

        this.shootingStars.forEach(star => {
            star.update();
            star.draw(this.ctx);
        });

        requestAnimationFrame((time) => this.animate(time));
    }
}

// ============================================
// 3. CUSTOM CURSOR
// ============================================

class CustomCursor {
    constructor() {
        this.cursor = document.getElementById('cursor');
        if (!this.cursor) return;

        this.inner = this.cursor.querySelector('.cursor-inner');
        this.outer = this.cursor.querySelector('.cursor-outer');
        this.pos = { x: 0, y: 0 };
        this.targetPos = { x: 0, y: 0 };
        this.hoverElements = 'a, button, .social-icon, .mobile-social-icon, .character-card, .devlog-card, .slider-nav, .indicator';

        this.init();
    }

    init() {
        // Only enable on non-touch devices
        if (window.matchMedia('(pointer: coarse)').matches) {
            this.cursor.style.display = 'none';
            return;
        }

        this.addEventListeners();
        this.animate();
    }

    addEventListeners() {
        document.addEventListener('mousemove', (e) => {
            this.targetPos.x = e.clientX;
            this.targetPos.y = e.clientY;
        });

        // Hover effects
        document.addEventListener('mouseover', (e) => {
            if (e.target.matches(this.hoverElements) || e.target.closest(this.hoverElements)) {
                document.body.classList.add('hovering');
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (e.target.matches(this.hoverElements) || e.target.closest(this.hoverElements)) {
                document.body.classList.remove('hovering');
            }
        });

        // Hide cursor when leaving window
        document.addEventListener('mouseleave', () => {
            this.cursor.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            this.cursor.style.opacity = '1';
        });
    }

    animate() {
        // Smooth follow
        this.pos.x += (this.targetPos.x - this.pos.x) * 0.15;
        this.pos.y += (this.targetPos.y - this.pos.y) * 0.15;

        this.inner.style.transform = `translate(${this.pos.x}px, ${this.pos.y}px) translate(-50%, -50%)`;
        this.outer.style.transform = `translate(${this.pos.x}px, ${this.pos.y}px) translate(-50%, -50%)`;

        requestAnimationFrame(() => this.animate());
    }
}

// ============================================
// 4. SCROLL REVEAL ANIMATIONS
// ============================================

class ScrollReveal {
    constructor() {
        this.elements = document.querySelectorAll('.reveal, .about-content, .devlog-card, .character-card, .newsletter-content');
        this.threshold = 0.15;
        this.init();
    }

    init() {
        this.createObserver();
        this.checkElements();
    }

    createObserver() {
        const options = {
            threshold: this.threshold,
            rootMargin: '0px 0px -50px 0px'
        };

        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active', 'reveal-active');
                    this.observer.unobserve(entry.target);
                }
            });
        }, options);
    }

    checkElements() {
        this.elements.forEach(el => {
            // Add reveal class if not present
            if (!el.classList.contains('reveal')) {
                el.classList.add('reveal');
            }
            this.observer.observe(el);
        });
    }
}

// ============================================
// 5. CHARACTER SLIDER
// ============================================

class CharacterSlider {
    constructor() {
        this.track = document.getElementById('pantheonTrack');
        this.prevBtn = document.getElementById('sliderPrev');
        this.nextBtn = document.getElementById('sliderNext');
        this.indicators = document.querySelectorAll('.indicator');
        this.cards = document.querySelectorAll('.character-card');

        if (!this.track) return;

        this.currentIndex = 0;
        this.cardWidth = 320 + 30; // card width + gap
        this.init();
    }

    init() {
        this.addEventListeners();
        this.updateIndicators();
    }

    addEventListeners() {
        this.prevBtn?.addEventListener('click', () => this.slide('prev'));
        this.nextBtn?.addEventListener('click', () => this.slide('next'));

        // Indicator clicks
        this.indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => this.goToSlide(index));
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') this.slide('prev');
            if (e.key === 'ArrowRight') this.slide('next');
        });

        // Update card width on resize
        window.addEventListener('resize', () => {
            this.cardWidth = 320 + 30;
        });
    }

    slide(direction) {
        const maxIndex = this.cards.length - 1;

        if (direction === 'next') {
            this.currentIndex = Math.min(this.currentIndex + 1, maxIndex);
        } else {
            this.currentIndex = Math.max(this.currentIndex - 1, 0);
        }

        this.scrollToSlide();
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.scrollToSlide();
    }

    scrollToSlide() {
        const scrollPosition = this.currentIndex * this.cardWidth;
        this.track.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });

        this.updateIndicators();
        this.updateButtons();
    }

    updateIndicators() {
        this.indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === this.currentIndex);
        });
    }

    updateButtons() {
        const maxIndex = this.cards.length - 1;
        this.prevBtn.style.opacity = this.currentIndex === 0 ? '0.5' : '1';
        this.nextBtn.style.opacity = this.currentIndex === maxIndex ? '0.5' : '1';
    }
}

// ============================================
// 6. NEWSLETTER FORM
// ============================================

class NewsletterForm {
    constructor() {
        this.form = document.getElementById('newsletterForm');
        if (!this.form) return;
        this.init();
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    }

    handleSubmit(e) {
        e.preventDefault();

        const input = this.form.querySelector('input[type="email"]');
        const email = input.value;

        if (this.isValidEmail(email)) {
            this.showSuccess();
            input.value = '';
        } else {
            this.showError();
        }
    }

    isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    showSuccess() {
        const btn = this.form.querySelector('.form-submit');
        const originalHTML = btn.innerHTML;

        btn.innerHTML = '<i class="fa-solid fa-check"></i> <span>Subscribed!</span>';
        btn.style.background = 'linear-gradient(135deg, #10B981 0%, #059669 100%)';

        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.background = '';
        }, 3000);
    }

    showError() {
        const input = this.form.querySelector('input[type="email"]');
        input.style.borderColor = '#EF4444';
        input.classList.add('shake');

        setTimeout(() => {
            input.style.borderColor = '';
            input.classList.remove('shake');
        }, 2000);
    }
}

// ============================================
// 7. SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================

class SmoothScroll {
    constructor() {
        this.links = document.querySelectorAll('a[href^="#"]');
        this.init();
    }

    init() {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => this.handleClick(e));
        });
    }

    handleClick(e) {
        const href = e.currentTarget.getAttribute('href');

        if (href === '#') return;

        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const headerOffset = 0;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    }
}

// ============================================
// 8. HERO PARTICLES
// ============================================

class HeroParticles {
    constructor() {
        this.container = document.getElementById('heroParticles');
        if (!this.container) return;
        this.particleCount = 20;
        this.init();
    }

    init() {
        for (let i = 0; i < this.particleCount; i++) {
            this.createParticle();
        }
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'hero-particle';

        const size = Math.random() * 4 + 2;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 10 + 10;

        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(107, 91, 149, ${Math.random() * 0.3 + 0.1});
            border-radius: 50%;
            left: ${left}%;
            bottom: -10px;
            animation: particleRise ${duration}s linear ${delay}s infinite;
        `;

        this.container.appendChild(particle);
    }
}

// Add particle animation keyframes
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes particleRise {
        0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 0.5;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px) scale(0);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// ============================================
// 9. NEBULA ANIMATION ENHANCEMENT
// ============================================

class NebulaEnhancer {
    constructor() {
        this.nebulas = document.querySelectorAll('.nebula');
        this.init();
    }

    init() {
        // Add subtle movement to nebulas based on mouse
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;

            this.nebulas.forEach((nebula, index) => {
                const factor = (index + 1) * 0.5;
                nebula.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
            });
        });
    }
}

// ============================================
// 10. PERFORMANCE OPTIMIZATION
// ============================================

class PerformanceOptimizer {
    constructor() {
        this.init();
    }

    init() {
        // Reduce animations on low-end devices
        if (this.isLowEndDevice()) {
            document.body.classList.add('reduce-animations');
        }

        // Pause animations when tab is not visible
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                document.body.classList.add('animations-paused');
            } else {
                document.body.classList.remove('animations-paused');
            }
        });
    }

    isLowEndDevice() {
        // Check for various indicators of low-end devices
        const memoryLimit = navigator.deviceMemory && navigator.deviceMemory < 4;
        const connectionSlow = navigator.connection && navigator.connection.saveData;
        const coresFew = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;

        return memoryLimit || connectionSlow || coresFew;
    }
}

// ============================================
// 11. SOCIAL LINK HANDLER
// ============================================

class SocialLinkHandler {
    constructor() {
        this.links = document.querySelectorAll('.social-icon, .mobile-social-icon');
        this.init();
    }

    init() {
        this.links.forEach(link => {
            link.addEventListener('click', (e) => {
                // If href is #, prevent default and show coming soon message
                if (link.getAttribute('href') === '#') {
                    e.preventDefault();
                    this.showComingSoon();
                }
            });
        });
    }

    showComingSoon() {
        // Create a subtle toast notification
        const toast = document.createElement('div');
        toast.className = 'social-toast';
        toast.textContent = 'Social links coming soon!';
        toast.style.cssText = `
            position: fixed;
            bottom: 100px;
            left: 50%;
            transform: translateX(-50%);
            padding: 12px 24px;
            background: rgba(107, 91, 149, 0.95);
            border: 1px solid rgba(255, 78, 80, 0.5);
            border-radius: 8px;
            font-family: 'Rajdhani', sans-serif;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 1px;
            z-index: 10000;
            animation: toastFade 2s ease forwards;
        `;

        document.body.appendChild(toast);

        setTimeout(() => {
            toast.remove();
        }, 2000);
    }
}

// Add toast animation
const toastStyle = document.createElement('style');
toastStyle.textContent = `
    @keyframes toastFade {
        0% { opacity: 0; transform: translateX(-50%) translateY(10px); }
        15% { opacity: 1; transform: translateX(-50%) translateY(0); }
        85% { opacity: 1; transform: translateX(-50%) translateY(0); }
        100% { opacity: 0; transform: translateX(-50%) translateY(-10px); }
    }
`;
document.head.appendChild(toastStyle);

// ============================================
// INITIALIZATION
// ============================================

class App {
    constructor() {
        this.domReady = false;
        this.init();
    }

    init() {
        // Wait for DOM
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.onReady());
        } else {
            this.onReady();
        }
    }

    onReady() {
        this.domReady = true;

        // Initialize all modules
        try {
            // Core features
            new Preloader();
            new StarField('starfield');
            new CustomCursor();

            // Interactive features
            new ScrollReveal();
            new CharacterSlider();
            new NewsletterForm();
            new SmoothScroll();
            new HeroParticles();
            new NebulaEnhancer();
            new SocialLinkHandler();
            new PerformanceOptimizer();

            console.log('🌌 Raudra Cosmos initialized successfully');
        } catch (error) {
            console.error('Error initializing app:', error);
        }
    }
}

// Start the app
new App();

// ============================================
// EXPORTS (if using modules)
// ============================================

if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        StarField,
        Star,
        ShootingStar,
        CustomCursor,
        ScrollReveal,
        CharacterSlider,
        NewsletterForm,
        SmoothScroll
    };
}
