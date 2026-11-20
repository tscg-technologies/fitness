/**
 * FITNESS STUDIO — Master JavaScript
 * Vanilla JavaScript only. Zero frameworks.
 * Handles navigation, mobile drawer, filters, accordion, lightbox,
 * form validation, back-to-top, and active states.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initActiveNav();
  initBackToTop();
  initClassFilters();
  initTimetableFilters();
  initAccordion();
  initGalleryLightbox();
  initBookingForm();
  initContactForm();
});

/* --------------------------------------------------------------------------
   1. Mobile Navigation & Drawer
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const backdrop = document.querySelector('.mobile-nav-backdrop');
  const dropdownToggle = document.querySelector('.mobile-dropdown-header');
  const dropdownContent = document.querySelector('.mobile-dropdown-content');

  if (!toggleBtn || !drawer) return;

  function openDrawer() {
    drawer.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
    toggleBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    toggleBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (backdrop) {
    backdrop.addEventListener('click', closeDrawer);
  }

  // Close drawer when clicking internal nav links
  const drawerLinks = drawer.querySelectorAll('a');
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  // Mobile submenu accordion
  if (dropdownToggle && dropdownContent) {
    dropdownToggle.addEventListener('click', () => {
      dropdownContent.classList.toggle('open');
      const expanded = dropdownToggle.getAttribute('aria-expanded') === 'true';
      dropdownToggle.setAttribute('aria-expanded', !expanded);
    });
  }

  // Escape key closes drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

/* --------------------------------------------------------------------------
   2. Active Navigation Highlight
   -------------------------------------------------------------------------- */
function initActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link, .dropdown-link, .mobile-nav-item a, .mobile-dropdown-content a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
      // If inside desktop dropdown, highlight parent
      const parentDropdown = link.closest('.nav-item-dropdown');
      if (parentDropdown) {
        const toggle = parentDropdown.querySelector('.nav-dropdown-toggle');
        if (toggle) toggle.classList.add('active');
      }
    }
  });
}

/* --------------------------------------------------------------------------
   3. Back-to-Top Button
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const btt = document.querySelector('.back-to-top');
  if (!btt) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      btt.classList.add('visible');
    } else {
      btt.classList.remove('visible');
    }
  });

  btt.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

/* --------------------------------------------------------------------------
   4. Class Category Filters (classes.html)
   -------------------------------------------------------------------------- */
function initClassFilters() {
  const filterBtns = document.querySelectorAll('[data-class-filter]');
  const cards = document.querySelectorAll('[data-class-category]');

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-class-filter');

      cards.forEach(card => {
        const category = card.getAttribute('data-class-category');
        if (filterValue === 'all' || category === filterValue || category.includes(filterValue)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   5. Interactive Timetable Filters (schedule.html)
   -------------------------------------------------------------------------- */
function initTimetableFilters() {
  const dayBtns = document.querySelectorAll('[data-schedule-day]');
  const levelBtns = document.querySelectorAll('[data-schedule-level]');
  const timeBtns = document.querySelectorAll('[data-schedule-time]');
  const scheduleRows = document.querySelectorAll('[data-timetable-item]');

  if (!scheduleRows.length) return;

  let activeDay = 'all';
  let activeLevel = 'all';
  let activeTime = 'all';

  function applyFilters() {
    scheduleRows.forEach(row => {
      const rowDay = row.getAttribute('data-day') || '';
      const rowLevel = row.getAttribute('data-level') || '';
      const rowTime = row.getAttribute('data-time') || '';

      const matchDay = (activeDay === 'all' || rowDay.toLowerCase() === activeDay.toLowerCase());
      const matchLevel = (activeLevel === 'all' || rowLevel.toLowerCase() === activeLevel.toLowerCase());
      const matchTime = (activeTime === 'all' || rowTime.toLowerCase() === activeTime.toLowerCase());

      if (matchDay && matchLevel && matchTime) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });

    // Check if any results remain visible
    const visibleCount = Array.from(scheduleRows).filter(r => r.style.display !== 'none').length;
    const noResults = document.getElementById('schedule-no-results');
    if (noResults) {
      noResults.style.display = visibleCount === 0 ? 'block' : 'none';
    }
  }

  if (dayBtns.length) {
    dayBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        dayBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeDay = btn.getAttribute('data-schedule-day');
        applyFilters();
      });
    });
  }

  if (levelBtns.length) {
    levelBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        levelBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeLevel = btn.getAttribute('data-schedule-level');
        applyFilters();
      });
    });
  }

  if (timeBtns.length) {
    timeBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        timeBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeTime = btn.getAttribute('data-schedule-time');
        applyFilters();
      });
    });
  }
}

/* --------------------------------------------------------------------------
   6. FAQ Accordion (faq.html)
   -------------------------------------------------------------------------- */
function initAccordion() {
  const accordionItems = document.querySelectorAll('.accordion-item');
  if (!accordionItems.length) return;

  accordionItems.forEach(item => {
    const trigger = item.querySelector('.accordion-trigger');
    const body = item.querySelector('.accordion-body');

    if (!trigger || !body) return;

    trigger.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');

      // Optionally close other open items for clean accordion UX
      accordionItems.forEach(other => {
        if (other !== item && other.classList.contains('open')) {
          other.classList.remove('open');
          const otherTrigger = other.querySelector('.accordion-trigger');
          const otherBody = other.querySelector('.accordion-body');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          if (otherBody) otherBody.style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove('open');
        trigger.setAttribute('aria-expanded', 'false');
        body.style.maxHeight = null;
      } else {
        item.classList.add('open');
        trigger.setAttribute('aria-expanded', 'true');
        body.style.maxHeight = body.scrollHeight + 'px';
      }
    });
  });
}

/* --------------------------------------------------------------------------
   7. Gallery & Lightbox (gallery.html)
   -------------------------------------------------------------------------- */
function initGalleryLightbox() {
  const filterBtns = document.querySelectorAll('[data-gallery-filter]');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const modal = document.querySelector('.lightbox-modal');
  const closeBtn = document.querySelector('.lightbox-close');
  const prevBtn = document.querySelector('.lightbox-prev');
  const nextBtn = document.querySelector('.lightbox-next');
  const placeholderTarget = document.querySelector('.lightbox-target-view');
  const captionTitle = document.querySelector('.lightbox-caption-title');
  const captionCategory = document.querySelector('.lightbox-caption-category');

  if (!galleryItems.length) return;

  // Gallery filtering
  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-gallery-filter');

        galleryItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            item.style.display = '';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // Lightbox interactions
  if (!modal) return;

  let currentIndex = 0;
  let visibleItems = [];

  function updateVisibleItems() {
    visibleItems = Array.from(galleryItems).filter(item => item.style.display !== 'none');
  }

  function showLightboxIndex(index) {
    updateVisibleItems();
    if (!visibleItems.length) return;

    if (index < 0) index = visibleItems.length - 1;
    if (index >= visibleItems.length) index = 0;
    currentIndex = index;

    const item = visibleItems[currentIndex];
    const title = item.getAttribute('data-title') || 'Studio Gallery Preview';
    const cat = item.getAttribute('data-category-label') || 'Studio Space';
    const filename = item.getAttribute('data-filename') || 'gallery-image.jpg';

    if (captionTitle) captionTitle.textContent = title;
    if (captionCategory) captionCategory.textContent = cat;

    if (placeholderTarget) {
      placeholderTarget.innerHTML = `
        <div class="media-frame ratio-16-9" style="width: 100%; min-height: 380px; max-height: 75vh; background: #0a0b0b;">
          <img src="images/${filename}" alt="${title}" class="media-img" style="object-fit: contain; width: 100%; height: 100%; max-height: 75vh;">
        </div>
      `;
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      updateVisibleItems();
      const idx = visibleItems.indexOf(item);
      showLightboxIndex(idx >= 0 ? idx : 0);
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showLightboxIndex(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showLightboxIndex(currentIndex + 1);
    });
  }

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    } else if (e.key === 'ArrowLeft') {
      showLightboxIndex(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      showLightboxIndex(currentIndex + 1);
    }
  });
}

/* --------------------------------------------------------------------------
   8. Booking Form Validation (booking.html)
   -------------------------------------------------------------------------- */
function initBookingForm() {
  const form = document.getElementById('class-booking-form');
  const alertBox = document.getElementById('booking-feedback-alert');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;

    // Required fields: name, email, phone, class, date, time, level, type
    const fields = [
      { id: 'book-name', validator: val => val.trim().length >= 2 },
      { id: 'book-email', validator: val => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.trim()) },
      { id: 'book-phone', validator: val => val.trim().length >= 7 },
      { id: 'book-class', validator: val => val.trim() !== '' },
      { id: 'book-date', validator: val => val.trim() !== '' },
      { id: 'book-time', validator: val => val.trim() !== '' },
      { id: 'book-level', validator: val => val.trim() !== '' },
      { id: 'book-type', validator: val => val.trim() !== '' }
    ];

    fields.forEach(f => {
      const el = document.getElementById(f.id);
      if (!el) return;
      if (!f.validator(el.value)) {
        el.classList.add('is-invalid');
        isValid = false;
      } else {
        el.classList.remove('is-invalid');
      }
    });

    if (isValid && alertBox) {
      // Prompt Mandatory Text:
      // "Your demo enquiry has been validated. No class booking has been submitted or confirmed."
      alertBox.className = 'form-alert show success';
      alertBox.innerHTML = `
        <strong>Enquiry Validated Successfully:</strong><br>
        Your demo enquiry has been validated. No class booking has been submitted or confirmed.<br>
        <small style="color: var(--text-muted); display:inline-block; margin-top:0.4rem;">
          This is an interactive frontend demo preview. In production, this form will connect directly to your verified booking management software.
        </small>
      `;
      form.reset();
      alertBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (alertBox) {
      alertBox.className = 'form-alert show';
      alertBox.style.backgroundColor = 'rgba(255, 107, 107, 0.12)';
      alertBox.style.borderColor = '#ff6b6b';
      alertBox.style.color = '#ff9999';
      alertBox.innerHTML = 'Please check the highlighted required fields and ensure a valid email and phone format.';
      alertBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  // Real-time clear on input
  form.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('input', () => {
      if (input.classList.contains('is-invalid')) {
        input.classList.remove('is-invalid');
      }
    });
  });
}

/* --------------------------------------------------------------------------
   9. Contact Form Validation (contact.html)
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('studio-contact-form');
  const alertBox = document.getElementById('contact-feedback-alert');

  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const nameInput = document.getElementById('contact-name');
    const emailInput = document.getElementById('contact-email');
    const subjectInput = document.getElementById('contact-subject');
    const messageInput = document.getElementById('contact-message');

    if (!nameInput.value.trim()) {
      nameInput.classList.add('is-invalid');
      isValid = false;
    } else {
      nameInput.classList.remove('is-invalid');
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
      emailInput.classList.add('is-invalid');
      isValid = false;
    } else {
      emailInput.classList.remove('is-invalid');
    }

    if (!subjectInput.value.trim()) {
      subjectInput.classList.add('is-invalid');
      isValid = false;
    } else {
      subjectInput.classList.remove('is-invalid');
    }

    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      messageInput.classList.add('is-invalid');
      isValid = false;
    } else {
      messageInput.classList.remove('is-invalid');
    }

    if (isValid && alertBox) {
      alertBox.className = 'form-alert show success';
      alertBox.innerHTML = `
        <strong>Message Validated (Demo Environment):</strong><br>
        Your demo contact message has been validated successfully.<br>
        <small style="color: var(--text-muted); display:inline-block; margin-top:0.4rem;">
          Note: No email has been transmitted. This form is a frontend demonstration placeholder.
        </small>
      `;
      form.reset();
      alertBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else if (alertBox) {
      alertBox.className = 'form-alert show';
      alertBox.style.backgroundColor = 'rgba(255, 107, 107, 0.12)';
      alertBox.style.borderColor = '#ff6b6b';
      alertBox.style.color = '#ff9999';
      alertBox.innerHTML = 'Please fill out all required fields with a valid email address and a message of at least 10 characters.';
      alertBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  });

  form.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('input', () => {
      if (input.classList.contains('is-invalid')) {
        input.classList.remove('is-invalid');
      }
    });
  });
}
