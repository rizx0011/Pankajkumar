/* ============================================================
   main.js — Pankaj Kumar Portfolio
   Interactive features, Typewriter, Modal & Filtering
============================================================ */

/* ---- Navbar Scroll & Active State ---- */
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  if (navbar) {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  }

  // Active section spy
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}, { passive: true });

/* ---- Mobile Menu ---- */
function toggleMobile() {
  const menu = document.getElementById('mobile-menu');
  const btn  = document.getElementById('hamburger');
  if (!menu || !btn) return;
  menu.classList.toggle('open');
  btn.classList.toggle('open');
  document.body.style.overflow = menu.classList.contains('open') ? 'hidden' : '';
}

function closeMobile() {
  const menu = document.getElementById('mobile-menu');
  const btn  = document.getElementById('hamburger');
  if (menu) menu.classList.remove('open');
  if (btn) btn.classList.remove('open');
  document.body.style.overflow = '';
}

/* ---- Typewriter Effect in Hero ---- */
const typewriterWords = [
  'Vibe Coder',
  'AI-Powered Web Developer',
  'BCA Student & Builder',
  'Prompt Architect',
  'Rapid Prototyper'
];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedTextEl = document.getElementById('typed-text');

function typeEffect() {
  if (!typedTextEl) return;
  const currentWord = typewriterWords[wordIndex];

  if (isDeleting) {
    typedTextEl.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedTextEl.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 45 : 100;

  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 1800; // Pause at end of word
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % typewriterWords.length;
    typeSpeed = 400; // Pause before typing new word
  }

  setTimeout(typeEffect, typeSpeed);
}

document.addEventListener('DOMContentLoaded', () => {
  setTimeout(typeEffect, 400);
});

/* ---- Intersection Observer (Scroll Reveals) ---- */
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

// Trigger hero elements immediately
document.querySelectorAll('#hero .reveal, #hero .reveal-right').forEach(el => {
  setTimeout(() => el.classList.add('visible'), 100);
});

revealEls.forEach(el => {
  if (!el.closest('#hero')) io.observe(el);
});

/* ---- Animated Counters (Terminal & Stats) ---- */
const counterEls = document.querySelectorAll('[data-target]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el = e.target;
      const target = parseInt(el.dataset.target, 10);
      const dur = 1200;
      let cur = 0;
      const step = Math.max(1, Math.ceil(target / 35));
      const timer = setInterval(() => {
        cur = Math.min(cur + step, target);
        el.textContent = cur;
        if (cur >= target) clearInterval(timer);
      }, dur / 35);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.4 });
counterEls.forEach(el => counterObserver.observe(el));

/* ---- Project Filtering ---- */
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    projectCards.forEach(card => {
      const category = card.getAttribute('data-category');
      if (filter === 'all' || category === filter) {
        card.style.display = 'flex';
        setTimeout(() => {
          card.style.opacity = '1';
          card.style.transform = 'translateY(0)';
        }, 30);
      } else {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
        setTimeout(() => {
          card.style.display = 'none';
        }, 250);
      }
    });
  });
});

/* ---- Live Demo Modal Logic ---- */
function openDemoModal(title, desc) {
  const modal = document.getElementById('demo-modal');
  const modalTitle = document.getElementById('modal-project-title');
  const modalSubhead = document.getElementById('modal-project-subhead');
  const modalDesc = document.getElementById('modal-project-desc');
  const modalUrl = document.getElementById('modal-url');

  if (modalTitle) modalTitle.textContent = title;
  if (modalSubhead) modalSubhead.textContent = `${title} — Live Preview`;
  if (modalDesc) modalDesc.textContent = desc;
  if (modalUrl) modalUrl.textContent = `https://pankaj-vibe-apps.dev/${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;

  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeDemoModalDirect() {
  const modal = document.getElementById('demo-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function closeDemoModal(event) {
  if (event.target.id === 'demo-modal') {
    closeDemoModalDirect();
  }
}

// ESC Key listener to close modal
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeDemoModalDirect();
    closeMobile();
  }
});

/* ---- Contact Form Handler ---- */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name    = document.getElementById('form-name')?.value.trim();
    const email   = document.getElementById('form-email')?.value.trim();
    const message = document.getElementById('form-message')?.value.trim();
    const statusBox = document.getElementById('form-status-box');
    const submitBtn = document.getElementById('form-submit-btn');

    if (!name || !email || !message) {
      if (statusBox) {
        statusBox.className = 'error';
        statusBox.textContent = 'Please fill in all required fields (Name, Email, Message).';
      }
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      if (statusBox) {
        statusBox.className = 'error';
        statusBox.textContent = 'Please enter a valid email address.';
      }
      return;
    }

    if (submitBtn) {
      submitBtn.innerHTML = '<span>Sending Message...</span> <i class="fa-solid fa-spinner fa-spin"></i>';
      submitBtn.disabled = true;
    }

    setTimeout(() => {
      if (statusBox) {
        statusBox.className = 'success';
        statusBox.textContent = `Thank you ${name}! Your message has been received. Pankaj will get back to you within 24 hours.`;
      }
      contactForm.reset();
      if (submitBtn) {
        submitBtn.innerHTML = '<span>Message Sent!</span> <i class="fa-solid fa-circle-check"></i>';
        setTimeout(() => {
          submitBtn.innerHTML = '<span>Send Message</span> <i class="fa-solid fa-paper-plane"></i>';
          submitBtn.disabled = false;
        }, 3000);
      }
    }, 1200);
  });
}

/* ---- Smooth Scroll for internal hash links ---- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const targetEl = document.querySelector(targetId);
    if (targetEl) {
      e.preventDefault();
      const topOffset = targetEl.getBoundingClientRect().top + window.scrollY - 75;
      window.scrollTo({ top: topOffset, behavior: 'smooth' });
    }
  });
});

