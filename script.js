const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', e => {
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
      });
    });

    // Mobile Drawer Toggle
    const hamburger = document.getElementById('hamburger');
    const drawer = document.getElementById('drawer');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      drawer.classList.toggle('active');
    });

    // Close drawer when a link is clicked
    document.querySelectorAll('.drawer-links a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        drawer.classList.remove('active');
      });
    });