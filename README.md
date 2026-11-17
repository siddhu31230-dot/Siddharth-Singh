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

## 🌐 Making It Available for Everyone (Public Deployment)

### 1. GitHub Pages (Free Worldwide Hosting)
Your local repository is already initialized on the `main` branch. To publish it live under `https://siddhu31230-dot.github.io/portfolio/`:

1. Create a public repository on your GitHub account:
   ```bash
   gh repo create portfolio --public --source=. --remote=origin --push
   ```
2. Enable GitHub Pages on the `main` branch:
   ```bash
   gh api -X POST repos/siddhu31230-dot/portfolio/pages -f source='{"branch":"main","path":"/"}'
   ```
3. Your site will be live worldwide at:
   `https://siddhu31230-dot.github.io/portfolio/`

---

### 2. Netlify Drop (Instant 10-Second Drag & Drop)
If you prefer not to use the command line:
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag and drop this folder (`S&AI`) into the upload area.
3. You will receive an instant, free `https://your-site.netlify.app` public link available worldwide.

---

### 3. Local Network Access (Phones, Tablets & Wi-Fi Devices)
The portfolio is currently live on your local network:
- **On this computer**: [http://localhost:8085](http://localhost:8085)
- **On your phone / other devices on the same Wi-Fi**: `http://172.16.1.89:8085`

---

## ♿ Universal Accessibility (Available for All Users)

The website has been built following WCAG 2.1 accessibility guidelines:
- **Keyboard Navigation**: Full `:focus-visible` outline rings for keyboard-only visitors.
- **Skip to Content**: Hidden jump link at the top of the DOM for screen readers and tab navigation.
- **Reduced Motion**: Respects `@media (prefers-reduced-motion: reduce)` for users with vestibular or motion sensitivities.
- **Contrast Adaptation**: Meets WCAG AA text contrast thresholds with `@media (prefers-contrast: more)` support.
- **Screen Reader Support**: Semantic HTML5 elements (`<header>`, `<main>`, `<nav>`, `<article>`, `<footer>`) with explicit `aria-label` and `aria-expanded` attributes.

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
