# Components Inventory

## 1. Top urgency banner — `.top-urgency-banner`

Sticky no topo (z-index 1000). Conteúdo: countdown HH:MM:SS.

```css
background: #dc2626;
color: #fff;
padding: 0.75rem 1rem;
font-weight: 600;
font-size: 0.9rem (mobile 0.8rem);
position: sticky; top: 0;
```

Texto: `¡Último día con precio especial! Termina en: 09:51:04`

## 2. Hero — `#hero`

- Bg: `#f8fafc`. Padding 3rem 0.
- H1 centralizado, max-width 900px, `font-size: 3.2rem; font-weight: 700; color: #1a202c`.
- `.subtitle`: 1.25rem, color `#4a5568`, max-width 600px.
- Imagem (hero-mockup.png) com class `content-image`: `box-shadow: 0 4px 6px rgba(0,0,0,.1); border-radius: 0.5rem`.
- CTA principal `.btn.btn-primary`.

### Rating block
```html
<div class="stars">★★★★★</div>
Calificado con 4,9 por 3.397 compradores
```
Stars: `color: #fbbf24; font-size: 1.25rem; letter-spacing: 2px`.

## 3. Primary CTA — `.btn.btn-primary`

| State | Style |
|---|---|
| idle | bg `#3182ce`, color `#fff`, padding `1rem 2rem`, radius `0.5rem`, font-size `1.1rem`, font-weight 600 |
| hover | bg `#2c5aa0`, `transform: translateY(-2px)` |
| focus | `outline: 3px solid rgba(66,153,225,.5); outline-offset: 2px` |
| mobile | padding `1.2rem 1.5rem`, min-height 48px, radius 8px |
| width | `100%` (block), `margin-bottom: 1rem` |

## 4. Benefit card — `.benefit-card`

Fundo do bloco pai (`#benefits`) é `linear-gradient(135deg, #667eea, #764ba2)`. Os cards são vidro:

```css
background: rgba(255,255,255,.1);
backdrop-filter: blur(10px);
border: 1px solid rgba(255,255,255,.2);
border-radius: 1rem;
padding: 2rem;
text-align: center;
box-shadow: 0 8px 32px rgba(0,0,0,.1);
```

Hover: `translateY(-10px)`, shadow ganha intensidade, bg `rgba(255,255,255,.15)`.

Conteúdo:
- `.benefit-icon` → emoji `font-size: 3rem` (⚡, ♿, ⏱️, ✅).
- `h3` → 1.5rem, weight 700, color `#fff`.
- `p` → 1rem, line-height 1.6, color `rgba(255,255,255,.9)`.

## 5. Persona card — `.persona`

```css
background: #f7fafc;
padding: 2rem;
border-radius: 1rem;
border-left: 5px solid #48bb78;
```

H3: `#1a202c`, 1.25rem, weight 600. P: `#4a5568`.

## 6. Testimonial carousel (`#testimonials-carousel`)

- Container `max-width: 1200px`, border-radius 1rem, shadow `0 10px 40px rgba(0,0,0,.1)`.
- Slides: flex 100% min-width, transform translateX.
- Botões nav (`.carousel-btn`): círculos 50×50 (mobile 44×44), bg `rgba(255,255,255,.9)`, shadow.
- Dots (`.carousel-dot`): 6×6 (mobile 4×4 com hitbox 44×44), inativo `#cbd5e0`, ativo `#3182ce` com border `#2c5aa0`.
- Imagens: max-height 600px (desktop), 500px (mobile), 400px (≤480px); `object-fit: contain`.

## 7. Plan card — basic (`.plan-basic-new`)

```css
background: #fff;
border-radius: 20px;
padding: 30px;
border: 2px solid #e2e8f0;
box-shadow: 0 10px 30px rgba(0,0,0,.1);
max-width: 90%;
```

Estrutura:
1. `h3` "Paquete Básico" — 1.8rem weight 700 color `#000`.
2. `.price-section`
   - `.old-price` "De $ 49" — `color: red; text-decoration: line-through; font-size: 0.9rem`.
   - `.current-price` "$ 5.90" — `font-size: 70px !important; font-weight: 700; color: #4ade80`.
   - `.discount-badge` "80% de DESCUENTO" — bg `#fbbf24` (yellow), text `#000`, padding `4px 12px`, radius 15px, font 0.8rem 600.
3. `.plan-features-new` — list-style none, items 0.95rem color `#000` (sem checkmark CSS — texto já contém ✓).
4. `.btn-basic-new` — bg `#4ade80` (verde), padding `15px 20px`, radius 25px, weight 700, width 100%, `animation: pulse-button 2s infinite`.
5. `.security-badges` imagem max-width 350px.

## 8. Plan card — premium (`.plan-premium-new`)

Igual ao basic +:
- `.plan-badge-new` ("MÁS VENDIDO") absolute top `-12px` left 50% translateX(-50%), bg `#4ade80`, color `#fff`, padding `14px 32px`, radius 22px, font 1rem weight 700, white-space nowrap.
- `.basic-included` — texto "Incluye todo del Paquete Básico +", color `#666`, font 0.95rem weight 600.
- `.plan-features-premium li.premium-feature` — weight 700, com emoji 🎁 prefixo no texto.
- `.btn-premium-new` — idêntico ao basic-new.
- `.testimonial-count` "Más de 500 personas ya eligieron esta oferta" — center, color `#666`, font 0.85rem italic.

## 9. Guarantee block

```html
<img class="guarantee-image" src=".../selo-30-dias.png">
<div class="guarantee">Pruébalo por 30 días. Si no ayuda a tus adultos mayores, te devolvemos el 100%.</div>
```

```css
.guarantee {
  background: #e6fffa;
  border: 2px solid #4fd1c7;
  border-radius: 0.75rem;
  padding: 1.5rem;
  font-weight: 600;
  color: #234e52;
  font-size: 1.1rem;
  text-align: center;
}
```

> ⚠️ **Inconsistência da própria página**: o selo da imagem diz "30 días", o texto de FAQ menciona "7 días", e o copy do bloco diz "30 días". O Básico tem listed "Garantía de 7 días" e o Premium "Garantía de 30 días". A copy do bloco azul vai com 30 (mais agressiva).

## 10. Testimonial quote card — `.testimonial`

```css
background: #f7fafc;
padding: 2rem;
border-radius: 1rem;
border-left: 4px solid #3182ce;
max-width: 600px;
margin: 0 auto 2rem;
```

- `<p>` italic, color `#4a5568`, line-height 1.4.
- `.author` flex gap 0.75rem.
- `.author-photo` 50×50, radius 50%, border 2px solid `#e5e7eb`, `object-fit: cover`.
- `.author-name` 1rem, color `#2d3748`, weight 600.
- `.author-stars` 0.9rem, color `#fbbf24`.

## 11. FAQ item — `.faq-item`

```css
background: #fff;
border-radius: 0.75rem;
margin-bottom: 1rem;
overflow: hidden;
box-shadow: 0 2px 4px rgba(0,0,0,.1);
```

- `.faq-question` (botão) — width 100%, padding 1.5rem, flex space-between, font 1.1rem weight 600, color `#1a202c`.
- Hover: bg `#f7fafc`.
- `.faq-answer` — padding `0 1.5rem 1.5rem`, color `#4a5568`, line-height 1.6, `display: none` por default.
- `.faq-answer.active` → `display: block`.
- O `<span>` à direita alterna entre `+` e `-` quando aberto.

## 12. Footer — `#footer`

```css
background: #1f2937;
color: #e5e7eb;
padding: 2rem 0;
text-align: center;
```

- `.footer-links` — flex gap 2rem (1.5rem mobile), wrap.
- `.footer-link` — color `#e5e7eb`, hover `#fff` underline.
- `.footer-copyright` — `#d1d5db`, 0.9rem.

## 13. Sticky CTA bar — `.sticky-cta` (definido no CSS, não visível inicialmente)

```css
position: fixed;
bottom: 0; left: 0; right: 0;
background: #fff;
border-top: 3px solid #3182ce;
padding: 1rem;
display: flex; justify-content: space-between; align-items: center;
box-shadow: 0 -4px 6px rgba(0,0,0,.1);
z-index: 99;
```

Mobile: vira `flex-direction: column`, btn `width: 100%`.

## 14. Purchase notification toast — `.purchase-notification` (definido no CSS)

Animação `slideInOut 6s ease-in-out forwards`. Aparece em `.purchase-notifications-container` fixo `top:20px right:20px`.

```css
background: linear-gradient(135deg, #4ade80, #22c55e);
color: #fff;
padding: 15px 20px;
border-radius: 12px;
box-shadow: 0 8px 25px rgba(0,0,0,.15);
border-left: 4px solid #16a34a;
max-width: 320px;
```

Header com emoji 🎉 (`:before content`).
