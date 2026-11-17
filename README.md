# Single-Page Developer & AI Engineer Portfolio

A modern, high-performance static single-page portfolio website crafted using semantic **HTML5**, modern **CSS3**, and minimal vanilla JavaScript.

---

## 🌟 Features

- **Single-Page Architecture**: Seamless, responsive navigation with smooth scroll behavior.
- **Modern CSS Styling**:
  - CSS custom properties (variables) for effortless theming.
  - Dark Mode & Light Mode support (defaults to sleek dark theme with instant toggle).
  - Glassmorphic card styling, gradient accents, and subtle glow effects.
  - Fully responsive layout across mobile, tablet, and desktop viewports.
- **Sections Included**:
  1. **Header / Navbar**: Sticky glassmorphic bar with logo, nav links, theme toggle, and mobile menu drawer.
  2. **Hero Section**: Bio, status indicator, action buttons, social links, and an interactive code card.
  3. **About Me**: Core background, specializations, and engineering highlights.
  4. **Skills & Tech Stack**: Categorized tech stack grid (AI/ML, Frontend, Backend, DevOps).
  5. **Featured Projects**: Project cards with interactive filter pills (All, AI & ML, Full Stack, Tools).
  6. **Experience & Education**: Clean vertical milestone timeline.
  7. **Contact Section**: Interactive contact form with validation, direct contact cards, and a one-click "Copy Email" button.
  8. **Footer**: Social links, navigation shortcuts, and back-to-top button.
- **Zero Heavy Dependencies**: Pure HTML & CSS (no heavy node_modules or build steps required).

---

## 🚀 Quick Start / How to Run

### Method 1: Open Directly in Browser
You can open `index.html` directly in any web browser:
- On macOS: double-click `index.html` or run:
  ```bash
  open index.html
  ```

### Method 2: Local HTTP Server (Python)
If you prefer running a local server:
```bash
python3 -m http.server 8000
```
Then visit: [http://localhost:8000](http://localhost:8000)

---

## 📂 File Structure

```
S&AI/
├── index.html     # Semantic single-page HTML structure
├── style.css      # Modern responsive styling, variables, and dark/light modes
├── script.js      # Vanilla JS for theme toggle, filtering, and form feedback
└── README.md      # Project overview and instructions
```

---

## ✏️ How to Customize

1. **Personal Information**:
   - Open `index.html` and search for `Siddharth Singh` or `siddharth@example.com` to replace with your name, title, and contact details.
2. **Social Media Links**:
   - Update the `href` attributes in the `.hero-socials` and `.social-pills` blocks (GitHub, LinkedIn, Twitter/X, Email).
3. **Projects**:
   - Edit or duplicate the `<article class="project-card">` elements under `#projects` to showcase your own work.
4. **Color Palette**:
   - In `style.css`, modify `:root` variables (`--primary`, `--accent-cyan`, `--bg-base`, etc.) to match your personal brand.
