/* ============================================================
   Mithila blooms — main.js
   ============================================================ */

/* ---------- AOS Init ---------- */
AOS.init({
  duration: 700,
  easing: 'ease-out-cubic',
  once: true,
  offset: 60,
});

/* ---------- Navbar: add .scrolled class on scroll ---------- */
const mainNav   = document.getElementById('mainNav');
const backToTop = document.getElementById('backToTop');

function handleScroll() {
  if (window.scrollY > 60) {
    mainNav.classList.add('scrolled');
  } else {
    mainNav.classList.remove('scrolled');
  }

  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}

window.addEventListener('scroll', handleScroll, { passive: true });
handleScroll(); // run on load in case page is already scrolled

/* ---------- Active nav link — scroll position based ---------- */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-link[href^="#"]');

function setActiveLink(id) {
  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
  });
}

function updateActiveOnScroll() {
  const offset = mainNav.offsetHeight + 10; // navbar height + small buffer
  const scrollPos = window.scrollY + offset;

  let current = sections[0].getAttribute('id'); // default to first section

  sections.forEach((section) => {
    if (section.offsetTop <= scrollPos) {
      current = section.getAttribute('id');
    }
  });

  setActiveLink(current);
}

window.addEventListener('scroll', updateActiveOnScroll, { passive: true });
updateActiveOnScroll(); // set correct link on page load

/* ---------- Close mobile navbar + instant highlight on click ---------- */
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    // Immediately highlight the clicked link without waiting for scroll event
    const target = link.getAttribute('href').slice(1);
    setActiveLink(target);

    const navCollapse = document.getElementById('navbarNav');
    if (navCollapse.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);
      if (bsCollapse) bsCollapse.hide();
    }
  });
});

/* ---------- Construction banner dismiss ---------- */
const bannerClose = document.getElementById('bannerClose');
if (bannerClose) {
  bannerClose.addEventListener('click', () => {
    document.body.classList.add('banner-hidden');
    // Shift navbar back to top
    document.getElementById('mainNav').style.top = '0';
  });
}

/* ---------- Back to top ---------- */
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

