/**
 * Siddharth Singh Portfolio - Interactive Scripts
 * Pure vanilla JavaScript to complement HTML & CSS
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Current Year in Footer
  const currentYearElem = document.getElementById('current-year');
  if (currentYearElem) {
    currentYearElem.textContent = new Date().getFullYear();
  }

  // 2. Dark / Light Theme Toggle with LocalStorage
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;

  // Retrieve saved preference or check system preference
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    htmlElement.setAttribute('data-theme', 'light');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('portfolio-theme', newTheme);
    });
  }

  // 3. Mobile Navigation Drawer Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileToggle && mobileNav) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      mobileToggle.classList.toggle('active', isOpen);
      mobileToggle.setAttribute('aria-expanded', String(isOpen));
    });

    // Close mobile drawer when clicking any link
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        mobileToggle.classList.remove('active');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 4. Project Category Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active state from all buttons
      filterButtons.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });

      // Add active state to clicked button
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      // Filter project cards
      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. Copy Email to Clipboard
  const copyBtn = document.getElementById('copy-email-btn');
  const emailTextElem = document.getElementById('email-text');

  if (copyBtn && emailTextElem) {
    copyBtn.addEventListener('click', async () => {
      const email = emailTextElem.textContent.trim();
      try {
        await navigator.clipboard.writeText(email);
        copyBtn.classList.add('copied');
        setTimeout(() => {
          copyBtn.classList.remove('copied');
        }, 2000);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    });
  }

  // 6. Contact Form Validation & Submission Feedback
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');
  const submitBtn = document.getElementById('submit-btn');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;
      const fields = [
        { id: 'name', errorId: 'name-error', check: val => val.trim().length > 0 },
        { id: 'email', errorId: 'email-error', check: val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val) },
        { id: 'subject', errorId: 'subject-error', check: val => val.trim().length > 0 },
        { id: 'message', errorId: 'message-error', check: val => val.trim().length > 5 }
      ];

      fields.forEach(field => {
        const input = document.getElementById(field.id);
        const parent = input.closest('.form-group');
        if (!field.check(input.value)) {
          parent.classList.add('has-error');
          isValid = false;
        } else {
          parent.classList.remove('has-error');
        }
      });

      if (!isValid) return;

      // Mock sending state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<span>Sending...</span>`;
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `<span>Send Message</span> <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`;
        }

        contactForm.reset();
        if (formFeedback) {
          formFeedback.textContent = '🎉 Thank you! Your message has been sent successfully.';
          formFeedback.className = 'form-feedback success';
          setTimeout(() => {
            formFeedback.style.display = 'none';
          }, 6000);
        }
      }, 900);
    });

    // Clear error message on input
    contactForm.querySelectorAll('input, textarea').forEach(input => {
      input.addEventListener('input', () => {
        const parent = input.closest('.form-group');
        if (parent) {
          parent.classList.remove('has-error');
        }
      });
    });
  }

  // 7. Active Scrollspy for Navigation Links
  const sections = document.querySelectorAll('section[id]');
  const desktopNavLinks = document.querySelectorAll('.desktop-nav .nav-link');

  function updateActiveNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        desktopNavLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink);

  // 8. Back to Top Button
  const backToTopBtn = document.getElementById('back-to-top');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
