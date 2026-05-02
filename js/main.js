/* ============================================================
   THÈME (dark / light) — persisté dans localStorage
   ============================================================ */
const html         = document.documentElement;
const themeToggle  = document.getElementById('themeToggle');
const savedTheme   = localStorage.getItem('portfolio-theme') || 'dark';
html.setAttribute('data-theme', savedTheme);

themeToggle.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('portfolio-theme', next);
});

/* ============================================================
   NAVIGATION MOBILE
   ============================================================ */
const navBurger = document.getElementById('navBurger');
const navLinks  = document.getElementById('navLinks');

navBurger.addEventListener('click', () => {
  navBurger.classList.toggle('open');
  navLinks.classList.toggle('open');
  navBurger.setAttribute('aria-expanded', navLinks.classList.contains('open'));
});

// Fermeture sur clic d'un lien
navLinks.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navBurger.classList.remove('open');
    navLinks.classList.remove('open');
    navBurger.setAttribute('aria-expanded', 'false');
  });
});

// Fermeture sur clic en dehors
document.addEventListener('click', (e) => {
  if (!navLinks.contains(e.target) && !navBurger.contains(e.target)) {
    navBurger.classList.remove('open');
    navLinks.classList.remove('open');
  }
});

/* ============================================================
   NAV STICKY + LIEN ACTIF AU SCROLL
   ============================================================ */
const nav      = document.getElementById('nav');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  // Fond flou au-delà de 50px
  nav.classList.toggle('scrolled', window.scrollY > 50);

  // Surlignage du lien correspondant à la section visible
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) current = section.id;
  });
  document.querySelectorAll('.nav__link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}, { passive: true });

/* ============================================================
   SCROLL REVEAL (Intersection Observer)
   ============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // déclenche une seule fois
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -48px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ============================================================
   EFFET "TYPEWRITER" dans le Hero
   ✏️ Modifiez le tableau `roles` selon vos propres titres
   ============================================================ */
const typedEl  = document.getElementById('typed');
// ✏️ REMPLACEZ ces rôles par les vôtres
const roles    = [
  'Ingénieur Réseaux', 
  'Expert Cybersécurité', 
  'Spécialiste SIEM/SOC', 
  'Architecte Infrastructure'
];
let roleIndex  = 0;
let charIndex  = 0;
let deleting   = false;
let delay      = 80;

function typeLoop() {
  const word = roles[roleIndex];
  if (deleting) {
    typedEl.textContent = word.slice(0, --charIndex);
    delay = 38;
  } else {
    typedEl.textContent = word.slice(0, ++charIndex);
    delay = 80;
  }

  if (!deleting && charIndex === word.length) { delay = 2000; deleting = true; }
  else if (deleting && charIndex === 0)        { deleting = false; roleIndex = (roleIndex + 1) % roles.length; delay = 450; }

  setTimeout(typeLoop, delay);
}
if (typedEl) typeLoop();

/* ============================================================
   COMPTEURS ANIMÉS dans le Hero (.hero__stat-num)
   ============================================================ */
function countUp(el, target, duration = 1800) {
  let start = null;
  const step = (ts) => {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    // Ease-out cubique
    el.textContent = Math.round((1 - Math.pow(1 - progress, 3)) * target);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      countUp(entry.target, parseInt(entry.target.dataset.target, 10));
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.hero__stat-num').forEach(el => counterObserver.observe(el));

/* ============================================================
   GESTION DE L'IMAGE AVATAR (hero)
   Affiche le placeholder SVG si l'image est absente
   ============================================================ */
const heroImg = document.getElementById('heroImg');
if (heroImg) {
  heroImg.addEventListener('error', () => {
    heroImg.style.display = 'none';
  });
}

/* ============================================================
   FORMULAIRE DE CONTACT
   ✏️ Pour envoyer réellement le message :
      - Formspree : ajoutez action="https://formspree.io/f/VOTRE_ID" method="POST" sur le <form>
      - EmailJS   : remplacez le setTimeout par emailjs.sendForm(...)
   ============================================================ */
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');
const submitBtn   = document.getElementById('submitBtn');

if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!contactForm.checkValidity()) { contactForm.reportValidity(); return; }

    const origHTML = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <svg style="animation:spin .8s linear infinite" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 12a9 9 0 1 1-6.22-8.56"/>
      </svg>
      Envoi en cours…`;

    try {
      const response = await fetch(contactForm.action, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });

      if (response.ok) {
        formSuccess.hidden = false;
        contactForm.reset();
        setTimeout(() => { formSuccess.hidden = true; }, 6000);
      } else {
        alert('Une erreur est survenue. Veuillez réessayer ou m\'écrire directement par email.');
      }
    } catch {
      alert('Impossible d\'envoyer le message. Vérifiez votre connexion.');
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = origHTML;
    }
  });
}

// Injection de l'animation @keyframes spin utilisée dans le bouton
const spinStyle = document.createElement('style');
spinStyle.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
document.head.appendChild(spinStyle);

/* ============================================================
   SMOOTH SCROLL sur la flèche hero
   ============================================================ */
document.querySelector('.hero__scroll')?.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
});
