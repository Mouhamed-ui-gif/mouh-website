/*
  App JS for موقع صغير عن البرمجة
  Author: محمد غناي (Mohamed Ghennay)
  GHENNAI Coding Agent
*/
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.reveal');
    const revealCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    };
    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.1
    });
    revealElements.forEach(el => revealObserver.observe(el));

    // Counter animation for stats
    const stats = document.querySelectorAll('.stat .number');
    const animateCounter = (el) => {
        const target = +el.getAttribute('data-target');
        const duration = 2000; // ms
        const stepTime = Math.abs(Math.floor(duration / target));
        let current = 0;
        const timer = setInterval(() => {
            current += 1;
            el.textContent = current;
            if (current >= target) {
                clearInterval(timer);
                el.textContent = target;
            }
        }, stepTime);
    };
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                statsObserver.unobserve(entry.target); // run once
            }
        });
    }, { threshold: 0.5 });
    stats.forEach(stat => statsObserver.observe(stat));
});