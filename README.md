# FITNESS STUDIO — Premium Boutique Fitness Studio Website

A modern, responsive, multi-page website built for a boutique fitness studio specializing in structured class experiences, high-intensity interval conditioning (HIIT), progressive resistance training, mat Pilates, mobility, and personal training.

Designed as an international boutique fitness brand with an energetic, modern, editorial aesthetic: dark slate backgrounds, vibrant lime and soft mint accents, clean typography, and zero third-party framework dependencies.

---

## 1. Project Specifications

### Technology Stack
- **HTML5:** Semantic markup, high accessibility standards (WCAG 2.1 AA compliant), structured schema metadata.
- **CSS3:** Custom CSS variables, responsive grid & flexbox layouts, smooth transitions, zero frameworks (No Bootstrap, No Tailwind).
- **Vanilla JavaScript:** Fast, modular, dependency-free JavaScript (No jQuery, No React, No external libraries).
- **Hosting Compatibility:** Fully optimized for static hosting platforms (Hostinger, Cloudflare Pages, Netlify, Vercel, GitHub Pages).

### Brand Identity
- **Name:** FITNESS STUDIO (Generic identity, ready for customized rebranding)
- **Tagline:** *"FIND YOUR ENERGY. BUILD YOUR STRENGTH."*
- **Logo:** Inline minimalist, symbol-only vector emblem (kinetic energy arc ribbon in `#C7F36B` and `#A9C99C`). Symbol only; no text inside the mark.
- **Color Palette:**
  - Primary Background: `#111313`
  - Secondary Background: `#1B2020`
  - Card Background: `#252C2A`
  - Primary Accent: `#C7F36B` (Vibrant Lime)
  - Secondary Accent: `#A9C99C` (Soft Mint)
  - Highlight: `#E8DCC8` (Warm Beige)
  - Main Text: `#F7F7F2`
  - Secondary Text: `#A8ADA7`
  - Border: `#383E3A`
  - White: `#FFFFFF`

---

## 2. Website Directory Structure

```text
fitness-studio/
│
├── index.html                  # 01. Home Page (11 Complete Sections)
├── about.html                  # 02. About the Studio & Philosophy
├── classes.html                # 03. All Fitness Classes Directory & Category Filter
├── hiit.html                   # 04. HIIT Training (Intervals, Bodyweight, Low-Impact)
├── strength.html               # 05. Strength Training (Mechanics, Dumbbell, Kettlebell)
├── pilates.html                # 06. Pilates Classes (Mat, Core Stability, Alignment)
├── yoga.html                   # 07. Yoga & Mobility (Flow, Flexibility, Recovery)
├── dance-fitness.html          # 08. Dance Fitness (Rhythm Cardio & Aerobic Movement)
├── functional-training.html    # 09. Functional Training (Multi-Planar Agility & Circuits)
├── personal-training.html      # 10. Personal Training (1-on-1 Coaching & Progress)
├── group-training.html         # 11. Group Fitness (Shared Energy & Team Circuits)
├── trainers.html               # 12. Studio Trainers Directory (Generic Profiles)
├── schedule.html               # 13. Class Timetable (Interactive Multi-Filter)
├── membership.html             # 14. Membership & Packages (Comparison Matrix)
├── programs.html               # 15. Structured Training Programs
├── gallery.html                # 16. Studio Gallery (Category Tabs & Full Lightbox)
├── events.html                 # 17. Workshops & Community Events
├── blog.html                   # 18. Fitness Journal & Educational Articles
├── faq.html                    # 19. Frequently Asked Questions (Accordion)
├── booking.html                # 20. Class Booking Enquiry Form (JS Validation)
├── contact.html                # 21. Contact Us & Demo Location Coordinates
│
├── assets/
│   ├── css/
│   │   └── style.css           # Complete studio stylesheet
│   ├── js/
│   │   └── main.js             # Vanilla JS for all interactions
│   ├── images/
│   │   └── README.md           # Instructions for JPG image placement
│   └── icons/
│
├── IMAGE-GENERATION-GUIDE.md   # Complete prompt book for Google Flow image generation
├── sitemap.xml                 # Search engine sitemap
└── README.md                   # Project documentation & Hostinger deployment guide
```

---

## 3. Interactive Features (Vanilla JavaScript)

1. **Responsive Header & Mobile Drawer:** Off-canvas navigation menu with mobile accordion sub-menus, smooth backdrop overlay, and keyboard accessibility (ESC to close).
2. **Active Page Indicator:** Automatically highlights current page in desktop and mobile navigation links.
3. **Class Category Filters (`classes.html`):** Fast client-side category filtering across HIIT, Strength, Pilates, Mobility, Dance, and Personal Training.
4. **Interactive Timetable Multi-Filter (`schedule.html`):** Filter workouts by Day (Monday through Saturday), Level (Beginner, Intermediate, All Levels), and Time of Day (Morning, Evening), with a clean responsive card-list view.
5. **Interactive Gallery & Lightbox (`gallery.html`):** Filterable gallery grid with click-to-expand lightbox preview, Next/Previous controls, caption display, and keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`).
6. **Accessible Accordion (`faq.html`):** Animated question & answer toggles maintaining proper ARIA attributes (`aria-expanded`) and height transitions.
7. **Form Validation & Demo Feedback (`booking.html` & `contact.html`):**
   - Live frontend input validation (Email regex, minimum character lengths, required selection fields).
   - Validations trigger user-friendly feedback without page refreshes.
   - Strictly frontend demo: output includes:
     `"Your demo enquiry has been validated. No class booking has been submitted or confirmed."`
8. **Back to Top Button:** Smooth window scroll to top, automatically revealed after scrolling past 350px.

---

## 4. Image Assets & Integration

- All **81 unique high-resolution images** have been integrated into `images/` (and synced with `assets/images/`).
- Across all 21 HTML pages, all 84 image instances now render live high-quality visual photography wrapped in responsive `.media-frame` containers with enforced aspect ratios (`ratio-16-9`, `ratio-4-5`, `ratio-3-4`, `ratio-4-3`).
- Eager loading is configured on the primary hero visual, while below-the-fold media uses native `loading="lazy"` to optimize performance.
- Hover zoom animations (`scale(1.04)`) and interactive lightbox expansions are fully enabled with high accessibility standards.

---

## 5. Hostinger Static Hosting Deployment Guide

This website is ready for deployment on Hostinger static or shared web hosting:

### Method A: Hostinger File Manager
1. Log in to your **Hostinger hPanel**.
2. Navigate to **Websites** &rarr; Select your domain &rarr; Click **File Manager**.
3. Open the `public_html` directory.
4. Upload all files and folders located inside `fitness-studio/`:
   - Ensure `index.html` is located directly in the root of `public_html`.
   - Ensure the `assets/` directory (containing `css/` and `js/`) is at the same level.
5. Verify permissions (standard `644` for files, `755` for directories).

### Method B: FTP / SFTP Deployment
1. Retrieve your FTP credentials from Hostinger hPanel under **Files** &rarr; **FTP Accounts**.
2. Connect using an FTP client (FileZilla, Cyberduck, or VS Code SFTP).
3. Transfer all files from `fitness-studio/` directly into `public_html/`.

### HTTPS & Domain Verification
1. In hPanel, go to **Security** &rarr; **SSL** and activate a free Let's Encrypt SSL certificate for your domain.
2. Enable **Force HTTPS** under the **Dashboard** settings.
3. Test your website in your browser: `https://your-domain.com`.

---

## 6. Dummy Contact & Legal Disclaimers

As specified for this demonstration website:
- **Phone:** `0000000000` / `0000000000`
- **Email:** `demo@example.com`
- **Address:** `Plot No. 000, Demo Road, Sample Area, Hyderabad, Telangana – 000000.`
- **Operating Hours:** Monday – Saturday: 6:00 AM – 9:00 PM | Sunday: Closed
- **Health Disclaimer:** Exercise intensity should always be adapted to individual ability. Participants are encouraged to warm up, listen to their body, take scheduled rest, and consult a qualified medical professional prior to starting strenuous exercise.
- **Demo Status:** All schedules, trainer names, and prices ("Price to be announced") represent illustrative demonstration content.
