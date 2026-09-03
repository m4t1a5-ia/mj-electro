// MJ ELECTRICIDAD - SCRIPT PRINCIPAL

document.addEventListener('DOMContentLoaded', () => {
  // NAVBAR SCROLL
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 25) {
      navbar.style.background = 'rgba(5,5,5,0.98)';
      navbar.style.boxShadow = '0 4px 25px rgba(0,0,0,0.7)';
    } else {
      navbar.style.background = 'rgba(5,5,5,0.92)';
      navbar.style.boxShadow = 'none';
    }
  });

  // MENÚ HAMBURGUESA
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('open');
    document.body.style.overflow = navMenu.classList.contains('open') ? 'hidden' : '';
  });

  navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      hamburger.classList.remove('active');
      navMenu.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  // NAVEGACIÓN ACTIVA
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // FORMULARIO DE CONTACTO → WHATSAPP
  const form = document.getElementById('contact-form');
  const NUMERO_WHATSAPP = '5491112345678';

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const email = document.getElementById('email').value.trim();
    const servicio = document.getElementById('servicio').value;
    const mensaje = document.getElementById('mensaje').value.trim();

    let texto = `Hola MJ Electricidad, soy ${nombre}.%0A`;
    texto += `Teléfono: ${telefono}%0A`;
    if (email) texto += `Email: ${email}%0A`;
    texto += `Servicio: ${servicio}%0A`;
    if (mensaje) texto += `Mensaje: ${mensaje}%0A`;
    texto += '%0AGracias.';

    window.open(`https://wa.me/${NUMERO_WHATSAPP}?text=${texto}`, '_blank');
    form.reset();
  });

  // SMOOTH SCROLL PARA ENLACES INTERNOS
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        window.scrollTo({
          top: target.offsetTop - 65,
          behavior: 'smooth'
        });
      }
    });
  });
});