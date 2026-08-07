document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');

    // 1. Navbar Scroll Effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 10px 30px -10px rgba(0, 0, 0, 0.5)';
            navbar.style.borderColor = 'rgba(255, 255, 255, 0.12)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.borderColor = 'var(--border-color)';
        }

        // 2. Active Section Highlight
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    // 3. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');
    
    // Element Hamburger Toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navLinks');

    /* ==========================================================================
       1. MOBILE MENU TOGGLE
       ========================================================================== */
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('nav-active');
            
            // Ubah icon dari garis tiga ke tanda silang (X)
            const icon = navToggle.querySelector('i');
            if (navMenu.classList.contains('nav-active')) {
                icon.className = 'ti ti-x';
            } else {
                icon.className = 'ti ti-menu-2';
            }
        });

        // Tutup menu otomatis ketika salah satu link menu diklik
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('nav-active');
                const icon = navToggle.querySelector('i');
                if (icon) icon.className = 'ti ti-menu-2';
            });
        });
    }

    /* ==========================================================================
       2. NAVBAR SCROLL EFFECT
       ========================================================================== */
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 10px 30px -10px rgba(0, 0, 0, 0.5)';
            navbar.style.borderColor = 'rgba(255, 255, 255, 0.12)';
        } else {
            navbar.style.boxShadow = 'none';
            navbar.style.borderColor = 'var(--border-color)';
        }

        /* ==========================================================================
           3. ACTIVE SECTION HIGHLIGHT
           ========================================================================== */
        let currentSectionId = '';
        const scrollPosition = window.scrollY + 150;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    /* ==========================================================================
       4. SMOOTH SCROLL
       ========================================================================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});