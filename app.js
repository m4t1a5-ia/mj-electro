'use strict';

/*
 * DATOS DEL NEGOCIO
 * Cambiá estos valores una sola vez: todos los enlaces y textos de contacto
 * de la página se actualizan automáticamente.
 */
const BUSINESS = Object.freeze({
  whatsapp: '541135002390',
  phoneDisplay: '+54 11 3500-2390',
  instagram: 'https://www.instagram.com/matiasjavier_electricidad/',
  serviceArea: 'Buenos Aires · Zona oeste y alrededores'
});

const CATALOG_PRODUCTS = Object.freeze(
  [
    {
      "code": "HF02",
      "name": "Colgante entrelasado borde blanco",
      "category": "Colgantes",
      "image": "catalogo/hf02.png"
    },
    {
      "code": "HF18",
      "name": "Colgante infinito cristal",
      "category": "Colgantes",
      "image": "catalogo/hf18.png"
    },
    {
      "code": "HF28",
      "name": "Colgante 3 círculos dorados",
      "category": "Colgantes",
      "image": "catalogo/hf28.jpeg"
    },
    {
      "code": "HY109",
      "name": "Plafón 2 cuadrados 2 bordes negros",
      "category": "Plafones",
      "image": "catalogo/hy109.png"
    },
    {
      "code": "HY111",
      "name": "Plafón cuadrado 2 bordes negros y esfera",
      "category": "Plafones",
      "image": "catalogo/hy111.png"
    },
    {
      "code": "HY108",
      "name": "Plafón imagen dividida",
      "category": "Plafones",
      "image": "catalogo/hy108.png"
    },
    {
      "code": "HY112",
      "name": "Plafón cuadrado borde girado",
      "category": "Plafones",
      "image": "catalogo/hy112.png"
    },
    {
      "code": "HY113",
      "name": "Plafón circular borde movido",
      "category": "Plafones",
      "image": "catalogo/hy113.png"
    },
    {
      "code": "HY114",
      "name": "Plafón doble círculo",
      "category": "Plafones",
      "image": "catalogo/hy114.jpeg"
    },
    {
      "code": "HY115",
      "name": "Plafón circular 2 bordes con punto",
      "category": "Plafones",
      "image": "catalogo/hy115.png"
    },
    {
      "code": "HY118",
      "name": "Plafón circular con borde de punto blanco y negro",
      "category": "Plafones",
      "image": "catalogo/hy118.png"
    },
    {
      "code": "HY120",
      "name": "Plafón cuadrados 2 bordes separados blancos",
      "category": "Plafones",
      "image": "catalogo/hy120.png"
    },
    {
      "code": "HY116",
      "name": "Plafón 2 estrellas con borde circular",
      "category": "Plafones",
      "image": "catalogo/hy116.png"
    },
    {
      "code": "HY117",
      "name": "Plafón circular con 2 óvalos con punto",
      "category": "Plafones",
      "image": "catalogo/hy117.png"
    },
    {
      "code": "HY127",
      "name": "Plafón cuadrado borde brillante",
      "category": "Plafones",
      "image": "catalogo/hy127.png"
    },
    {
      "code": "HY49",
      "name": "Plafón luna estrella borde rosa",
      "category": "Plafones",
      "image": "catalogo/hy49.png"
    },
    {
      "code": "HY50",
      "name": "Plafón luna estrella borde azul",
      "category": "Plafones",
      "image": "catalogo/hy50.png"
    },
    {
      "code": "HY93",
      "name": "Plafón gatito azul",
      "category": "Plafones",
      "image": "catalogo/hy93.png"
    },
    {
      "code": "HY94",
      "name": "Plafón gatito rosa",
      "category": "Plafones",
      "image": "catalogo/hy94.png"
    },
    {
      "code": "JH10",
      "name": "Lámpara colgante borde circular chico (dorado)",
      "category": "Colgantes",
      "image": "catalogo/jh10.png"
    },
    {
      "code": "JH3",
      "name": "Lámpara colgante cono con ojo de pez (dorado)",
      "category": "Colgantes",
      "image": "catalogo/jh3.png"
    },
    {
      "code": "JH31",
      "name": "Lámpara colgante con cono traslucido negro",
      "category": "Colgantes",
      "image": "catalogo/jh31.png"
    },
    {
      "code": "JH32",
      "name": "Lámpara colgante con cono transparente",
      "category": "Colgantes",
      "image": "catalogo/jh32.png"
    },
    {
      "code": "JH32410",
      "name": "Lámpara colgante aro negro",
      "category": "Colgantes",
      "image": "catalogo/jh32410.png"
    },
    {
      "code": "JH32510",
      "name": "Lámpara colgante aro dorado",
      "category": "Colgantes",
      "image": "catalogo/jh32510.png"
    },
    {
      "code": "JH3282",
      "name": "Lámpara colgante esfera brillante y círculo",
      "category": "Colgantes",
      "image": "catalogo/jh3282.png"
    },
    {
      "code": "JH3351 (JH50)",
      "name": "Lámpara colgante cilindro con tira dorada",
      "category": "Colgantes",
      "image": "catalogo/jh3351-jh50.png"
    },
    {
      "code": "JH8",
      "name": "Lámpara colgante ojo (plateado)",
      "category": "Colgantes",
      "image": "catalogo/jh8.png"
    },
    {
      "code": "JH9",
      "name": "Lámpara colgante borde circular grande",
      "category": "Colgantes",
      "image": "catalogo/jh9.png"
    },
    {
      "code": "JM30",
      "name": "Plafón circular luna estrella borde negro",
      "category": "Plafones",
      "image": "catalogo/jm30.png"
    },
    {
      "code": "JM31",
      "name": "Plafón circular semi eclipse borde negro",
      "category": "Plafones",
      "image": "catalogo/jm31.png"
    },
    {
      "code": "JM32",
      "name": "Plafón circular 2 corazones borde negro",
      "category": "Plafones",
      "image": "catalogo/jm32.png"
    },
    {
      "code": "JM33",
      "name": "Plafón circular raton borde negro",
      "category": "Plafones",
      "image": "catalogo/jm33.png"
    },
    {
      "code": "XY18083",
      "name": "Colgante 3 aros negro",
      "category": "Colgantes",
      "image": "catalogo/xy18083.png"
    },
    {
      "code": "XY92763",
      "name": "Colgante 3 aros blanco",
      "category": "Colgantes",
      "image": "catalogo/xy92763.png"
    },
    {
      "code": "XYH353",
      "name": "Colgante 3 círculos 1 copa negro",
      "category": "Colgantes",
      "image": "catalogo/xyh353.png"
    },
    {
      "code": "XYH363",
      "name": "Colgante 3 cuadrados 1 copa negro",
      "category": "Colgantes",
      "image": "catalogo/xyh363.png"
    },
    {
      "code": "XYH37",
      "name": "Colgante 2 círculos 2 copas",
      "category": "Colgantes",
      "image": "catalogo/xyh37.png"
    },
    {
      "code": "ZPHBD22",
      "name": "Aplique doble círculo blanco",
      "category": "Apliques",
      "image": "catalogo/zphbd22.png"
    },
    {
      "code": "ZPHBD23",
      "name": "Aplique doble círculo negro",
      "category": "Apliques",
      "image": "catalogo/zphbd23.png"
    },
    {
      "code": "ZPHBD24",
      "name": "Aplique con varillas negro",
      "category": "Apliques",
      "image": "catalogo/zphbd24.png"
    },
    {
      "code": "ZPHBD25",
      "name": "Aplique con varillas negro dorado",
      "category": "Apliques",
      "image": "catalogo/zphbd25.png"
    },
    {
      "code": "ZPHBD26",
      "name": "Aplique con varillas dorado",
      "category": "Apliques",
      "image": "catalogo/zphbd26.png"
    },
    {
      "code": "ZPHBD27",
      "name": "Aplique bidireccional cubo negro",
      "category": "Apliques",
      "image": "catalogo/zphbd27.png"
    },
    {
      "code": "ZPHBD28",
      "name": "Aplique bidireccional cubo blanco",
      "category": "Apliques",
      "image": "catalogo/zphbd28.png"
    },
    {
      "code": "ZPHBD32",
      "name": "Aplique bidireccional triangular negro",
      "category": "Apliques",
      "image": "catalogo/zphbd32.png"
    },
    {
      "code": "ZPHBD33",
      "name": "Aplique bidireccional triangular blanco",
      "category": "Apliques",
      "image": "catalogo/zphbd33.png"
    },
    {
      "code": "ZPHBD56",
      "name": "Aplique bidireccional triangular dorado",
      "category": "Apliques",
      "image": "catalogo/zphbd56.png"
    },
    {
      "code": "ZPHBD34",
      "name": "Aplique bidireccional 6 luces negro",
      "category": "Apliques",
      "image": "catalogo/zphbd34.png"
    },
    {
      "code": "ZPHBD35",
      "name": "Aplique bidireccional 6 luces blanco",
      "category": "Apliques",
      "image": "catalogo/zphbd35.png"
    },
    {
      "code": "ZPHBD36",
      "name": "Aplique con esfera circular negro",
      "category": "Apliques",
      "image": "catalogo/zphbd36.png"
    },
    {
      "code": "ZPHBD37",
      "name": "Aplique con esfera circular dorado",
      "category": "Apliques",
      "image": "catalogo/zphbd37.png"
    },
    {
      "code": "ZPHBD46",
      "name": "Aplique lámina rectangular dorado",
      "category": "Apliques",
      "image": "catalogo/zphbd46.png"
    },
    {
      "code": "ZPHBD47",
      "name": "Aplique lámina rectangular negra",
      "category": "Apliques",
      "image": "catalogo/zphbd47.png"
    },
    {
      "code": "ZPHBD48",
      "name": "Aplique lámina rectangular plata",
      "category": "Apliques",
      "image": "catalogo/zphbd48.png"
    },
    {
      "code": "ZPHBD3",
      "name": "Aplique ovalado blanco",
      "category": "Apliques",
      "image": "catalogo/zphbd3.png"
    },
    {
      "code": "ZPHBD4",
      "name": "Aplique ovalado negro",
      "category": "Apliques",
      "image": "catalogo/zphbd4.png"
    },
    {
      "code": "ZPHBD5",
      "name": "Aplique ovalado dorado",
      "category": "Apliques",
      "image": "catalogo/zphbd5.png"
    },
    {
      "code": "ZPHBD49",
      "name": "Aplique con esfera negra",
      "category": "Apliques",
      "image": "catalogo/zphbd49.png"
    },
    {
      "code": "ZPHBD50",
      "name": "Aplique con esfera dorada",
      "category": "Apliques",
      "image": "catalogo/zphbd50.png"
    },
    {
      "code": "ZPHBD52",
      "name": "Aplique transparente cuadrado negro",
      "category": "Apliques",
      "image": "catalogo/zphbd52.png"
    },
    {
      "code": "ZPHBD53",
      "name": "Aplique transparente círculo negro",
      "category": "Apliques",
      "image": "catalogo/zphbd53.png"
    },
    {
      "code": "ZPHBD54",
      "name": "Aplique doble rombo",
      "category": "Apliques",
      "image": "catalogo/zphbd54.png"
    },
    {
      "code": "ZPHBD55",
      "name": "Aplique doble circular",
      "category": "Apliques",
      "image": "catalogo/zphbd55.png"
    },
    {
      "code": "ZPHBD6",
      "name": "Aplique para lámpara concha marina",
      "category": "Apliques",
      "image": "catalogo/zphbd6.png"
    },
    {
      "code": "ZPHBD85",
      "name": "Aplique rombo con copa",
      "category": "Apliques",
      "image": "catalogo/zphbd85.jpeg"
    },
    {
      "code": "ZPHBD86",
      "name": "Aplique círculo con copa",
      "category": "Apliques",
      "image": "catalogo/zphbd86.jpeg"
    },
    {
      "code": "ZPHBD87",
      "name": "Aplique chanel",
      "category": "Apliques",
      "image": "catalogo/zphbd87.jpeg"
    },
    {
      "code": "ZPHBD88",
      "name": "Aplique duo",
      "category": "Apliques",
      "image": "catalogo/zphbd88.jpeg"
    },
    {
      "code": "ZPHBD89",
      "name": "Aplique prisma",
      "category": "Apliques",
      "image": "catalogo/zphbd89.jpeg"
    },
    {
      "code": "ZPHBD90",
      "name": "Aplique orbita",
      "category": "Apliques",
      "image": "catalogo/zphbd90.jpeg"
    },
    {
      "code": "ZPHBD91",
      "name": "Aplique marco con copa",
      "category": "Apliques",
      "image": "catalogo/zphbd91.jpeg"
    },
    {
      "code": "ZPHBD92",
      "name": "Aplique aura con copa",
      "category": "Apliques",
      "image": "catalogo/zphbd92.jpeg"
    },
    {
      "code": "ZPHXDD2",
      "name": "Colgante circular dorado",
      "category": "Colgantes",
      "image": "catalogo/zphxdd2.png"
    },
    {
      "code": "ZPHXDD3",
      "name": "Colgante círculos planos borde brillante",
      "category": "Colgantes",
      "image": "catalogo/zphxdd3.png"
    },
    {
      "code": "ZPHXDD37",
      "name": "Lámpara colgante elipse",
      "category": "Colgantes",
      "image": "catalogo/zphxdd37.jpeg"
    },
    {
      "code": "ZPHXDD6",
      "name": "Colgante semi cono con ojo de pez negro",
      "category": "Colgantes",
      "image": "catalogo/zphxdd6.png"
    }
  ]
    .map((product) => Object.freeze(product))
);

const getProductMedia = (product) => {
  const normalize = (item) => {
    if (typeof item === 'string') return { type: 'image', src: item };
    return {
      type: item.type === 'video' ? 'video' : 'image',
      src: item.src,
      poster: item.poster || '',
      alt: item.alt || ''
    };
  };

  if (Array.isArray(product.media) && product.media.length) {
    return product.media.map(normalize);
  }
  if (Array.isArray(product.images) && product.images.length) {
    return product.images.map(normalize);
  }
  return [{ type: 'image', src: product.image }];
};

const WORK_IMAGES = Object.freeze([
  { src: 'trabajos/01-espejo-led-dormitorio.jpg', category: 'Dormitorio', title: 'Espejo con luz LED perimetral', alt: 'Espejo de dormitorio con iluminación LED perimetral', landscape: false },
  { src: 'trabajos/02-bano-iluminacion-integral.jpg', category: 'Baño', title: 'Iluminación integral de baño', alt: 'Baño terminado con espejo iluminado y luces decorativas', landscape: true },
  { src: 'trabajos/03-bano-espejo-colgante.jpg', category: 'Baño', title: 'Espejo LED y colgante decorativo', alt: 'Baño moderno con espejo LED y luminaria colgante', landscape: true },
  { src: 'trabajos/04-living-iluminacion-decorativa.jpg', category: 'Living', title: 'Iluminación decorativa de living', alt: 'Living terminado con iluminación decorativa central', landscape: true },
  { src: 'trabajos/05-living-luz-indirecta.jpg', category: 'Living', title: 'Luz indirecta en pared de TV', alt: 'Living con iluminación LED indirecta detrás del televisor', landscape: true },
  { src: 'trabajos/06-cocina-tiras-led.jpg', category: 'Cocina', title: 'Tiras LED en estantes', alt: 'Estantes de cocina iluminados con tiras LED', landscape: false },
  { src: 'trabajos/07-colgantes-living.jpg', category: 'Living', title: 'Colgantes decorativos instalados', alt: 'Luminarias colgantes decorativas instaladas en living', landscape: true },
  { src: 'trabajos/08-aplique-bano.jpg', category: 'Baño', title: 'Aplique junto al espejo', alt: 'Aplique de pared instalado junto al espejo del baño', landscape: false },
  { src: 'trabajos/09-espejo-led-organico.jpg', category: 'Baño', title: 'Espejo orgánico retroiluminado', alt: 'Espejo de forma orgánica con retroiluminación LED', landscape: false },
  { src: 'trabajos/10-vestidor-tiras-led.jpg', category: 'Vestidor', title: 'Iluminación interior de vestidor', alt: 'Vestidor con tiras LED instaladas en el interior', landscape: false },
  { src: 'trabajos/11-bano-espejo-y-colgante.jpg', category: 'Baño', title: 'Conjunto de espejo y colgante', alt: 'Baño con espejo iluminado y luminaria colgante lateral', landscape: false },
  { src: 'trabajos/12-bano-iluminacion-calida.jpg', category: 'Baño', title: 'Iluminación cálida ambiental', alt: 'Baño terminado con iluminación LED cálida', landscape: false },
  { src: 'trabajos/13-bano-nicho-iluminado.jpg', category: 'Baño', title: 'Nicho con iluminación LED', alt: 'Nicho de baño iluminado con tira LED', landscape: true },
  { src: 'trabajos/14-bano-espejo-circular.jpg', category: 'Baño', title: 'Espejo circular retroiluminado', alt: 'Espejo circular de baño con luz LED posterior', landscape: false },
  { src: 'trabajos/15-bano-colgante-deco.jpg', category: 'Baño', title: 'Colgante decorativo lateral', alt: 'Luminaria colgante decorativa instalada junto al espejo', landscape: false },
  { src: 'trabajos/16-colgante-cristal.jpg', category: 'Living', title: 'Colgante de cristal protagonista', alt: 'Lámpara colgante de cristal instalada en un ambiente interior', landscape: false },
  { src: 'trabajos/17-espejo-led-y-globo.jpg', category: 'Baño', title: 'Espejo LED con globo de luz', alt: 'Espejo LED con luminaria esférica colgante', landscape: false },
  { src: 'trabajos/18-bano-spots-embutidos.jpg', category: 'Baño', title: 'Spots embutidos y luz de espejo', alt: 'Baño con spots embutidos e iluminación de espejo', landscape: false },
  { src: 'trabajos/19-bano-colgante-triple.jpg', category: 'Baño', title: 'Colgante triple decorativo', alt: 'Luminaria colgante triple instalada en baño', landscape: false },
  { src: 'trabajos/20-mueble-bar-tiras-led.jpg', category: 'Mueble bar', title: 'Mueble iluminado con tiras LED', alt: 'Mueble bar con estantes iluminados mediante tiras LED', landscape: false }
]);

document.addEventListener('DOMContentLoaded', () => {
  const $ = (selector, context = document) => context.querySelector(selector);
  const $$ = (selector, context = document) => [...context.querySelectorAll(selector)];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const buildWhatsAppUrl = (message) => {
    const phone = BUSINESS.whatsapp.replace(/\D/g, '');
    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  const openWhatsApp = (message) => {
    const whatsappLink = document.createElement('a');
    whatsappLink.href = buildWhatsAppUrl(message);
    whatsappLink.target = '_blank';
    whatsappLink.rel = 'noopener noreferrer';
    document.body.appendChild(whatsappLink);
    whatsappLink.click();
    whatsappLink.remove();
  };

  const applyBusinessDetails = () => {
    $$('[data-contact-phone]').forEach((element) => {
      element.textContent = BUSINESS.phoneDisplay;
    });

    $$('[data-contact-phone-link]').forEach((element) => {
      element.href = `tel:+${BUSINESS.whatsapp.replace(/\D/g, '')}`;
    });

    $$('[data-instagram-link]').forEach((element) => {
      element.href = BUSINESS.instagram;
    });

    $$('[data-contact-area]').forEach((element) => {
      element.textContent = BUSINESS.serviceArea;
    });

    $$('[data-whatsapp]').forEach((element) => {
      const message = element.dataset.whatsapp || 'Hola MJ Electricidad, quisiera hacer una consulta.';
      element.href = buildWhatsAppUrl(message);
    });
  };

  applyBusinessDetails();

  const header = $('#site-header');
  const backToTop = $('#back-to-top');
  let ticking = false;

  const updateScrollUI = () => {
    const isScrolled = window.scrollY > 24;
    header?.classList.toggle('is-scrolled', isScrolled);
    backToTop?.classList.toggle('is-visible', window.scrollY > 650);
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(updateScrollUI);
      ticking = true;
    }
  }, { passive: true });

  updateScrollUI();

  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
  });

  const menuButton = $('#menu-toggle');
  const mainNav = $('#main-nav');
  const menuScrim = $('#menu-scrim');
  const mobileQuery = window.matchMedia('(max-width: 900px)');

  const setMenuState = (open, returnFocus = false) => {
    if (!menuButton || !mainNav || !menuScrim) return;

    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.querySelector('.sr-only').textContent = open ? 'Cerrar menú' : 'Abrir menú';
    mainNav.classList.toggle('is-open', open);
    menuScrim.classList.toggle('is-visible', open);
    document.body.classList.toggle('menu-open', open);

    if (open) {
      mainNav.querySelector('a')?.focus();
    } else if (returnFocus) {
      menuButton.focus();
    }
  };

  menuButton?.addEventListener('click', () => {
    const nextState = menuButton.getAttribute('aria-expanded') !== 'true';
    setMenuState(nextState);
  });

  menuScrim?.addEventListener('click', () => setMenuState(false, true));

  mainNav?.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuState(false);
  });

  document.addEventListener('keydown', (event) => {
    const menuIsOpen = menuButton?.getAttribute('aria-expanded') === 'true';
    if (!menuIsOpen) return;

    if (event.key === 'Escape') {
      event.preventDefault();
      setMenuState(false, true);
      return;
    }

    if (event.key === 'Tab' && mainNav && menuButton) {
      const focusable = [menuButton, ...$$('a[href], button:not([disabled])', mainNav)];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  const handleViewportChange = (event) => {
    if (!event.matches) setMenuState(false);
  };

  mobileQuery.addEventListener?.('change', handleViewportChange);

  const internalLinks = $$('a[href^="#"]');
  internalLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;

      const target = $(targetId);
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({
        behavior: reducedMotion ? 'auto' : 'smooth',
        block: 'start'
      });

      if (history.pushState) history.pushState(null, '', targetId);
    });
  });

  const navLinks = $$('.nav-link');
  const observedSections = navLinks
    .map((link) => $(link.getAttribute('href')))
    .filter(Boolean);

  if ('IntersectionObserver' in window && observedSections.length) {
    const activeObserver = new IntersectionObserver((entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visibleEntry) return;

      navLinks.forEach((link) => {
        const active = link.getAttribute('href') === `#${visibleEntry.target.id}`;
        link.classList.toggle('is-active', active);
        if (active) link.setAttribute('aria-current', 'page');
        else link.removeAttribute('aria-current');
      });
    }, {
      rootMargin: '-28% 0px -58% 0px',
      threshold: [0, 0.2, 0.5]
    });

    observedSections.forEach((section) => activeObserver.observe(section));
  }

  const revealElements = $$('[data-reveal]');
  if (reducedMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach((element) => element.classList.add('is-visible'));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.12
    });

    revealElements.forEach((element) => revealObserver.observe(element));
  }

  const catalogGrid = $('#catalog-grid');
  const catalogTemplate = $('#product-card-template');
  const catalogSearch = $('#catalog-search');
  const catalogCount = $('#catalog-count');
  const catalogEmpty = $('#catalog-empty');
  const catalogMore = $('#catalog-more');
  const catalogFilters = $$('.catalog-filters [data-category]');
  const productDialog = $('#product-dialog');
  const productDialogClose = $('#product-dialog-close');
  const productDialogImage = $('#product-dialog-image');
  const productDialogVideo = $('#product-dialog-video');
  const productDialogTitle = $('#product-dialog-title');
  const productDialogCode = $('#product-dialog-code');
  const productDialogCategory = $('#product-dialog-category');
  const productDialogMedia = $('#product-dialog-media');
  const productDialogContact = $('#product-dialog-contact');
  const productThumbnails = $('#product-thumbnails');
  const productPrev = $('#product-prev');
  const productNext = $('#product-next');
  const catalogPageSize = 12;
  let activeCatalogCategory = 'Todos';
  let visibleCatalogProducts = catalogPageSize;
  let activeProduct = null;
  let activeMediaIndex = 0;

  const closeProductDialog = () => {
    productDialogVideo?.pause();
    productDialog?.close();
  };

  const renderProductMedia = () => {
    if (!activeProduct) return;
    const media = getProductMedia(activeProduct);
    const item = media[activeMediaIndex];
    const isVideo = item.type === 'video';
    const label = item.alt || `${activeProduct.name}, código ${activeProduct.code}`;

    if (productDialogVideo) {
      productDialogVideo.pause();
      productDialogVideo.hidden = !isVideo;
      if (isVideo) {
        productDialogVideo.src = item.src;
        productDialogVideo.poster = item.poster || '';
        productDialogVideo.setAttribute('aria-label', label);
      } else {
        productDialogVideo.removeAttribute('src');
        productDialogVideo.load();
      }
    }

    if (productDialogImage) {
      productDialogImage.hidden = isVideo;
      if (!isVideo) {
        productDialogImage.src = item.src;
        productDialogImage.alt = label;
      }
    }

    if (productDialogMedia) {
      const imageCount = media.filter((entry) => entry.type === 'image').length;
      const videoCount = media.filter((entry) => entry.type === 'video').length;
      const parts = [];
      if (imageCount) parts.push(`${imageCount} ${imageCount === 1 ? 'imagen' : 'imágenes'}`);
      if (videoCount) parts.push(`${videoCount} ${videoCount === 1 ? 'video' : 'videos'}`);
      productDialogMedia.textContent = parts.join(' · ');
    }

    productPrev.hidden = media.length < 2;
    productNext.hidden = media.length < 2;
    productThumbnails.hidden = media.length < 2;
    $$('.media-thumbnail', productThumbnails).forEach((button, index) => {
      const active = index === activeMediaIndex;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-current', active ? 'true' : 'false');
    });
  };

  const stepProductMedia = (direction) => {
    if (!activeProduct) return;
    const media = getProductMedia(activeProduct);
    activeMediaIndex = (activeMediaIndex + direction + media.length) % media.length;
    renderProductMedia();
  };

  const openProductDialog = (product) => {
    if (!productDialog) return;
    activeProduct = product;
    activeMediaIndex = 0;
    const media = getProductMedia(product);

    productDialogTitle.textContent = product.name;
    productDialogCode.textContent = `Código ${product.code}`;
    productDialogCategory.textContent = product.category;
    productThumbnails.replaceChildren(...media.map((item, index) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'media-thumbnail';
      button.setAttribute('aria-label', `Ver contenido ${index + 1}`);
      if (item.type === 'video') {
        button.classList.add('is-video');
        button.innerHTML = '<span>Video</span>';
      } else {
        const thumbnail = document.createElement('img');
        thumbnail.src = item.src;
        thumbnail.alt = '';
        button.appendChild(thumbnail);
      }
      button.addEventListener('click', () => {
        activeMediaIndex = index;
        renderProductMedia();
      });
      return button;
    }));

    renderProductMedia();
    document.body.classList.add('modal-open');
    productDialog.showModal();
  };

  productDialogClose?.addEventListener('click', closeProductDialog);
  productPrev?.addEventListener('click', () => stepProductMedia(-1));
  productNext?.addEventListener('click', () => stepProductMedia(1));
  productDialog?.addEventListener('click', (event) => {
    if (event.target === productDialog) closeProductDialog();
  });
  productDialog?.addEventListener('close', () => {
    productDialogVideo?.pause();
    document.body.classList.remove('modal-open');
  });
  productDialogContact?.addEventListener('click', () => {
    if (!activeProduct) return;
    openWhatsApp(`Hola MJ Electricidad, quisiera consultar por la luminaria ${activeProduct.code}: ${activeProduct.name}.`);
  });

  document.addEventListener('keydown', (event) => {
    if (!productDialog?.open) return;
    if (event.key === 'ArrowLeft') stepProductMedia(-1);
    if (event.key === 'ArrowRight') stepProductMedia(1);
  });

  const normalizeSearchText = (value) => String(value)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();

  const getFilteredProducts = () => {
    const searchTerm = normalizeSearchText(catalogSearch?.value || '');

    return CATALOG_PRODUCTS.filter((product) => {
      const matchesCategory = activeCatalogCategory === 'Todos'
        || product.category === activeCatalogCategory;
      const searchableText = normalizeSearchText(`${product.code} ${product.name} ${product.category}`);
      return matchesCategory && (!searchTerm || searchableText.includes(searchTerm));
    });
  };

  const renderCatalog = () => {
    if (!catalogGrid || !catalogTemplate) return;

    const filteredProducts = getFilteredProducts();
    const productsToRender = filteredProducts.slice(0, visibleCatalogProducts);
    const fragment = document.createDocumentFragment();

    productsToRender.forEach((product, index) => {
      const card = catalogTemplate.content.firstElementChild.cloneNode(true);
      const image = $('.product-image img', card);
      const trigger = $('.product-gallery-trigger', card);
      const category = $('.product-category', card);
      const mediaCount = $('.product-photo-count', card);
      const code = $('.product-code', card);
      const name = $('.product-name', card);
      const contact = $('.product-contact', card);
      const media = getProductMedia(product);

      image.src = media[0].type === 'video'
        ? (media[0].poster || product.image)
        : media[0].src;
      image.alt = `${product.name}, código ${product.code}`;
      card.style.setProperty('--card-index', String(index % catalogPageSize));
      category.textContent = product.category;
      code.textContent = `Código ${product.code}`;
      name.textContent = product.name;
      trigger.setAttribute('aria-label', `Abrir galería de ${product.name}, código ${product.code}`);
      trigger.addEventListener('click', () => openProductDialog(product));
      if (media.length > 1) {
        mediaCount.hidden = false;
        mediaCount.textContent = `${media.length} medios`;
      }
      contact.addEventListener('click', () => {
        openWhatsApp(
          `Hola MJ Electricidad, quisiera consultar por la luminaria ${product.code}: ${product.name}.`
        );
      });
      fragment.appendChild(card);
    });

    catalogGrid.replaceChildren(fragment);
    if (catalogCount) {
      const shown = Math.min(productsToRender.length, filteredProducts.length);
      catalogCount.textContent = filteredProducts.length
        ? `Mostrando ${shown} de ${filteredProducts.length} modelos`
        : '0 modelos encontrados';
    }
    if (catalogEmpty) catalogEmpty.hidden = filteredProducts.length !== 0;
    if (catalogMore) catalogMore.hidden = productsToRender.length >= filteredProducts.length;
  };

  catalogSearch?.addEventListener('input', () => {
    visibleCatalogProducts = catalogPageSize;
    renderCatalog();
  });

  catalogFilters.forEach((button) => {
    button.addEventListener('click', () => {
      activeCatalogCategory = button.dataset.category;
      visibleCatalogProducts = catalogPageSize;
      catalogFilters.forEach((filter) => {
        const active = filter === button;
        filter.classList.toggle('is-active', active);
        filter.setAttribute('aria-pressed', String(active));
      });
      renderCatalog();
    });
  });

  catalogMore?.addEventListener('click', () => {
    visibleCatalogProducts += catalogPageSize;
    renderCatalog();
  });

  renderCatalog();

  const pageProgress = $('#page-progress');
  const updatePageProgress = () => {
    if (!pageProgress) return;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
    pageProgress.style.transform = `scaleX(${progress})`;
  };
  window.addEventListener('scroll', updatePageProgress, { passive: true });
  updatePageProgress();

  const workGrid = $('#work-grid');
  const workTemplate = $('#work-card-template');
  const worksMore = $('#works-more');
  const workDialog = $('#work-dialog');
  const workDialogClose = $('#work-dialog-close');
  const workDialogImage = $('#work-dialog-image');
  const workDialogTitle = $('#work-dialog-title');
  const workDialogCategory = $('#work-dialog-category');
  const workDialogCount = $('#work-dialog-count');
  const workPrev = $('#work-prev');
  const workNext = $('#work-next');
  const workPageSize = 8;
  let visibleWorks = workPageSize;
  let activeWorkIndex = 0;

  const renderWorkDialog = () => {
    const work = WORK_IMAGES[activeWorkIndex];
    if (!work) return;
    workDialogImage.src = work.src;
    workDialogImage.alt = work.alt;
    workDialogTitle.textContent = work.title;
    workDialogCategory.textContent = work.category;
    workDialogCount.textContent = `${activeWorkIndex + 1} / ${WORK_IMAGES.length}`;
  };

  const stepWork = (direction) => {
    activeWorkIndex = (activeWorkIndex + direction + WORK_IMAGES.length) % WORK_IMAGES.length;
    renderWorkDialog();
  };

  const openWorkDialog = (index) => {
    if (!workDialog) return;
    activeWorkIndex = index;
    renderWorkDialog();
    document.body.classList.add('modal-open');
    workDialog.showModal();
  };

  const renderWorks = () => {
    if (!workGrid || !workTemplate) return;
    const fragment = document.createDocumentFragment();

    WORK_IMAGES.slice(0, visibleWorks).forEach((work, index) => {
      const card = workTemplate.content.firstElementChild.cloneNode(true);
      const button = $('.work-card-button', card);
      const image = $('img', card);
      const category = $('.work-category', card);
      const title = $('.work-title', card);

      card.classList.toggle('is-landscape', work.landscape);
      card.style.setProperty('--work-index', String(index % workPageSize));
      image.src = work.src;
      image.alt = work.alt;
      category.textContent = work.category;
      title.textContent = work.title;
      button.setAttribute('aria-label', `Ampliar trabajo: ${work.title}`);
      button.addEventListener('click', () => openWorkDialog(index));
      fragment.appendChild(card);
    });

    workGrid.replaceChildren(fragment);
    worksMore.hidden = visibleWorks >= WORK_IMAGES.length;
  };

  worksMore?.addEventListener('click', () => {
    visibleWorks = WORK_IMAGES.length;
    renderWorks();
  });
  workDialogClose?.addEventListener('click', () => workDialog?.close());
  workPrev?.addEventListener('click', () => stepWork(-1));
  workNext?.addEventListener('click', () => stepWork(1));
  workDialog?.addEventListener('click', (event) => {
    if (event.target === workDialog) workDialog.close();
  });
  workDialog?.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
  });
  document.addEventListener('keydown', (event) => {
    if (!workDialog?.open) return;
    if (event.key === 'ArrowLeft') stepWork(-1);
    if (event.key === 'ArrowRight') stepWork(1);
  });

  renderWorks();

  const quoteForm = $('#quote-form');
  const serviceSelect = $('#service');
  const messageField = $('#message');

  $$('.js-quote-service').forEach((button) => {
    button.addEventListener('click', () => {
      const service = button.dataset.service;
      if (serviceSelect && [...serviceSelect.options].some((option) => option.value === service)) {
        serviceSelect.value = service;
      }

      quoteForm?.scrollIntoView({
        behavior: reducedMotion ? 'auto' : 'smooth',
        block: 'center'
      });

      window.setTimeout(() => {
        if (messageField && !messageField.value) {
          messageField.placeholder = `Contanos qué necesitás resolver con ${service.toLowerCase()}.`;
        }
        serviceSelect?.focus({ preventScroll: true });
      }, reducedMotion ? 0 : 550);
    });
  });

  const setFieldError = (field, message) => {
    if (!field) return;
    const error = $(`#${field.id}-error`);

    if (message) {
      field.setAttribute('aria-invalid', 'true');
      field.setAttribute('aria-describedby', `${field.id}-error`);
      if (error) error.textContent = message;
    } else {
      field.removeAttribute('aria-invalid');
      field.removeAttribute('aria-describedby');
      if (error) error.textContent = '';
    }
  };

  const validateForm = () => {
    if (!quoteForm) return false;

    const name = $('#name');
    const phone = $('#phone');
    const email = $('#email');
    const service = $('#service');
    const phoneDigits = phone?.value.replace(/\D/g, '') || '';
    const emailValid = !email?.value || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());

    setFieldError(name, name?.value.trim().length >= 2 ? '' : 'Ingresá tu nombre.');
    setFieldError(phone, phoneDigits.length >= 7 ? '' : 'Ingresá un teléfono válido.');
    setFieldError(email, emailValid ? '' : 'Revisá el formato del email.');
    setFieldError(service, service?.value ? '' : 'Elegí el servicio que necesitás.');

    const invalidField = $('[aria-invalid="true"]', quoteForm);
    if (invalidField) {
      invalidField.focus();
      return false;
    }

    return true;
  };

  $$('input, select, textarea', quoteForm || document).forEach((field) => {
    field.addEventListener('input', () => {
      if (field.matches('[aria-invalid="true"]')) setFieldError(field, '');
    });
    field.addEventListener('change', () => {
      if (field.matches('[aria-invalid="true"]')) setFieldError(field, '');
    });
  });

  quoteForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    const status = $('#form-status');
    const trap = $('#company');
    if (trap?.value) return;
    if (!validateForm()) {
      if (status) status.textContent = 'Revisá los campos marcados para continuar.';
      return;
    }

    const data = new FormData(quoteForm);
    const lines = [
      `Hola MJ Electricidad, soy ${String(data.get('name')).trim()}.`,
      '',
      `Servicio: ${data.get('service')}`,
      `Teléfono: ${String(data.get('phone')).trim()}`
    ];

    const email = String(data.get('email') || '').trim();
    const message = String(data.get('message') || '').trim();
    if (email) lines.push(`Email: ${email}`);
    if (message) lines.push('', 'Detalles:', message);
    lines.push('', 'Quisiera recibir asesoramiento y un presupuesto.');

    if (status) status.textContent = 'Listo. Abrimos WhatsApp con tu consulta preparada.';
    openWhatsApp(lines.join('\n'));
  });

  const year = $('#current-year');
  if (year) year.textContent = String(new Date().getFullYear());
});
