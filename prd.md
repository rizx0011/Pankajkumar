# Product Requirements Document (PRD)
## Developer Portfolio Website — Pankaj Kumar

**Owner:** Pankaj Kumar (BCA Student, Vibe Coder)
**Contact Email:** pankajdoopga@gmail.com
**Version:** 1.0
**Date:** August 29, 2026

---

## 1. Overview

Yeh PRD ek **personal developer portfolio website** ke liye hai. Site owner **Pankaj Kumar** hai jo BCA (Bachelor of Computer Applications) kar raha hai aur **"Vibe Coding"** approach se development karta hai (AI-assisted coding tools use karke apps/websites banata hai), sath hi usne normal coding courses bhi complete kiye hain.

Website ka goal hai Pankaj ki skills, projects, aur developer identity ko professionally showcase karna — recruiters, clients, ya collaborators ke liye.

**Theme:** Light shade (white/light background) — clean, modern, developer-style portfolio.
**Performance:** Fully animated, smooth 60–120fps experience, scroll-triggered animations.
**Devices:** Fully responsive — Mobile-friendly + PC/Desktop-friendly.

---

## 2. Goals

- Pankaj ki identity ek **"Vibe Coder / Developer"** ke roop mein establish karna.
- Uske BCA background aur completed courses ko highlight karna.
- Sample/demo projects showcase karna (jo live/working ho, sirf screenshots nahi).
- Easy contact ke liye email aur developer-relevant links dena.
- Smooth, professional, high-performance experience dena (fast load + smooth animation).

---

## 3. Target Look & Feel

- **Theme:** Light color palette (white / off-white background, dark text for contrast, ek accent color — jaise blue, violet, ya teal — coding/tech vibe ke liye).
- **Style:** Modern developer portfolio — clean typography, code-editor inspired accents (optional monospace font for headings/tags), minimal clutter.
- **Profile Image:** Pankaj ka photo **round/circular shape** mein use hoga (hero section aur about section dono jagah).
- **Animation:** Fully animated site — scroll-triggered reveal animations har section ke liye, smooth transitions, hover effects on cards/buttons.
- **Performance target:** Buttery-smooth scrolling & animation, 60fps minimum (120fps capable devices par bhi utilize ho — GPU-accelerated transforms use karke).

---

## 4. Website Structure / Sections

### 4.1 Header / Navbar
- Logo/Name: "Pankaj Kumar"
- Nav links: Home, About, Skills, Projects, Developer Info, Contact
- Resume/CV download button (optional, placeholder)
- Sticky navbar on scroll with smooth background blur

### 4.2 Hero Section
- Round profile photo (Pankaj's image, circular shape, subtle border/shadow, gentle floating/hover animation)
- Name: "Pankaj Kumar"
- Tagline: e.g. *"BCA Student | Vibe Coder | Building with AI-Powered Development"*
- Short intro line about vibe coding
- CTA buttons: "View Projects", "Contact Me"
- Social/contact icons: Email, GitHub, LinkedIn (placeholders)

### 4.3 About Section
- Detailed intro: BCA background, coding journey, completed courses
- "What is Vibe Coding" — short explanation ki Pankaj AI-assisted tools ke through development karta hai (prompt-driven building, rapid prototyping, modern dev workflow)
- Education timeline / highlights (BCA + completed courses list)

### 4.4 Skills Section
- Skill cards/badges: e.g. HTML, CSS, JavaScript, React, AI Tools (Claude/ChatGPT-based dev), Prompt Engineering, Git/GitHub, Responsive Design, etc.
- Animated progress bars or icon-grid style (scroll-triggered fade-in, staggered)

### 4.5 Developer Section (Dedicated — as requested)
- "Meet the Developer" style section
- Highlights: Vibe coding approach, tools used, dev philosophy
- Fun facts / stats: Projects built, courses completed, technologies explored
- Optional: short "My Dev Workflow" steps (Idea → Prompt/Design → Build with AI → Test → Deploy)

### 4.6 Projects Section
- Grid/card layout of **random/sample demo projects** (placeholder projects to fill portfolio, since real projects can be swapped later)
- Each project card includes:
  - Project thumbnail/preview image
  - Project title
  - Short description
  - Tech stack tags
  - **Live Demo** button (working live link — placeholder/demo links for now)
  - GitHub/Code link (optional)
- Suggested sample projects (placeholder ideas):
  1. **Portfolio Website Builder** — AI-assisted personal site generator
  2. **To-Do List App** — Simple task manager with animations
  3. **Weather Dashboard** — Live weather app using public API
  4. **E-commerce Landing Page** — Product showcase demo
  5. **Cafe/Restaurant Website Demo** — Business landing page
  6. **Chat/AI Assistant UI Demo** — Simple chatbot interface

### 4.7 Testimonials/Recommendations (Optional)
- Simple section for future recommendations from mentors/clients (placeholder for now)

### 4.8 Contact Section
- Contact form (Name, Email, Message)
- Direct email display: **pankajdoopga@gmail.com**
- Social links (GitHub, LinkedIn, Instagram — placeholders)
- CTA: "Let's build something together"

### 4.9 Footer (Dedicated — as requested)
- Logo/Name repeat: "Pankaj Kumar"
- Short tagline
- Quick links (Home, About, Skills, Projects, Contact)
- Contact info: Email (pankajdoopga@gmail.com)
- Social media icons row
- Copyright line: "© 2026 Pankaj Kumar. Built with Vibe Coding."
- "Back to top" scroll button

---

## 5. Animation & Interaction Requirements

- **Scroll-triggered reveal animations** — har section fade-in + slide-up jab scroll se view mein aaye (Intersection Observer / Framer Motion / GSAP ScrollTrigger use karke).
- **Staggered animation** for project cards, skill badges (ek ek karke andar aayein).
- **Hero image:** subtle floating/breathing animation (gentle up-down loop) on round profile photo.
- **Hover effects:** project cards par scale/lift + shadow on hover (desktop), tap feedback (mobile).
- **Smooth scrolling:** Native smooth scroll + easing, no jank.
- **Micro-interactions:** Buttons par press/tap scale feedback, nav links par underline animation.
- **Performance goal:** 60fps minimum everywhere, optimized for 120fps-capable displays — animations sirf `transform` & `opacity` par based hone chahiye (GPU accelerated), heavy JS animation libraries avoid karo jaha CSS se kaam ho sake.

---

## 6. Technical / Responsiveness Requirements

- **Fully responsive:** Mobile-friendly + Tablet-friendly + PC/Desktop-friendly (breakpoints: mobile <640px, tablet 640–1024px, desktop >1024px).
- **Fast loading:** Optimized images (WebP), lazy loading below-the-fold content, minimal render-blocking assets.
- **Cross-browser support:** Chrome, Edge, Safari, Firefox.
- **Live projects:** Sample projects should link to actual working/live demo pages (not just static screenshots) — placeholder demo links to be added/replaced later.

---

## 7. Content Checklist

| Item | Status |
|---|---|
| Profile photo (round/circular) | To be added by Pankaj |
| Name: Pankaj Kumar | ✅ Confirmed |
| Email: pankajdoopga@gmail.com | ✅ Confirmed |
| BCA + course details | Placeholder — Pankaj to provide exact course names |
| Real project list & live links | Placeholder projects added — to be replaced with real ones |
| Social links (GitHub/LinkedIn) | Placeholder — to be added |
| Resume/CV file | Optional — to be added later |

---

## 8. Acceptance Criteria

- [ ] Light theme applied consistently across the site.
- [ ] Profile image displayed in round/circular shape in Hero & About sections.
- [ ] Dedicated "Developer" section highlighting vibe coding identity.
- [ ] Dedicated Footer section with contact + quick links + socials.
- [ ] Random/sample project cards present with live demo links.
- [ ] Site fully responsive on mobile and desktop.
- [ ] All sections animate in on scroll (fade/slide, staggered where needed).
- [ ] Smooth 60fps+ scrolling and animation performance, no jank.
- [ ] Contact section shows working email: pankajdoopga@gmail.com.

---

## 9. Open Questions

- BCA ke exact completed courses/certifications ke naam kya hain (About section ke liye)?
- Kya real projects available hain jo sample projects replace karenge, ya abhi ke liye placeholder hi final rahenge?
- GitHub/LinkedIn/Instagram handles kya hain (social links ke liye)?
- Accent color choice: koi specific color pasand hai (blue/violet/teal/green) ya designer ke discretion par chhodna hai?

---

*End of PRD*