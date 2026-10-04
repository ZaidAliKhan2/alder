# Alder & Co.

A four-page accounting-firm portfolio concept. Plain HTML, CSS, and JavaScript; no production dependencies or build step.

## Preview

Run `python3 -m http.server 4173 --directory dist` from this directory, then visit http://localhost:4173.

## Edit

Edit `generate.py` for page content and shared markup, then run `python3 generate.py`. Styles and interactions live in `dist/style.css` and `dist/app.js` and are preserved by generation.

The consultation form validates inputs and demonstrates a confirmation state. It does not transmit or store personal information. The firm name and editorial copy are fictional concept content. Fraunces and DM Sans load from Google Fonts, with local system fallbacks.

Scroll motion uses CSS transforms with a single requestAnimationFrame handler, a desktop sticky sequence, a simplified mobile composition, and reduced-motion support.
