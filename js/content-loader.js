(async function() {
  try {
    const res = await fetch('/api/content');
    const c = await res.json();

    const $ = (sel, parent) => (parent || document).querySelector(sel);
    const $$ = (sel, parent) => (parent || document).querySelectorAll(sel);
    const html = (sel, val) => { const el = $(sel); if (el && val) el.innerHTML = val; };
    const txt = (sel, val) => { const el = $(sel); if (el && val) el.textContent = val; };

    // SEO
    if (c.seo) {
      document.title = c.seo.title || document.title;
      const meta = document.querySelector('meta[name="description"]');
      if (meta && c.seo.description) meta.content = c.seo.description;
    }

    // Hero
    if (c.hero) {
      txt('.hero-badge', c.hero.badge);
      html('.hero h1', c.hero.heading);
      html('.hero-content p', c.hero.subtext);
      html('.hero-content .btn', c.hero.btn1);
      html('.hero-content .btn-outline', c.hero.btn2);
    }

    // About
    if (c.about) {
      html('#about h2', c.about.heading);
      html('#about .section-sub', c.about.subtitle);
      const aboutText = $('#about .about-text');
      if (aboutText && c.about.paragraphs) {
        const existing = aboutText.querySelectorAll('p');
        c.about.paragraphs.forEach((p, i) => { if (existing[i]) existing[i].innerHTML = p; });
      }
      const abtn = $('#about .about-text .btn');
      if (abtn && c.about.btn) abtn.innerHTML = c.about.btn;
    }

    // Produce cards
    if (c.produce) {
      const cards = $$('.produce-card');
      c.produce.forEach((p, i) => {
        if (cards[i]) {
          const h3 = cards[i].querySelector('h3');
          const desc = cards[i].querySelector('p');
          const btn = cards[i].querySelector('.btn');
          if (h3) h3.textContent = p.heading;
          if (desc) desc.textContent = p.description;
          if (btn && p.btn) btn.innerHTML = p.btn;
        }
      });
    }

    // Quote
    if (c.quote) {
      html('.quote-section blockquote p', c.quote.text);
      html('.quote-section cite', c.quote.cite);
    }

    // Timeline
    if (c.timeline) {
      const timeline = $('.timeline');
      if (timeline) {
        timeline.innerHTML = c.timeline.map(t => `
          <div class="timeline-item">
            <div class="timeline-year">${t.year}</div>
            <div class="timeline-content">
              <h3>${t.heading}</h3>
              <p>${t.text}</p>
            </div>
          </div>
        `).join('');
      }
    }

    // Stats
    if (c.stats) {
      const statsGrid = $('.farm-stats');
      if (statsGrid) {
        statsGrid.innerHTML = c.stats.map(s => `
          <div class="stat" data-modal="growing">
            <span class="stat-number">${s.number}</span>
            <span class="stat-label">${s.label}</span>
          </div>
        `).join('');
      }
    }

    // Farm info text
    if (c.farmInfo) {
      html('.farm-info-text', c.farmInfo);
    }

    // Strawberry Line
    if (c.strawberryLine) {
      html('.strawbs-line h2', c.strawberryLine.heading || 'The Strawberry Line');
      const strawbText = $('.strawbs-text');
      if (strawbText && c.strawberryLine.paragraphs) {
        strawbText.innerHTML = c.strawberryLine.paragraphs.map(p => `<p>${p}</p>`).join('');
      }
    }

    // Opening hours
    if (c.hours && c.hours.days) {
      const table = $('.hours-table');
      if (table) {
        table.innerHTML = c.hours.days.map(d => `<tr><td>${d.day}</td><td>${d.hours}</td></tr>`).join('');
      }
    }

    // Location
    if (c.location) {
      const addr = $('.location-card address');
      if (addr) {
        addr.innerHTML = `<strong>${c.location.name}</strong><br>${c.location.address}<br>${c.location.area}<br>${c.location.postcode}`;
      }
      const phoneLink = $('.location-card a[href^="tel"]');
      if (phoneLink && c.location.phone) {
        phoneLink.href = 'tel:' + c.location.phone.replace(/\s/g, '');
        phoneLink.textContent = c.location.phone;
      }
      const locNote = $('.location-note');
      if (locNote && c.location.note) locNote.textContent = c.location.note;
    }

    // Footer
    if (c.footer) html('.footer-inner p:first-child', c.footer);
    if (c.footerNote) html('.footer-note', c.footerNote);

    // Products for the shop
    if (c.products) {
      window.__seagersProducts = c.products;
    }

    // Modal content
    if (c.modals) {
      window.__seagersModals = c.modals;
    }

  } catch(e) {
    console.log('Content loader: using static content');
  }
})();
