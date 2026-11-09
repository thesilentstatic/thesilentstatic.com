// THE SILENT STATIC — Site Scripts

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close on link click (mobile)
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Email list signup (demo - replace with real service)
  const emailForm = document.getElementById('email-form');
  const formMessage = document.getElementById('form-message');

  if (emailForm) {
    emailForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const input = emailForm.querySelector('input');
      const button = emailForm.querySelector('button');
      const originalText = button.textContent;

      button.disabled = true;
      button.textContent = 'JOINING...';

      // Simulate API call
      await new Promise(r => setTimeout(r, 650));

      // In production: replace this with Mailchimp, Buttondown, ConvertKit, etc.
      console.log('New subscriber:', input.value);

      formMessage.textContent = 'YOU\'RE IN. WELCOME TO THE NOISE.';
      formMessage.style.color = '#b91c1c';

      emailForm.reset();

      button.disabled = false;
      button.textContent = originalText;

      setTimeout(() => {
        formMessage.textContent = '';
      }, 6000);
    });
  }

  // Keyboard escape closes mobile menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navLinks?.classList.contains('open')) {
      navLinks.classList.remove('open');
      navToggle?.setAttribute('aria-expanded', 'false');
    }
  });

  // Hidden visit counter. Nothing is shown on the page.
  // Read the total: https://countapi.mileshilliard.com/api/v1/get/thesilentstatic.com-visits
  countVisit();

  console.log('%c[THE SILENT STATIC] Raw site initialized. Turn it up.', 'color:#b91c1c');
});

function countVisit() {
  const host = location.hostname;
  if (!host || host === 'localhost' || host === '127.0.0.1') return;

  try {
    if (sessionStorage.getItem('tss-visit')) return;
    sessionStorage.setItem('tss-visit', '1');
  } catch (_) {
    // Private mode can block storage. Still count this load.
  }

  fetch('https://countapi.mileshilliard.com/api/v1/hit/thesilentstatic.com-visits', {
    cache: 'no-store',
    keepalive: true
  }).catch(() => {});
}
