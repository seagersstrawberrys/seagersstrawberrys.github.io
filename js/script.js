(function() {
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    if (hamburger && nav) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            nav.classList.toggle('open');
        });

        document.querySelectorAll('.nav-list a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('open');
            });
        });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Expandable cards
    document.querySelectorAll('.expandable').forEach(card => {
        const toggle = card.querySelector('.expand-toggle');
        const detail = card.querySelector('.produce-detail');
        if (toggle && detail) {
            toggle.addEventListener('click', (e) => {
                e.stopPropagation();
                const isOpen = detail.classList.toggle('open');
                toggle.innerHTML = (isOpen ? 'Show less ' : 'Read more ') + '<span class="expand-arrow ' + (isOpen ? 'up' : '') + '">&#9660;</span>';
            });
        }
    });

    // Modal
    const overlay = document.getElementById('modalOverlay');
    const modalContent = document.getElementById('modalContent');
    const modalClose = document.getElementById('modalClose');

    const modalData = window.__seagersModals || {
        history: {
            title: 'The Full Seager Family Story',
            body: `<p>Seager's Fruit & Veg began in the <strong>1940s</strong>, during the Second World War. While <strong>Ted Seagers</strong> served as a mechanic in the armed forces, his wife <strong>Margaret Seagers</strong> wanted something to keep herself busy. She started selling strawberries from a simple roadside stall on <strong>Wells Road, Draycott</strong> — right where the farm shop still stands today.</p>
            <p>What began as a small wartime venture grew into something far bigger. Margaret's son <strong>Andrew Seagers</strong> left school at just 14 years old to help expand the business, working alongside his mother to increase production and establish the family name in the Cheddar Valley.</p>
            <p>Today, the third generation — <strong>Chris Seagers</strong> — runs the farm. Chris joined after leaving school, just as his father did, and has modernised the business while keeping the same core values: quality, freshness, and community. Chris's son <strong>Lenny</strong> is now helping out too, making it four generations of Seagers growing strawberries on Wells Road.</p>
            <p>Chris says: <em>"As a family business we pride ourselves on being small and customer friendly."</em></p>
            <p>The farm now has <strong>15,000 plants in greenhouses</strong> and <strong>14,000 more across polytunnels</strong>, with 125 metres of polytunnels in total. Through the peak season in May and June, they pick around <strong>100 trays of strawberries a day</strong>, all sent out the same day.</p>
            <p>Their strawberries are famous for being handled <strong>only once</strong> — when they are picked — making them some of the freshest you'll find anywhere in Somerset.</p>
            <p>The business sells from its farm shop on Wells Road, at <strong>Bristol's daily food market</strong>, and to local shops and restaurants across the region.</p>
            <em>"Granddad was serving in the war as a mechanic and my grandma wanted something to do so she started selling her strawberries in Wells Road, where our shop is now. The season was a lot shorter back then and it was not her full-time job, but she enjoyed it." — Chris Seagers</em>`
        },
        growing: {
            title: 'How We Grow Our Strawberries',
            body: `<p>The Seagers growing operation runs <strong>year-round</strong> to ensure a constant flow of high-quality strawberries. While June is considered the main season, the business works across all seasons to stay productive.</p>
            <h3>The Numbers</h3>
            <p>Around <strong>15,000 plants in the greenhouse</strong> provide an early start to the season, while another <strong>14,000 plants across polytunnels and open tunnels</strong> extend the harvest well into summer and beyond. In total, the farm has <strong>125 metres of polytunnels</strong> filled with strawberry plants.</p>
            <h3>Daily Picking</h3>
            <p>Through May and June, the team aims to pick around <strong>100 trays a day</strong>. Every single strawberry is <strong>hand-picked</strong> and handled only once — at the moment of picking. This minimal handling is what keeps the fruit so fresh and undamaged.</p>
            <h3>Pollination</h3>
            <p>The farm uses <strong>bees for natural pollination</strong> in their polytunnels, as Andrew and Chris discussed on the Draycott Diaries podcast. This traditional approach helps produce the best-quality fruit.</p>
            <h3>Weather Impact</h3>
            <p>In 2024, the wettest winter on record in Somerset caused strawberries to ripen later than usual. But Chris noted this could actually improve the taste: <em>"due to the fruit being left to naturally ripen this year, I was expecting our strawberries to be even more flavoursome than usual."</em></p>
            <em>"We have around 15,000 plants in our green house and another 14,000 across our poly houses and open tunnels. We are considered quite small for the industry but we try to keep our business local." — Chris Seagers</em>`
        },
        market: {
            title: 'Bristol Daily Food Market',
            body: `<p>In addition to the farm shop on Wells Road, Seager's strawberries are sold at <strong>Bristol's daily food market</strong> — bringing the taste of the Cheddar Valley to the city.</p>
            <p>This allows city-dwellers and visitors to Bristol to enjoy the same freshly picked, single-handled strawberries that customers have been buying direct from the farm for generations.</p>
            <p>The farm also supplies <strong>local shops and restaurants</strong> across the Cheddar Valley and Mendip area.</p>`
        },
        bbc: {
            title: 'BBC News & BBC Radio Somerset',
            body: `<p>In <strong>June 2024</strong>, Seager's was featured in a <strong>BBC News</strong> article titled <em>"Delayed strawberries may be 'well worth the wait'"</em>, which covered how the record-breaking wet winter in Somerset affected strawberry growing.</p>
            <p>Chris Seager was quoted explaining that while the fruit took longer to ripen, the slower growing process meant they would be even more <strong>"flavoursome"</strong> than usual — larger, juicier, and better-tasting.</p>
            <p>The same month, Chris appeared on <strong>BBC Radio Somerset</strong> in a 3-minute segment called <em>"Fruit picking: 'no one wants to do it'"</em>, discussing the industry's struggle to find fruit pickers after Brexit. He explained that Polish workers who had been coming for 18-20 years could no longer be replaced, leaving him with spare fields he couldn't plant.</p>
            <p>Chris said: <em>"No one wants to do it because it's hard work. We used to have lots of Polish people who had been coming for 18 to 20 years, but now we can't get any new people to replace them because of Brexit."</em></p>
            <p>The BBC coverage brought national attention to the challenges facing small British fruit growers in the post-Brexit era.</p>`
        },
        podcast: {
            title: 'Draycott Diaries Podcast',
            body: `<p>Seager's appeared on the <strong>Draycott Diaries</strong> village podcast in two episodes:</p>
            <p><strong>Episode 015 — "Draycott Strawberries and Cream" (March 2020):</strong> Host Tiggi chatted with father-and-son duo <strong>Andrew and Chris Seager</strong> about the ups and downs of farming life, the use of bees for pollination, their strawberries, and what community means to them. The episode also revealed a surprising fact — a <strong>seal once visited the village</strong>!</p>
            <p><strong>Episode 025 — "Draycott Strawberries Re-visited" (June 2020):</strong> Tiggi caught up with Chris during the height of the pandemic. They discussed the challenges of Brexit, a wet February followed by record-hot April and May, and the massive restrictions enforced by COVID-19 — and how the farm was coping.</p>
            <p>Both episodes are available at <a href="https://www.draycottdiaries.com" target="_blank" rel="noopener" style="color:#b71c1c;text-decoration:underline">draycottdiaries.com</a>.</p>`
        }
    };

    function openModal(key) {
        const data = modalData[key];
        if (!data) return;
        modalContent.innerHTML = '<h2>' + data.title + '</h2>' + data.body;
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    if (overlay) {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeModal();
        });
    }

    document.querySelectorAll('[data-modal]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            openModal(el.getAttribute('data-modal'));
        });
    });

    const products = window.__seagersProducts || [
        { id: 's1', name: 'Strawberries',       cat: 'Strawberries', icon: '🍓', price: 3.00, feat: true },
        { id: 's2', name: 'Strawbs x2',         cat: 'Strawberries', icon: '🍓', price: 6.00, feat: true },
        { id: 's4', name: 'Strawbs x4',         cat: 'Strawberries', icon: '🍓', price: 10.00, feat: true },
        { id: 'skg', name: 'Strawbs 1kg tray',  cat: 'Strawberries', icon: '🍓', price: 10.00, feat: true },
        { id: 'rasp', name: 'Raspberries',      cat: 'Berries', icon: '🍇', price: 3.50 },
        { id: 'blue', name: 'Blueberries',      cat: 'Berries', icon: '🫐', price: 3.50 },
        { id: 'blkb', name: 'Blackberries',     cat: 'Berries', icon: '🍇', price: 3.00 },
        { id: 'cher', name: 'Cherries',         cat: 'Berries', icon: '🍒', price: 4.00 },
        { id: 'app',  name: 'Apples',           cat: 'Fruit', icon: '🍎', price: 2.50 },
        { id: 'pear', name: 'Pears',            cat: 'Fruit', icon: '🍐', price: 2.50 },
        { id: 'plum', name: 'Plums',            cat: 'Fruit', icon: '🫐', price: 3.00 },
        { id: 'rhub', name: 'Rhubarb',          cat: 'Fruit', icon: '🥬', price: 2.00 },
        { id: 'pot',  name: 'Potatoes',         cat: 'Veg', icon: '🥔', price: 1.50 },
        { id: 'car',  name: 'Carrots',          cat: 'Veg', icon: '🥕', price: 1.20 },
        { id: 'on',   name: 'Onions',           cat: 'Veg', icon: '🧅', price: 1.50 },
        { id: 'cab',  name: 'Cabbage',          cat: 'Veg', icon: '🥬', price: 1.50 },
        { id: 'cau',  name: 'Cauliflower',      cat: 'Veg', icon: '🥦', price: 2.00 },
        { id: 'bro',  name: 'Broccoli',         cat: 'Veg', icon: '🥦', price: 2.00 },
        { id: 'cour', name: 'Courgettes',       cat: 'Veg', icon: '🥒', price: 2.50 },
        { id: 'tom',  name: 'Tomatoes',         cat: 'Veg', icon: '🍅', price: 3.50 },
        { id: 'cuc',  name: 'Cucumber',         cat: 'Veg', icon: '🥒', price: 1.50 },
        { id: 'let',  name: 'Lettuce',          cat: 'Veg', icon: '🥬', price: 1.20 },
        { id: 'bean', name: 'Runner Beans',     cat: 'Veg', icon: '🫘', price: 3.00 },
        { id: 'peas', name: 'Peas',             cat: 'Veg', icon: '🫛', price: 3.00 },
        { id: 'beet', name: 'Beetroot',         cat: 'Veg', icon: '🫘', price: 2.00 },
        { id: 'pump', name: 'Pumpkin',          cat: 'Seasonal', icon: '🎃', price: 4.00 },
        { id: 'xts',  name: 'Xmas Tree (sm)',   cat: 'Seasonal', icon: '🎄', price: 20.00 },
        { id: 'xtl',  name: 'Xmas Tree (lg)',   cat: 'Seasonal', icon: '🎄', price: 35.00 },
    ];

    const grid = document.getElementById('productsGrid');
    const bItems = document.getElementById('basketItems');
    const bTotal = document.querySelector('.total-amount');
    const orderBtn = document.getElementById('orderBtn');
    const oWrapper = document.getElementById('orderFormWrapper');
    const oForm = document.getElementById('orderForm');
    const oConfirm = document.getElementById('orderConfirmation');
    const newBtn = document.getElementById('newOrderBtn');
    const oSummary = document.getElementById('orderSummary');

    let basket = {};
    let qty = {};

    function renderGrid() {
        if (!grid) return;
        grid.innerHTML = products.map(p => `
            <div class="product-card${p.feat ? ' featured' : ''}">
                ${p.feat ? '<div class="p-badge">Best Seller</div>' : ''}
                <div class="p-icon">${p.icon}</div>
                <div class="p-cat">${p.cat}</div>
                <div class="p-name">${p.name}</div>
                <div class="p-price">&pound;${p.price.toFixed(2)}</div>
                <div class="p-controls" data-id="${p.id}">
                    <button class="qty-btn dec">&minus;</button>
                    <span class="qty-dsp">0</span>
                    <button class="qty-btn inc">+</button>
                    <button class="add-btn">Add</button>
                </div>
            </div>
        `).join('');

        grid.querySelectorAll('.p-controls').forEach(c => {
            const id = c.dataset.id;
            const dec = c.querySelector('.dec');
            const inc = c.querySelector('.inc');
            const dsp = c.querySelector('.qty-dsp');
            const add = c.querySelector('.add-btn');
            if (!qty[id]) qty[id] = 0;
            dec.onclick = () => { if (qty[id] > 0) { qty[id]--; dsp.textContent = qty[id]; } };
            inc.onclick = () => { qty[id]++; dsp.textContent = qty[id]; };
            add.onclick = () => {
                if (qty[id] > 0) {
                    basket[id] = (basket[id] || 0) + qty[id];
                    qty[id] = 0; dsp.textContent = 0;
                    renderBasket();
                }
            };
        });
    }

    function renderBasket() {
        if (!bItems) return;
        const entries = Object.entries(basket).filter(([_, v]) => v > 0);
        if (!entries.length) {
            bItems.innerHTML = '<p class="basket-empty">Your basket is empty</p>';
            bTotal.textContent = '£0.00';
            orderBtn.disabled = true;
            return;
        }
        let total = 0;
        bItems.innerHTML = entries.map(([id, v]) => {
            const p = products.find(x => x.id === id);
            if (!p) return '';
            total += p.price * v;
            return `<div class="b-item">
                <div><div class="b-item-name">${p.name}</div><div class="b-item-qty">Qty: ${v}</div></div>
                <div style="display:flex;align-items:center;gap:6px">
                    <span class="b-item-price">&pound;${(p.price * v).toFixed(2)}</span>
                    <button class="b-item-del" data-id="${id}">&times;</button>
                </div>
            </div>`;
        }).join('');
        bTotal.textContent = '£' + total.toFixed(2);
        orderBtn.disabled = false;
        bItems.querySelectorAll('.b-item-del').forEach(b => b.onclick = () => { delete basket[b.dataset.id]; renderBasket(); });
    }

    if (orderBtn) orderBtn.onclick = () => { oWrapper.style.display = 'block'; oWrapper.scrollIntoView({behavior:'smooth',block:'start'}); updateSum(); };
    if (newBtn) newBtn.onclick = () => { basket = {}; oForm.reset(); oForm.style.display = 'block'; oConfirm.style.display = 'none'; oWrapper.style.display = 'none'; renderBasket(); renderGrid(); };

    function updateSum() {
        if (!oSummary) return;
        const entries = Object.entries(basket).filter(([_, v]) => v > 0);
        if (!entries.length) { oSummary.innerHTML = ''; return; }
        let h = '<strong>Your order:</strong><br>', total = 0;
        entries.forEach(([id, v]) => {
            const p = products.find(x => x.id === id);
            if (!p) return;
            h += `${p.name} x ${v} = &pound;${(p.price * v).toFixed(2)}<br>`;
            total += p.price * v;
        });
        h += `<br><strong>Total: &pound;${total.toFixed(2)}</strong><br><br><em>Collection from farm shop, Wells Road</em>`;
        oSummary.innerHTML = h;
    }

    if (oForm) oForm.onsubmit = (e) => {
        e.preventDefault();
        oForm.style.display = 'none';
        oSummary.style.display = 'none';
        oConfirm.style.display = 'block';
        oConfirm.scrollIntoView({behavior:'smooth'});
    };

    const dIn = document.getElementById('custDate');
    if (dIn) {
        const t = new Date(); t.setDate(t.getDate() + 1);
        dIn.value = t.toISOString().split('T')[0];
        dIn.min = t.toISOString().split('T')[0];
    }

    renderGrid();
    renderBasket();

})();
