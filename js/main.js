/**
 * Homem-Aranha: Um Novo Dia - Landing Page
 * Animações, interatividade e efeitos visuais
 */

(function() {
    'use strict';

    // ===== SCROLL ANIMATIONS =====
    const initScrollAnimations = () => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
    };

    // ===== NAVBAR SCROLL EFFECT =====
    const initNavbar = () => {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;

        window.addEventListener('scroll', () => {
            if (window.scrollY > 60) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    };

    // ===== BACK TO TOP BUTTON =====
    const initBackToTop = () => {
        const btn = document.createElement('button');
        btn.className = 'back-to-top';
        btn.innerHTML = '&#9650;';
        btn.setAttribute('aria-label', 'Voltar ao topo');
        document.body.appendChild(btn);

        window.addEventListener('scroll', () => {
            if (window.scrollY > 600) {
                btn.classList.add('visible');
            } else {
                btn.classList.remove('visible');
            }
        });

        btn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    };

    // ===== LIGHTBOX =====
    const initLightbox = () => {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <button class="lightbox-close">&times;</button>
            <img src="" alt="Imagem ampliada">
            <p class="lightbox-caption"></p>
        `;
        document.body.appendChild(lightbox);

        const lightboxImg = lightbox.querySelector('img');
        const lightboxCaption = lightbox.querySelector('.lightbox-caption');
        const closeBtn = lightbox.querySelector('.lightbox-close');

        document.querySelectorAll('.galeria-item').forEach(item => {
            item.addEventListener('click', () => {
                const img = item.querySelector('img');
                const caption = item.querySelector('.galeria-caption');
                lightboxImg.src = img.src;
                lightboxCaption.textContent = caption ? caption.textContent : '';
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        const closeLightbox = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        };

        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeLightbox();
        });
    };

    // ===== SMOOTH SCROLL =====
    const initSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    };

    // ===== PARTICLES =====
    const initParticles = () => {
        const canvas = document.getElementById('particles-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let particles = [];
        const particleCount = 50;
        let animationId;

        const resize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.4;
                this.speedY = (Math.random() - 0.5) * 0.4;
                this.opacity = Math.random() * 0.4 + 0.1;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                    this.reset();
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(0, 212, 255, ${this.opacity})`;
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        const drawConnections = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 130) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(0, 212, 255, ${0.08 * (1 - distance / 130)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            drawConnections();
            animationId = requestAnimationFrame(animate);
        };

        animate();

        // Pause when tab is hidden
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                cancelAnimationFrame(animationId);
            } else {
                animate();
            }
        });
    };

    // ===== BILHETERIA COUNTER =====
    const initCounterAnimation = () => {
        const bilheteriaValue = document.querySelector('.bilheteria-value');
        if (!bilheteriaValue) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    bilheteriaValue.style.animation = 'pulse 1.5s ease';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        observer.observe(bilheteriaValue);
    };

    // ===== PARALLAX HERO =====
    const initParallax = () => {
        const hero = document.querySelector('.hero');
        if (!hero) return;

        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrolled = window.scrollY;
                    if (scrolled < window.innerHeight) {
                        hero.style.transform = `translateY(${scrolled * 0.25}px)`;
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });
    };

    // ===== TYPING EFFECT =====
    const initTypingEffect = () => {
        const subtitle = document.querySelector('.hero-subtitle');
        if (!subtitle) return;

        const text = subtitle.textContent;
        subtitle.textContent = '';
        let i = 0;

        const type = () => {
            if (i < text.length) {
                subtitle.textContent += text.charAt(i);
                i++;
                setTimeout(type, 70);
            }
        };

        setTimeout(type, 1200);
    };

    // ===== SPIDER WEB SVG ANIMATION =====
    const initSpiderWeb = () => {
        const container = document.querySelector('.hero-spider-web');
        if (!container) return;

        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('width', '100%');
        svg.setAttribute('height', '100%');
        svg.setAttribute('viewBox', '0 0 1920 1080');
        svg.style.opacity = '0.08';

        const createWebLine = (x1, y1, x2, y2) => {
            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            line.setAttribute('x1', x1);
            line.setAttribute('y1', y1);
            line.setAttribute('x2', x2);
            line.setAttribute('y2', y2);
            line.setAttribute('stroke', '#fff');
            line.setAttribute('stroke-width', '0.5');
            return line;
        };

        // Corner webs
        const corners = [
            { cx: 0, cy: 0 },
            { cx: 1920, cy: 0 },
            { cx: 0, cy: 1080 },
            { cx: 1920, cy: 1080 }
        ];

        corners.forEach(corner => {
            for (let i = 0; i < 8; i++) {
                const angle = (i / 8) * Math.PI / 2 + (corner.cx === 0 ? Math.PI : 0) + (corner.cy === 1080 ? Math.PI / 2 : 0);
                const length = 300 + Math.random() * 200;
                const x2 = corner.cx + Math.cos(angle) * length;
                const y2 = corner.cy + Math.sin(angle) * length;
                svg.appendChild(createWebLine(corner.cx, corner.cy, x2, y2));

                // Concentric arcs
                for (let j = 1; j <= 4; j++) {
                    const r = j * 60;
                    const arc = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    const d = `M ${corner.cx + Math.cos(angle) * r} ${corner.cy + Math.sin(angle) * r} 
                               Q ${corner.cx + Math.cos(angle + 0.2) * r * 1.2} ${corner.cy + Math.sin(angle + 0.2) * r * 1.2} 
                               ${corner.cx + Math.cos(angle + Math.PI / 8) * r} ${corner.cy + Math.sin(angle + Math.PI / 8) * r}`;
                    arc.setAttribute('d', d);
                    arc.setAttribute('fill', 'none');
                    arc.setAttribute('stroke', '#fff');
                    arc.setAttribute('stroke-width', '0.3');
                    svg.appendChild(arc);
                }
            }
        });

        container.appendChild(svg);
    };

    // ===== MOBILE MENU =====
    const initMobileMenu = () => {
        const toggle = document.querySelector('.navbar-toggle');
        const links = document.querySelector('.navbar-links');
        const overlay = document.querySelector('.navbar-overlay');
        if (!toggle || !links) return;

        const openMenu = () => {
            toggle.classList.add('active');
            links.classList.add('active');
            if (overlay) overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        };

        const closeMenu = () => {
            toggle.classList.remove('active');
            links.classList.remove('active');
            if (overlay) overlay.classList.remove('active');
            document.body.style.overflow = '';
        };

        toggle.addEventListener('click', () => {
            if (links.classList.contains('active')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        if (overlay) {
            overlay.addEventListener('click', closeMenu);
        }

        links.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && links.classList.contains('active')) {
                closeMenu();
            }
        });
    };

    // ===== INITIALIZE ALL =====
    const init = () => {
        initScrollAnimations();
        initNavbar();
        initMobileMenu();
        initBackToTop();
        initLightbox();
        initSmoothScroll();
        initParticles();
        initCounterAnimation();
        initParallax();
        initTypingEffect();
        initSpiderWeb();

        console.log('%c🕷️ Homem-Aranha: Um Novo Dia', 'font-size: 22px; font-weight: bold; color: #e23636;');
        console.log('%cLanding Page carregada com sucesso!', 'font-size: 13px; color: #00d4ff;');
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();