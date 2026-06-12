# Seager's Website — Session Save (Jun 2026)

## Site Info
- **Live URL:** https://seagersstrawberrys.github.io/
- **GitHub Pages:** auto-deploys from `main` branch on push
- **GitHub org:** `seagersstrawberrys`, repo: `seagersstrawberrys.github.io`
- **Git PAT:** Already authenticated via `gh` CLI (PAT `ghp_nLtR5N5P6Jynw7GAzX8lz1hYVjMumS0BxWgS`)
- **Domain:** seagersstrawberrys.github.io (no custom domain set up)

## File Structure
```
seagers-website/
├── index.html          — Main page (static version, all sections)
├── admin.html          — Click-to-edit admin panel (contenteditable + Ctrl+S)
├── server.js           — Express server (port 3000, serves /api/content, /api/upload, etc.)
├── content.json        — Single source of truth for all text (admins edit this via API)
├── seagersinfo.md      — All researched family/business info (reference doc)
├── package.json        — Express + multer deps
├── css/
│   └── style.css       — 1100+ lines, full responsive design
├── js/
│   ├── script.js       — Client JS: modals, expandable cards, basket/order system, testimonials
│   └── content-loader.js — Fetches /api/content, populates DOM dynamically
├── uploads/            — Multer uploads dir
└── images/             — Static images
```

## What's Done

### Design
- Complete visual redesign: warm red/gold/cream Somerset aesthetic
- Dark hero with strawberry emoji decorative overlays
- Premium card effects: gradient borders, glass-morphism, smooth hover animations
- Responsive grid layouts for all sections
- Consistent button styling with hover/active states
- Smooth-scroll navigation

### Content Sections (on index.html)
1. **Hero** — Badge "Family-Run Since the 1940s", title, CTA buttons, dark background with strawberry motifs
2. **About** — The Seager family story (Margaret, Ted, Andrew, Chris, Lenny), two-column layout with image placeholder
3. **Timeline** — 6 milestones (1940s, 1960s, 1990s, 2020 podcast, 2024 BBC, 2020s Lenny) with "Read BBC Article" / "Listen" buttons
4. **Stats** — 6 stat cards (3 Generations, 29,000 plants, 125m polytunnels, 100+ trays, Bristol market, 1940s founded)
5. **Produce (expanded)** — 4 expandable cards:
   - Strawberries: "Read more" → 3 paragraphs + "How We Grow Them" modal button
   - Seasonal Fruit & Veg: "What's in season?" → long list + "About Our Market" button
   - Pumpkins: "More about pumpkins" → Halloween/jack-o-lantern details + "Pumpkin Season Details" modal button
   - Christmas Trees: "More about trees" → sizes, festive produce + "Christmas at Seager's" modal button
6. **Quote** — Chris Seagers quote with strawberry background
7. **Farm Info** — "Learn About Our Growing Process" button opens growing modal
8. **Strawberry Line** — History of the Cheddar Valley Railway, link to thestrawberryline.org.uk
9. **Seasonal Highlights** — 4-column grid (spring/summer/autumn/winter) showing what's available each season
10. **Press** — BBC News, BBC Radio Somerset, Draycott Diaries logos (clickable → new tab + modal)
11. **Hours** — Mon-Sun 08:00-17:00 table
12. **Location** — Wells Road, Draycott, BS27 3ST, phone, Google Maps directions
13. **Contact** — Visit, Call, Follow (Facebook) cards
14. **Footer** — Copyright + tagline

### Modals (script.js fallback + content.json)
| Modal Key | Title | External Link Added |
|-----------|-------|-------------------|
| `history` | The Full Seager Family Story | — |
| `growing` | How We Grow Our Strawberries | Strawberryfield Park Cheddar Strawberries ↗ |
| `market` | Bristol Daily Food Market | — |
| `bbc` | BBC News & BBC Radio Somerset | Read the Full BBC Article ↗ |
| `podcast` | Draycott Diaries Podcast | Listen to Episode 025 ↗ |
| `pumpkins` | Pumpkin Season at Seager's | — |
| `christmas` | Christmas at Seager's | — |

### Admin Panel (admin.html)
- Full site preview with contenteditable on all text blocks
- Ctrl+S / Save button saves to server
- Express endpoints: GET /api/content, POST /api/content (full save), POST /api/upload (images), DELETE /api/content/:section/:index

### Research (seagersinfo.md)
- Real family info: Margaret Seagers (started 1940s), Ted (WWII mechanic), Andrew (joined at 14), Chris (3rd gen), Lenny (Chris's son)
- Real business info: 29,000 plants, 125m polytunnels, 100 trays/day, Bristol market, Wells Road shop
- Real media: BBC News June 2024, BBC Radio Somerset, Draycott Diaries Ep 015 & 025
- Real external links: bbc.co.uk, draycottdiaries.com, thestrawberryline.org.uk, facebook.com/pages/Strawberry Farm Shop

## Git History
```
2e88dea — Redesign: refined red theme, real external links (BBC, podcast, Strawberry Line), seagersinfo.md
1d3837b — Add seasonal highlights section, expandable produce cards with pumpkins & Christmas trees modals (HEAD → main)
```

## How to Resume
```powershell
# Start server
cd C:\Users\len\Desktop\seagers-website
node server.js

# Open site in Firefox
& "C:\Users\len\Desktop\Firefox.exe" http://localhost:3000/

# Admin panel
& "C:\Users\len\Desktop\Firefox.exe" http://localhost:3000/admin.html

# Git commands
& "C:\Program Files\Git\cmd\git.exe" status
& "C:\Program Files\Git\cmd\git.exe" add -A
& "C:\Program Files\Git\cmd\git.exe" commit -m "message"
& "C:\Program Files\Git\cmd\git.exe" push

# Deployed site
& "C:\Users\len\Desktop\Firefox.exe" https://seagersstrawberrys.github.io/
```

## Next Steps (Google SEO — not started yet)
1. Go to https://search.google.com/search-console — add site, verify ownership, request indexing
2. Create sitemap.xml in repo root
3. Update page title to be more specific: "Seager's Strawberries & Fruit | Draycott, Somerset"
4. Get backlinks from Draycott Diaries, local Facebook pages, Strawberryfield Park
5. Register on Google Business Profile
6. Post seasonal updates regularly
