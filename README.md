# 🌌 RAUDRA COSMOS Website

A stunning, dark-themed single-page website for Raudra Cosmos gaming studio.

**Tagline:** One Cosmos. All Pantheons. The Mythical Gods Card Multiplayer RPG Game

**Description:** A strategic card RPG featuring 250+ deities from 7 legendary pantheons — Hindu, Taoist, Shinto, Egyptian, Norse, Olympians, and Babylonian..

## ✨ Features

### Visual Effects
- **Interactive Star Field**: Multi-layered canvas animation with mouse parallax
- **Shooting Stars**: Random meteor animations across the sky
- **Nebula Clouds**: Subtle animated gradient overlays
- **Custom Cursor**: Animated cursor with hover effects

### Sections
1. **Hero** - Dramatic title with glowing typography and CTA buttons
2. **About** - "The Vision" section covering all 7 pantheons (Hindu, Taoist, Shinto, Egyptian, Norse, Olympians, Babylonian)
3. **Game Features** - Interactive grid showcasing implemented and planned features
4. **Devlogs** - CSS Grid layout for development updates
5. **The Pantheons** - Horizontal character slider with multiple deity cards
6. **Newsletter** - Email subscription form
7. **Footer** - Links and copyright

### Responsive Design
- Desktop: Fixed vertical social sidebar (left side)
- Mobile: Fixed horizontal social bar (bottom)
- Tablet-optimized layouts
- Touch-friendly interactions

## 🚀 Quick Start

### Option 1: Direct File Open
1. Simply double-click `index.html` to open in your browser
2. Or right-click → "Open with" → Choose your browser

### Option 2: Live Server (Recommended)
Using VS Code:
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

Using Python:
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then visit: `http://localhost:8000`

Using Node.js:
```bash
npx serve
```

## 📁 Project Structure

```
RaudraCosmosWebsite/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # All styles (animations, responsive, etc.)
├── js/
│   └── main.js            # All JavaScript (starfield, interactions)
├── IMPLEMENTATION_PLAN.md # Detailed design documentation
└── README.md             # This file
```

## 🔗 Adding Social Media Links

Find the social icons in `index.html` around **line 85-110** and replace the `href="#"` with your actual links:

```html
<!-- Discord -->
<a href="YOUR_DISCORD_LINK" class="social-icon" data-tooltip="Discord">

<!-- X/Twitter -->
<a href="YOUR_TWITTER_LINK" class="social-icon" data-tooltip="X (Twitter)">

<!-- YouTube -->
<a href="YOUR_YOUTUBE_LINK" class="social-icon" data-tooltip="YouTube">

<!-- LinkedIn -->
<a href="YOUR_LINKEDIN_LINK" class="social-icon" data-tooltip="LinkedIn">

<!-- Instagram -->
<a href="YOUR_INSTAGRAM_LINK" class="social-icon" data-tooltip="Instagram">

<!-- Facebook -->
<a href="YOUR_FACEBOOK_LINK" class="social-icon" data-tooltip="Facebook">
```

Also update the mobile social bar around **line 113-135** with the same links.

## 🎨 Customization

### Colors
Edit CSS variables in `css/style.css` (lines 10-50):

```css
:root {
    --fierce-orange: #FF4E50;      /* Your brand color */
    --cosmic-purple: #6B5B95;      /* Secondary color */
    --deep-black: #050505;         /* Background */
}
```

### Typography
Fonts are loaded from Google Fonts. To change:
- **Orbitron** (headings): Currently used for main title
- **Rajdhani** (subheadings): Used for secondary text
- **Roboto** (body): Used for paragraphs

### Star Field
Adjust in `js/main.js`:
- **Star count**: Lines 138-140 (`[200, 100, 50]`)
- **Parallax strength**: Line 252 (adjust `0.05` factor)
- **Shooting star frequency**: Line 296 (adjust `0.002` probability)

## 📱 Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## ⚡ Performance

- Canvas animation optimized for 60fps
- Lazy loading for scroll reveal
- Reduced motion support for accessibility
- Efficient CSS animations using transforms

## 🐛 Troubleshooting

### Stars not appearing?
- Check browser console for errors
- Ensure JavaScript is enabled
- Try hard refresh (Ctrl+Shift+R)

### Layout broken?
- Clear browser cache
- Check if all files are in correct folders
- Verify file paths in HTML

### Social icons not showing?
- Ensure Font Awesome CDN is accessible
- Check internet connection (icons load from CDN)

## 📝 To-Do / Future Enhancements

- [ ] Add actual devlog content and images
- [ ] Add real character artwork
- [ ] Implement Google Analytics
- [ ] Add SEO meta tags
- [ ] Create pre-production version for beta access
- [ ] Add privacy policy and terms pages

## 📄 License

Copyright © 2025 Raudra Cosmos. All rights reserved.

---

**Crafted with 🔥 in Bengaluru, India**
