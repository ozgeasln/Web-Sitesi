# 🌌 Cyberpunk & Lofi Themed Interactive Web Experience

An immersive cyberpunk and lofi-inspired interactive front-end experience designed to move beyond traditional website structures and create a cinematic **HUD-style interface** atmosphere.

This project was developed entirely with **Vanilla HTML, CSS, and JavaScript**, without relying on external frameworks or UI libraries. The focus is on creating a highly interactive, visually dynamic, and performance-optimized web experience using native browser capabilities.

---

# ⚠️ Project Status

## 🚧 Work in Progress

This project is an evolving interface experiment rather than a static finished website.

The current version includes:
- Core interface structure
- Dynamic lighting engine
- Scroll-based HUD transitions
- Interactive audio controls
- Performance-focused animations

The project will continue expanding with:
- New interface systems
- Additional interaction mechanics
- Advanced visual effects
- Improved animation architecture
- Expanded world-building elements

Continuous updates and improvements are actively being pushed to the repository.

---

# 🚀 Core Features & Mechanics

## 🔹 Dynamic HUD Transition System
A scroll-triggered interface transformation system that gradually converts the standard page layout into a cyberpunk-inspired HUD environment.

### Includes
- Scroll position tracking via JavaScript
- Dynamic CSS root variable manipulation
- Smooth opacity transitions
- Grid overlays and scanline effects
- Immersive interface morphing

---

## 🔹 Custom Audio Controller
A fully custom-designed audio interface built without the default HTML audio controls.

### Features
- Interactive hover expansion
- Dynamic audio slider
- Minimal cyberpunk-inspired UI
- Smooth CSS transitions
- JavaScript-controlled playback system

---

## 🔹 Mouse Tracking Glow Engine
A real-time lighting system reacting to cursor movement across the interface.

### Technologies Used
- JavaScript `mousemove` event listeners
- CSS `radial-gradient`
- `mix-blend-mode: screen`
- Dynamic coordinate calculations

This system creates responsive ambient lighting effects that interact with page elements in real time.

---

## 🔹 Optimized Animation Architecture
Animations are designed with performance optimization as a priority.

### Includes
- Fade-in animations
- Slide transitions
- On-scroll activation
- GPU-friendly effects
- Reduced unnecessary DOM rendering

### Optimization Method
The project uses the **Intersection Observer API** to trigger animations only when elements become visible within the viewport.

---

# 🛠 Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Semantic page structure |
| CSS3 | Styling, animations, and visual effects |
| Vanilla JavaScript | Interaction logic and dynamic systems |
| Intersection Observer API | Performance-optimized animations |
| Native Browser APIs | Mouse tracking and UI interactions |
| Git & GitHub | Version control and project management |

---

# 📂 Project Structure

```text
/ (Root Directory)
│
├── index.html
│   ├── Semantic page structure
│   ├── HUD interface layer
│   └── Interactive content sections
│
├── style.css
│   ├── CSS variables
│   ├── Animation systems
│   ├── Cyberpunk visual effects
│   └── Responsive styling
│
├── script.js
│   ├── Scroll calculations
│   ├── Mouse tracking engine
│   ├── Audio controller logic
│   └── Dynamic UI interactions
│
└── assets/
    ├── hero-bg.jpg
    ├── cyber-frame.jpg
    ├── lofi-room.jpg
    └── ambient.mp3
