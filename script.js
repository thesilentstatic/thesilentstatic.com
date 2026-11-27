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

  // Signup emails go to admin@thesilentstatic.com through FormSubmit.
  const emailForm = document.getElementById('email-form');
  const formMessage = document.getElementById('form-message');

  if (emailForm) {
    emailForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const input = emailForm.querySelector('input[type="email"]');
      const honey = emailForm.querySelector('input[name="_honey"]');
      const button = emailForm.querySelector('button');
      const originalText = button.textContent;
      const address = input.value.trim();

      if (honey && honey.value) return;

      button.disabled = true;
      button.textContent = 'JOINING...';
      formMessage.textContent = '';

      let sent = false;
      try {
        const response = await fetch('https://formsubmit.co/ajax/admin@thesilentstatic.com', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            email: address,
            _replyto: address,
            _subject: 'New list signup — The Silent Static',
            _template: 'table',
            _captcha: 'false',
            page: 'thesilentstatic.com'
          })
        });
        const data = await response.json().catch(() => ({}));
        sent = response.ok && String(data.success).toLowerCase() === 'true';
      } catch (_) {
        sent = false;
      }

      if (sent) {
        formMessage.textContent = 'YOU\'RE IN. WELCOME TO THE NOISE.';
        emailForm.reset();
      } else {
        formMessage.textContent = 'COULDN\'T JOIN RIGHT NOW. TRY AGAIN.';
      }
      formMessage.style.color = '#b91c1c';

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
