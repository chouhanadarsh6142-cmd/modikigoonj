# Modi Ji Team Ki Goonj

**A visual leadership archive exploring governance, public service, and institutional leadership in modern India.**

## Overview

This is a premium multi-page web archive that presents detailed profiles and thematic analysis of five prominent Indian political leaders:

- **Narendra Modi** - The architect of sovereign resurgence and macro-structural transformation
- **Amit Shah** - The master strategist of internal security and institutional consolidation  
- **Shivraj Singh Chouhan** - Epistemic legacy and agrarian metamorphosis
- **Yogi Adityanath** - The synthesis of ascetic discipline and executive supremacy
- **Devendra Fadnavis** - The cerebral technocrat of Maharashtra

## Features

✨ **Multi-page architecture**
- Individual leader profile pages with advanced political analysis
- Strategic insights page examining three core leadership lenses
- Interactive timeline showing leadership eras from 1990s to present
- Responsive, mobile-optimized design

🎨 **Design & Accessibility**
- Modern, premium visual hierarchy with card-based layouts
- Professional typography (Manrope + Playfair Display)
- High-quality official politician portraits from Wikimedia Commons
- Dark mode support with theme toggle
- Full keyboard navigation and ARIA accessibility attributes
- Smooth scroll animations and visual feedback

📖 **Content**
- Elite-level English political analysis and commentary
- Comprehensive governance framework analysis
- Historical context and civilizational perspective
- Thematic exploration of state capacity, public purpose, and execution

🔧 **Code Quality**
- Clean, semantic HTML5 structure
- CSS external stylesheet (no inline styles)
- Vanilla JavaScript for progressive enhancement
- Image fallback system for reliability
- SEO-optimized metadata

## Pages

| Page | Purpose |
|------|---------|
| `index.html` | Landing page with leader cards and archive overview |
| `modi.html` | Narendra Modi's profile and political philosophy |
| `shah.html` | Amit Shah's strategic and administrative record |
| `shivraj.html` | Shivraj Singh Chouhan's governance model |
| `yogi.html` | Yogi Adityanath's discipline and development approach |
| `devendra.html` | Devendra Fadnavis's technocratic leadership |
| `insights.html` | Thematic analysis of leadership patterns |
| `timeline.html` | Interactive chronological journey (1990–2024+) |

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Grid, flexbox, modern CSS features
- **JavaScript (Vanilla)** - DOM manipulation, animations, interactivity
- **Fonts** - Google Fonts (Manrope, Playfair Display)
- **Images** - Wikimedia Commons (official politician portraits)

## Getting Started

### View Locally

```bash
# Navigate to project directory
cd modikigoonj

# Start a local server (Python 3)
python -m http.server 8000

# Open in browser
# http://localhost:8000
```

### Deploy to GitHub Pages

1. Create a new GitHub repository named `modikigoonj`
2. Push this code to the repository:
   ```bash
   git remote add origin https://github.com/YOUR-USERNAME/modikigoonj.git
   git branch -M main
   git push -u origin main
   ```
3. Enable GitHub Pages:
   - Go to repository **Settings** → **Pages**
   - Select "Deploy from a branch"
   - Choose branch: `main` → Save
4. Your site will be live at: `https://YOUR-USERNAME.github.io/modikigoonj`

### Alternative Hosting

This is a static HTML/CSS/JS site and can be deployed to:
- **Netlify** (drag & drop or connect Git)
- **Vercel** (automated deployments from GitHub)
- **Traditional web server** (copy files via FTP/SSH)
- **Firebase Hosting** (simple CLI deployment)

## File Structure

```
modikigoonj/
├── index.html              # Main landing page
├── modi.html              # Leader profile
├── shah.html              # Leader profile
├── shivraj.html           # Leader profile
├── yogi.html              # Leader profile
├── devendra.html          # Leader profile
├── insights.html          # Thematic analysis
├── timeline.html          # Interactive timeline
├── style.css              # Master stylesheet
├── script.js              # Client-side interactivity
├── README.md              # This file
└── .gitignore             # Git exclusions
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Update Colors

Edit `:root` variables in `style.css`:
```css
--ink: #132238;           /* Primary text */
--saffron: #e88318;       /* Accent color (BJP orange) */
--green: #18885a;         /* Secondary accent */
```

### Add New Content

1. Create new HTML file (e.g., `newleader.html`)
2. Use existing profile page as template
3. Update navigation in `script.js` (`navItems` array)
4. Update links across all pages

## Performance

- **Zero dependencies** - No frameworks or libraries needed
- **Fast loading** - Optimized image sizes, minimal CSS/JS
- **Accessibility** - WCAG 2.1 compliant
- **SEO ready** - Semantic HTML, proper metadata

## Author

**Adarsh Chouhan**  
A visual leadership archive exploring modern Indian governance and public service.

## License

© 2024+ Modi Ji Team Ki Goonj. Created by Adarsh Chouhan.  
This is an informational and educational resource.

---

**Last Updated:** September 2024  
**Status:** Ready for production deployment
