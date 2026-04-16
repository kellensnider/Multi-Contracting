/**
 * main.js — Multi Contracting, LLC
 * Vanilla JavaScript for: mobile nav, dropdowns,
 * sticky header, scroll animations, contact form validation.
 * No external libraries. Uses const/let only.
 */

'use strict';

// =========================================
// DOM READY INITIALIZER
// Wait for all DOM elements to load before
// querying and attaching event listeners.
// =========================================

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initDropdowns();
  initStickyHeader();
  initScrollAnimations();
  initContactForm();
  initActiveNavLink();
  initSmoothScroll();
});


// =========================================
// MOBILE NAVIGATION
// Toggles the slide-down mobile menu open/closed
// via the hamburger button. Also closes when
// a non-dropdown link or outside area is clicked.
// =========================================

/**
 * Initializes the mobile hamburger navigation toggle.
 * @returns {void}
 */
function initMobileNav() {
  const toggle = document.getElementById('navToggle');
  const menu   = document.getElementById('navMenu');

  if (!toggle || !menu) return;

  // Toggle menu open/closed on hamburger click
  toggle.addEventListener('click', (event) => {
    event.stopPropagation();
    const isOpen = menu.classList.toggle('is-open');
    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));

    // Prevent body scroll when mobile nav is open
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  // Close the mobile menu when clicking outside of it
  document.addEventListener('click', (event) => {
    const header = document.getElementById('site-header');
    if (header && !header.contains(event.target)) {
      closeMobileNav(toggle, menu);
    }
  });

  // Close menu when a non-dropdown nav link is clicked
  const navLinks = menu.querySelectorAll('.nav-link:not(.nav-link--dropdown)');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileNav(toggle, menu);
    });
  });

  // Close menu on Escape key press
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMobileNav(toggle, menu);
    }
  });
}

/**
 * Closes the mobile navigation menu and resets state.
 * @param {HTMLElement} toggle - The hamburger toggle button.
 * @param {HTMLElement} menu   - The nav menu element.
 * @returns {void}
 */
function closeMobileNav(toggle, menu) {
  menu.classList.remove('is-open');
  toggle.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}


// =========================================
// DROPDOWN MENUS
// On mobile: click to toggle each dropdown.
// On desktop (768px+): CSS :hover handles it;
// JS provides click-based keyboard/touch access.
// =========================================

/**
 * Initializes click-based dropdown toggles for the
 * Services and Service Areas nav items.
 * @returns {void}
 */
function initDropdowns() {
  const dropdownItems = document.querySelectorAll('.nav-item--dropdown');

  dropdownItems.forEach((item) => {
    const trigger = item.querySelector('.nav-link--dropdown');
    const dropMenu = item.querySelector('.dropdown-menu');

    if (!trigger || !dropMenu) return;

    trigger.addEventListener('click', (event) => {
      // On mobile, prevent navigation to href when toggling
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        event.preventDefault();
      }

      const isOpen = item.classList.toggle('is-open');
      trigger.setAttribute('aria-expanded', String(isOpen));
      dropMenu.classList.toggle('is-open', isOpen);

      // Close all other dropdowns when opening this one
      dropdownItems.forEach((otherItem) => {
        if (otherItem !== item) {
          otherItem.classList.remove('is-open');
          const otherTrigger = otherItem.querySelector('.nav-link--dropdown');
          const otherMenu    = otherItem.querySelector('.dropdown-menu');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          if (otherMenu)    otherMenu.classList.remove('is-open');
        }
      });
    });
  });

  // Close all dropdowns on outside click
  document.addEventListener('click', (event) => {
    const isInsideNav = event.target.closest('.navbar');
    if (!isInsideNav) {
      dropdownItems.forEach((item) => {
        item.classList.remove('is-open');
        const trigger = item.querySelector('.nav-link--dropdown');
        const dropMenu = item.querySelector('.dropdown-menu');
        if (trigger)  trigger.setAttribute('aria-expanded', 'false');
        if (dropMenu) dropMenu.classList.remove('is-open');
      });
    }
  });
}


// =========================================
// STICKY HEADER
// Adds .is-scrolled class to the header after
// the user scrolls past the top bar height.
// This triggers a drop shadow via CSS.
// =========================================

/**
 * Adds/removes the .is-scrolled class on the site header
 * based on vertical scroll position.
 * @returns {void}
 */
function initStickyHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const onScroll = () => {
    const scrolled = window.scrollY > 40;
    header.classList.toggle('is-scrolled', scrolled);
  };

  // Use passive listener for scroll performance
  window.addEventListener('scroll', onScroll, { passive: true });

  // Run once on load to handle page reload mid-scroll
  onScroll();
}


// =========================================
// SCROLL ANIMATIONS
// Uses IntersectionObserver to add .is-visible
// to elements with .animate-fade-up as they
// enter the viewport.
// =========================================

/**
 * Observes all .animate-fade-up elements and applies
 * the .is-visible class when they enter the viewport.
 * Falls back gracefully if IntersectionObserver is unavailable.
 * @returns {void}
 */
function initScrollAnimations() {
  const animatedEls = document.querySelectorAll('.animate-fade-up');

  if (!animatedEls.length) return;

  // Fallback: make all elements visible if observer not supported
  if (!('IntersectionObserver' in window)) {
    animatedEls.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Stop observing once visible — no re-animation needed
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12, // Trigger when 12% of element is visible
      rootMargin: '0px 0px -40px 0px',
    }
  );

  animatedEls.forEach((el) => observer.observe(el));
}


// =========================================
// CONTACT FORM VALIDATION
// Client-side validation for the contact page
// form. Validates required fields, email format,
// and phone format before showing success state.
// =========================================

/**
 * Initializes client-side validation for the contact form.
 * Intercepts submit, validates each field, and shows
 * inline error messages or a success confirmation.
 * @returns {void}
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Clear previous errors before re-validating
    clearFormErrors(form);

    const isValid = validateForm(form);

    if (isValid) {
      showFormSuccess(form);
    }
  });

  // Real-time validation: clear error on field input
  const fields = form.querySelectorAll('.form-control');
  fields.forEach((field) => {
    field.addEventListener('input', () => {
      clearFieldError(field);
    });
  });
}

/**
 * Runs all field validations and returns true if the form is valid.
 * @param {HTMLFormElement} form - The contact form element.
 * @returns {boolean} Whether the form passed all validations.
 */
function validateForm(form) {
  let isValid = true;

  // Validate: Name (required, min 2 chars)
  const nameField = form.querySelector('#name');
  if (nameField) {
    const val = nameField.value.trim();
    if (!val || val.length < 2) {
      showFieldError(nameField, 'Please enter your full name.');
      isValid = false;
    }
  }

  // Validate: Email (required, must match email pattern)
  const emailField = form.querySelector('#email');
  if (emailField) {
    const val = emailField.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!val) {
      showFieldError(emailField, 'Please enter your email address.');
      isValid = false;
    } else if (!emailPattern.test(val)) {
      showFieldError(emailField, 'Please enter a valid email address.');
      isValid = false;
    }
  }

  // Validate: Phone (optional, but if present must be 10+ digits)
  const phoneField = form.querySelector('#phone');
  if (phoneField && phoneField.value.trim()) {
    const digits = phoneField.value.replace(/\D/g, '');
    if (digits.length < 10) {
      showFieldError(phoneField, 'Please enter a valid 10-digit phone number.');
      isValid = false;
    }
  }

  // Validate: Service (required — must select an option)
  const serviceField = form.querySelector('#service');
  if (serviceField && !serviceField.value) {
    showFieldError(serviceField, 'Please select a service.');
    isValid = false;
  }

  // Validate: Message (required, min 10 chars)
  const messageField = form.querySelector('#message');
  if (messageField) {
    const val = messageField.value.trim();
    if (!val || val.length < 10) {
      showFieldError(messageField, 'Please provide a brief message (at least 10 characters).');
      isValid = false;
    }
  }

  return isValid;
}

/**
 * Marks a form field as invalid and displays an error message.
 * @param {HTMLElement} field   - The input/select/textarea element.
 * @param {string}      message - The error message to display.
 * @returns {void}
 */
function showFieldError(field, message) {
  field.classList.add('is-invalid');
  field.setAttribute('aria-invalid', 'true');

  // Find the sibling .form-error element and show it
  const errorEl = field.parentElement.querySelector('.form-error');
  if (errorEl) {
    errorEl.textContent = message;
    errorEl.classList.add('is-visible');
  }
}

/**
 * Clears the error state from a single form field.
 * @param {HTMLElement} field - The input/select/textarea element.
 * @returns {void}
 */
function clearFieldError(field) {
  field.classList.remove('is-invalid');
  field.removeAttribute('aria-invalid');

  const errorEl = field.parentElement.querySelector('.form-error');
  if (errorEl) {
    errorEl.classList.remove('is-visible');
    errorEl.textContent = '';
  }
}

/**
 * Clears all error states from every field in the form.
 * @param {HTMLFormElement} form - The contact form element.
 * @returns {void}
 */
function clearFormErrors(form) {
  const invalidFields = form.querySelectorAll('.is-invalid');
  invalidFields.forEach((field) => clearFieldError(field));
}

/**
 * Hides the form and displays the success confirmation message.
 * In a real deployment, wire up a fetch() call here to submit
 * form data to a backend or service like Formspree/Netlify Forms.
 * @param {HTMLFormElement} form - The contact form element.
 * @returns {void}
 */
function showFormSuccess(form) {
  const successEl = document.getElementById('formSuccess');

  // Hide form fields, show success panel
  form.querySelector('.form-fields').style.display = 'none';
  if (successEl) {
    successEl.classList.add('is-visible');
    successEl.focus(); // Move focus to success message for screen readers
  }
}


// =========================================
// ACTIVE NAV LINK
// Compares the current page URL to each nav
// link href and adds .is-active to the match.
// =========================================

/**
 * Highlights the current page's nav link by comparing
 * the page's pathname to each link's href.
 * @returns {void}
 */
function initActiveNavLink() {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-link, .dropdown-link');

  navLinks.forEach((link) => {
    const linkPath = new URL(link.href, window.location.origin).pathname;

    // Exact match, or homepage fallback
    const isHome = (currentPath === '/' || currentPath.endsWith('index.html')) &&
                   (linkPath === '/' || linkPath.endsWith('index.html'));

    if (isHome || (linkPath !== '/' && currentPath.endsWith(linkPath.split('/').pop()))) {
      link.classList.add('is-active');
    }
  });
}


// =========================================
// SMOOTH SCROLL
// Smoothly scrolls to anchor targets when
// in-page hash links are clicked.
// =========================================

/**
 * Intercepts clicks on anchor links pointing to in-page
 * IDs and scrolls smoothly, accounting for fixed nav height.
 * @returns {void}
 */
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const NAV_OFFSET = 100; // px — accounts for fixed nav + top bar

  anchorLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      const targetId = link.getAttribute('href').slice(1);
      const target   = document.getElementById(targetId);

      if (!target) return;

      event.preventDefault();

      const targetTop = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;

      window.scrollTo({
        top:      targetTop,
        behavior: 'smooth',
      });
    });
  });
}
