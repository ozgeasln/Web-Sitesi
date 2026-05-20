# 🌌 Cyberpunk & Lofi Themed Interactive Web Project

This project is a cyberpunk and lofi-themed Front-End project designed to break the standard website experience and offer visitors an **interactive game interface (HUD)** feel. It was developed from scratch using entirely **Vanilla HTML, CSS, and JavaScript**, without any external libraries or frameworks.

---

## ⚠️ Project Status: Work in Progress

**This project is not a static, finished website; it is a living interface experiment.** 
The current version includes the basic skeleton, the lighting engine, and scroll-based interface transitions. The interface, animations, and site mechanics will evolve over time. New updates will continue to be pushed to the repo, and the site's structure will expand over time.

---

## 🚀 Front-End Features & Mechanics

The project utilizes the browsers' native capabilities (Native API) with maximum efficiency:

*   **Dynamic HUD Transition (Scroll Trigger):** As the user scrolls down the page, the scroll position calculated via JavaScript instantly updates the CSS root variables (`--ui-opacity`). The normal page view smoothly transitions into a cyberpunk game screen (with a grid background and scanlines).
*   **Custom Audio Controller (Custom Audio UI):** Instead of the default HTML `<audio>` player, a dynamic audio slider designed from scratch with CSS and manipulated with JS is used. It features an ergonomic structure that smoothly expands on hover.
*   **Mouse Tracking Light (Glow Effect):** Instant `X` and `Y` coordinates of the cursor are retrieved using a JS `mousemove` event listener, creating a real-time light source that interacts with page elements using CSS `radial-gradient` and `mix-blend-mode: screen`.
*   **Performant Animations:** To prevent performance drops, screen entry animations of DOM elements (Fade-in, Slide) are optimized using the `Intersection Observer API` to trigger only when they become visible on the screen.

---

## 📂 File Structure

```text
/ (Root Directory)
├── index.html       # DOM structure, semantic tags, and game HUD layer
├── style.css        # CSS variables, dynamic animations, and design
├── script.js        # Scroll calculations, mouse tracking, and audio engine
└── /assets          # (hero-bg.jpg, cyber-frame.jpg, lofi-room.jpg, ambient.mp3)