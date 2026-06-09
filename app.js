// === Countdown timer until 23:59:59 today ===
function updateCountdown() {
    const now = new Date();
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
    const t = endOfDay - now;
    if (t <= 0) { const e = document.getElementById('countdown-timer'); if (e) e.textContent = '00:00:00'; return; }
    const h = Math.floor(t / 3600000);
    const m = Math.floor((t % 3600000) / 60000);
    const s = Math.floor((t % 60000) / 1000);
    const fmt = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    const el = document.getElementById('countdown-timer');
    if (el) el.textContent = fmt;
}
document.addEventListener('DOMContentLoaded', () => { updateCountdown(); setInterval(updateCountdown, 1000); });

function updatePromoDate() {
    const t = new Date();
    const d = String(t.getDate()).padStart(2,'0');
    const m = String(t.getMonth() + 1).padStart(2,'0');
    const el = document.getElementById('promo-date');
    if (el) el.textContent = `${d}/${m}/${t.getFullYear()}`;
}
document.addEventListener('DOMContentLoaded', updatePromoDate);

// === FAQ accordion ===
document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', () => {
        const a = q.nextElementSibling;
        const open = a.classList.contains('active');
        document.querySelectorAll('.faq-answer').forEach(x => x.classList.remove('active'));
        document.querySelectorAll('.faq-question span').forEach(s => s.textContent = '+');
        if (!open) { a.classList.add('active'); q.querySelector('span').textContent = '-'; }
    });
});

// === Hero/benefits CTAs scroll to plans ===
const plans = document.getElementById('plans');
['cta-hero', 'cta-benefits'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', () => plans?.scrollIntoView({ behavior: 'smooth' }));
});

// === Testimonials carousel ===
let cur = 0;
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.carousel-dot');
const total = slides.length;
function show(n) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    cur = (n + total) % total;
    const c = document.getElementById('carousel-slides');
    if (c) c.style.transform = `translateX(-${cur * 100}%)`;
    if (slides[cur]) slides[cur].classList.add('active');
    if (dots[cur]) dots[cur].classList.add('active');
}
function next() { show(cur + 1); }
function prev() { show(cur - 1); }
const nextBtn = document.getElementById('carousel-next');
const prevBtn = document.getElementById('carousel-prev');
if (nextBtn) {
    nextBtn.addEventListener('click', next);
    prevBtn.addEventListener('click', prev);
    dots.forEach((d, i) => d.addEventListener('click', () => show(i)));
    setInterval(next, 6000);
    show(0);
}

// === Purchase notifications — caregiver names ===
const purchaseNotifications = [
    { name: "Lucía Hernández", location: "Ciudad de México, México" },
    { name: "Ana María Pérez", location: "Buenos Aires, Argentina" },
    { name: "Rosa López", location: "Bogotá, Colombia" },
    { name: "Carmen Ruiz", location: "Lima, Perú" },
    { name: "Beatriz Fernández", location: "Madrid, España" },
    { name: "Marisol Castro", location: "Santiago, Chile" },
    { name: "Patricia Méndez", location: "Quito, Ecuador" },
    { name: "Silvia Ramírez", location: "Guadalajara, México" },
    { name: "Mónica Vargas", location: "Córdoba, Argentina" },
    { name: "Gloria Salazar", location: "Medellín, Colombia" },
    { name: "Elena Quintero", location: "Arequipa, Perú" },
    { name: "Pilar Domínguez", location: "Barcelona, España" },
    { name: "Verónica Silva", location: "Valparaíso, Chile" },
    { name: "Luisa Mendoza", location: "Guayaquil, Ecuador" },
    { name: "Adriana Herrera", location: "Monterrey, México" },
    { name: "Cristina Delgado", location: "Rosario, Argentina" },
    { name: "Marta Vega", location: "Cali, Colombia" },
    { name: "Inés Paredes", location: "Trujillo, Perú" },
    { name: "Teresa Ortiz", location: "Caracas, Venezuela" },
    { name: "Roberto Sánchez", location: "Maracaibo, Venezuela" }
];
function createPurchaseNotification() {
    const p = purchaseNotifications[Math.floor(Math.random() * purchaseNotifications.length)];
    const minutesAgo = Math.floor(Math.random() * 30) + 1;
    const n = document.createElement('div');
    n.className = 'purchase-notification';
    n.innerHTML = `
        <div class="purchase-notification-header">
            ${p.name} acaba de empezar el Sistema para Hijos Cuidadores
        </div>
        <div class="purchase-notification-details">
            📍 ${p.location} - ⏰ Hace ${minutesAgo} minuto${minutesAgo > 1 ? 's' : ''}
        </div>
    `;
    const c = document.getElementById('purchase-notifications');
    c.appendChild(n);
    setTimeout(() => n.parentNode && n.parentNode.removeChild(n), 6000);
}
setTimeout(() => {
    createPurchaseNotification();
    setInterval(() => {
        const next = Math.random() * 7000 + 8000;
        setTimeout(createPurchaseNotification, next);
    }, 15000);
}, 3000);

// === Geo-IP pricing — anchored 3x higher than competitor ===
class PricingManager {
    constructor() {
        this.defaultPricing = {
            basic:   { oldPrice: 39, currentPrice: 3.99, currency: '$' },
            premium: { oldPrice: 99, currentPrice: 9.99, currency: '$' }
        };
        this.countryPricing = {
            'BR': { basic: { oldPrice: 199, currentPrice: 19.90, currency: 'R$' }, premium: { oldPrice: 497, currentPrice: 49.90, currency: 'R$' } },
            'AR': { basic: { oldPrice: 12000, currentPrice: 1290, currency: '$' }, premium: { oldPrice: 29900, currentPrice: 2990, currency: '$' } },
            'MX': { basic: { oldPrice: 799, currentPrice: 79, currency: '$' }, premium: { oldPrice: 1990, currentPrice: 199, currency: '$' } },
            'CO': { basic: { oldPrice: 179000, currentPrice: 16900, currency: '$' }, premium: { oldPrice: 449000, currentPrice: 44900, currency: '$' } },
            'PE': { basic: { oldPrice: 159, currentPrice: 15.90, currency: 'S/' }, premium: { oldPrice: 399, currentPrice: 39.90, currency: 'S/' } },
            'CL': { basic: { oldPrice: 35900, currentPrice: 3590, currency: '$' }, premium: { oldPrice: 89900, currentPrice: 8990, currency: '$' } },
            'EC': { basic: { oldPrice: 39, currentPrice: 3.99, currency: '$' }, premium: { oldPrice: 99, currentPrice: 9.99, currency: '$' } },
            'ES': { basic: { oldPrice: 35, currentPrice: 3.90, currency: '€' }, premium: { oldPrice: 89, currentPrice: 9.90, currency: '€' } },
            'PY': { basic: { oldPrice: 350000, currentPrice: 35000, currency: '₲' }, premium: { oldPrice: 790000, currentPrice: 89000, currency: '₲' } },
            'UY': { basic: { oldPrice: 1690, currentPrice: 169, currency: '$' }, premium: { oldPrice: 3990, currentPrice: 399, currency: '$' } }
        };
    }
    async detectUserLocation() {
        try { const r = await fetch('https://ipapi.co/json/'); const d = await r.json(); return d.country_code || 'US'; }
        catch { return 'US'; }
    }
    formatPrice(p, c) {
        const f = this.formatNumber(p);
        if (c === 'R$') return `R$ ${f}`;
        if (c === '€')  return `€ ${f}`;
        if (c === 'S/') return `S/ ${f}`;
        if (c === '₲')  return `₲ ${f}`;
        return `$ ${f}`;
    }
    formatNumber(n) {
        if (n >= 1000) return n.toLocaleString('es-ES', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
        if (n >= 10)   return n.toFixed(0);
        return n.toFixed(2);
    }
    updatePricesInDOM(p) {
        const bOld = document.querySelector('.plan-basic-new .old-price');
        const bCur = document.querySelector('.plan-basic-new .current-price');
        if (bOld) bOld.textContent = `De ${this.formatPrice(p.basic.oldPrice, p.basic.currency)}`;
        if (bCur) bCur.textContent = this.formatPrice(p.basic.currentPrice, p.basic.currency);
        const pOld = document.querySelector('.plan-premium-new .old-price');
        const pCur = document.querySelector('.plan-premium-new .current-price');
        if (pOld) pOld.textContent = `De ${this.formatPrice(p.premium.oldPrice, p.premium.currency)}`;
        if (pCur) pCur.textContent = this.formatPrice(p.premium.currentPrice, p.premium.currency);
    }
    async initializePricing() {
        try {
            const cc = await this.detectUserLocation();
            const p = this.countryPricing[cc] || this.defaultPricing;
            if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', () => this.updatePricesInDOM(p));
            else this.updatePricesInDOM(p);
        } catch { this.updatePricesInDOM(this.defaultPricing); }
    }
}
new PricingManager().initializePricing();
