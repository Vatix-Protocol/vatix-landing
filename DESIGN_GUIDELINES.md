# Vatix Protocol Design & UI Guidelines

Welcome! We highly encourage contributions to improve the landing page UI and overall visual experience. 

This document outlines the preferred UI direction, existing theme requirements, and branding guidelines to help you get started.

## 🎨 Branding & Theme Requirements

Vatix Protocol is a modern, transparent prediction market built on Stellar. Our brand aesthetic is **space-themed, futuristic, clean, and crypto-native**. We default to a deep dark mode with neon accents.

### Color Palette

Our colors are strictly defined in `tailwind.config.js`. Please stick to these tokens rather than using hardcoded hex values:

- **Primary Backgrounds:** Deep space blues
  - `bg-primary-900` (`#0a0e27`) - Main background
  - `bg-primary-800` (`#121742`) - Card backgrounds
  - `bg-primary-700` (`#1a1f5c`) - Hover states
- **Accents:** Neon colors for CTAs and highlights
  - `text-accent-cyan` (`#00d4ff`)
  - `text-accent-green` (`#00ff88`)
- **Stellar Brand:** Used for blockchain-specific mentions and gradients
  - `text-stellar-blue` (`#7b16ff`)
  - `text-stellar-purple` (`#5c2dd5`)

### Typography

- **Primary Font (Sans):** `Inter` - Used for all general text, headings, and paragraphs.
- **Secondary Font (Mono):** `JetBrains Mono` - Used for code snippets, addresses, or numerical data to give a technical feel.

## ✨ Preferred UI Direction

When contributing to the UI, please keep the following design principles in mind:

1. **Glassmorphism:** Use translucent backgrounds with backdrop blurs for cards and floating elements (e.g., `bg-primary-800/50 backdrop-blur-sm`).
2. **Gradients:** Use subtle gradient meshes for backgrounds and vibrant gradients for primary buttons (e.g., `bg-gradient-to-r from-accent-cyan to-stellar-purple`).
3. **Micro-animations:** We use `framer-motion` for entrance animations and hover effects. Keep animations smooth, subtle, and quick (usually `duration: 0.6` or less). Avoid excessive bouncing or disruptive layout shifts.
4. **Borders & Glows:** Use subtle borders (`border-primary-700`) to define edges on dark backgrounds. Use drop shadows or glow effects sparingly for emphasis.

## 🛠️ How to Contribute to the UI

1. **Keep it modular:** If you build a new UI element that can be reused, place it in `src/components/ui/`.
2. **Responsive Design:** Ensure all changes look great on mobile (`sm:`), tablet (`md:`), and desktop (`lg:`).
3. **Tailwind First:** Use standard Tailwind utility classes. Only add custom CSS to `index.css` if absolutely necessary for complex animations or pseudo-elements.

We look forward to your UI improvements! Feel free to open a PR with your enhancements.
