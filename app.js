// =========================================
// MJ ELECTRICIDAD - SCRIPT PRINCIPAL
// =========================================

document.addEventListener('DOMContentLoaded', () => {
  // ---------- NAVBAR SCROLL ----------
  const navbar = document.getElementById('navbar');

  const handleScroll = () => {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // ejecutar al cargar

  // ---------- MENÚ HAMBURGUESA ----------
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
    document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';

    // actualizar aria-expanded
    const expanded = hamburger.classList.contains('active');
    hamburger.setAttribute('aria-expanded', expanded);
  });

  // cerrar menú al hacer clic en un enlace
  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // cerrar al redimensionar a escritorio
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // ---------- NAVEGACIÓN ACTIVA ----------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const activateNavOnScroll = () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  };

  window.addEventListener('scroll', activateNavOnScroll);
  activateNavOnScroll();

  // ---------- FORMULARIO DE CONTACTO ----------
  const contactForm = document.getElementById('contact-form');
  const whatsappNumber = '5491112345678'; // número de WhatsApp de MJ Electricidad

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // capturar datos del formulario
    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value.trim();
    const servicio = document.getElementById('servicio').value;
    const mensaje = document.getElementById('mensaje').value.trim();

    // construir mensaje para WhatsApp
    let textoWhatsApp = `Hola MJ Electricidad, soy ${nombre}.%0A`;
    textoWhatsApp += `Teléfono: ${telefono}%0A`;
    if (email) textoWhatsApp += `Email: ${email}%0A`;
    textoWhatsApp += `Servicio: ${servicio}%0A`;
    if (mensaje) textoWhatsApp += `Mensaje: ${mensaje}%0A`;
    textoWhatsApp += '%0AGracias.';

    // abrir WhatsApp con el mensaje predefinido
    const url = `https://wa.me/${whatsappNumber}?text=${textoWhatsApp}`;
    window.open(url, '_blank');

    // resetear formulario (opcional)
    contactForm.reset();
  });

  // ---------- ANIMACIÓN SUAVE AL SCROLL PARA ENLACES INTERNOS ----------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const offsetTop = targetElement.offsetTop - 70;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // ---------- DATOS ESTRUCTURADOS DINÁMICOS (Local Business) ----------
  const scriptJsonLd = document.createElement('script');
  scriptJsonLd.type = 'application/ld+json';
  scriptJsonLd.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Electrician",
    "name": "MJ Electricidad",
    "description": "Instalaciones eléctricas, domótica, cámaras de seguridad, alarmas e iluminación LED. Servicio profesional en Buenos Aires.",
    "telephone": "+54-11-1234-5678",
    "email": "info@mjelectricidad.com",
    "areaServed": "Buenos Aires, Argentina",
    "url": "https://mjelectricidad.com",
    "priceRange": "$$",
    "openingHours": "Mo-Sa 08:00-18:00"
  });
  document.body.appendChild(scriptJsonLd);
});