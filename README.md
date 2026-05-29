# The Silent Static — Official Website

Raw, gritty rock website for The Silent Static.

**Live site:** https://www.thesilentstatic.com (planned)

## Current Status

- Static HTML/CSS/JS site (no build step)
- Designed with a raw, high-energy rock/punk aesthetic
- Focused on driving streams to Spotify, Apple Music, YouTube, etc.

## Local Development

```bash
# Open directly
start index.html

# Recommended: Live Server in VS Code (auto-reload)
```

Or use any static server:

```bash
npx serve .
# or
python -m http.server 8000
```

## Project Structure

```
thesilentstatic/
├── index.html
├── styles.css
├── script.js
├── README.md
├── .gitignore
└── assets/
    ├── logo.png              # Main static logo (new design)
    ├── logo-animated.gif     # Animated hero logo (currently 4MB — needs optimization)
    ├── Animated logo.mp4     # Alternative video version of logo
    └── Header style.jpg      # Facebook header reference (not used on site)
```

## Deployment Options

- **GitHub Pages** (free with custom domain)
- **Netlify** (drag & drop or Git)
- **Vercel**
- Any web host

### Custom Domain (thesilentstatic.com)

After deploying, point your domain's A/CNAME records at the hosting provider and enable HTTPS.

## Next Steps / Roadmap

- [ ] Add real streaming links (Spotify, Apple Music, YouTube Music, Bandcamp, etc.)
- [ ] Add actual release artwork and photos
- [ ] Embed music players (Spotify embed, YouTube, or custom audio)
- [ ] Add upcoming shows / tour dates
- [ ] Mailing list signup (Mailchimp, ConvertKit, or Buttondown)
- [ ] Full discography section
- [ ] Video / visualizer section
- [ ] SEO + Open Graph tags for sharing

## Branding Notes

- **Vibe:** Raw, gritty rock / punk energy
- **Logo:** Located in `/assets/logo.jpg`
- **Tone:** Direct, honest, unpolished where it counts

---

Built for The Silent Static.