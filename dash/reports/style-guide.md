# Style Guide — actividadesadultosmayores.com

> Tokens extraídos do CSS em produção (`/assets/index-h9jXibMU.css`) e da computação de estilos no DOM renderizado. **Sem webfonts** — usa a system stack.

## 1. Typography

### Font stack

```
-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans",
"Helvetica Neue", sans-serif
```

- Nenhum `@import` de Google Fonts ou `@font-face` declarado.
- `font-display: swap` global, `text-rendering: optimizeSpeed`.
- Smoothing: `-webkit-font-smoothing: antialiased`, `-moz-osx-font-smoothing: grayscale`.

### Escala (desktop ≥768px)

| Token | Selector | Size | Weight | Line-height |
|---|---|---|---|---|
| `display.hero` | `#hero h1` | 3.2rem (51.2px) | 700 | 1.2 |
| `display.section` | `.benefits-title`, `.personas-title` | 3.2rem (51.2px) | 700 | 1.6 (com `text-shadow 0 2px 4px rgba(0,0,0,.1)` no benefits) |
| `heading.lg` | `.testimonials-title`, `.testimonials-carousel-title` | 2.5rem | 700 | 1.1–1.2 |
| `heading.md` | `.plans-section-title`, `#samples h2` | 2rem | 700 | — |
| `heading.sm` | `.benefit-card h3` | 1.5rem | 700 | — |
| `heading.xs` | `.persona h3`, `.faq-question` | 1.25rem / 1.1rem | 600 | — |
| `body` | `body` | 1rem (16px) | 400 | 1.6 |
| `subtitle` | `.subtitle` | 1.25rem | (inherit) | — |
| `microcopy` | `.microproof`, `.author`, `.security-proof` | 0.9rem | 400/600 | — |
| `pill` | `.discount-badge` | 0.8rem | 600 | — |

### Escala (mobile ≤768px)

| Token | Size |
|---|---|
| H1 hero | 1.75rem–2.2rem |
| H2 sections | 2rem |
| Btn | 1rem (padding 1.2rem 1.5rem, min-height 48px) |

## 2. Color palette

### Backgrounds por seção (loop visual)

| Seção | Background |
|---|---|
| `.top-urgency-banner` | `#dc2626` (red 600) |
| `#hero` | `#f8fafc` (slate 50) |
| `#benefits` | `linear-gradient(135deg, #667eea, #764ba2)` (azul→roxo) |
| `#personas` | `#ffffff` |
| `#samples` | `#f7fafc` (slate 50) |
| `#plans` | `#3b82f6` (blue 500) |
| `#testimonials` | `#ffffff` |
| `#testimonials-carousel` | `#f8fafc` |
| `#faq` | `#f7fafc` |
| `#footer` | `#1f2937` (gray 800) |

### Tokens semânticos

```css
/* Brand / primary */
--brand-blue: #3182ce;             /* CTA primary, dots ativos, badges */
--brand-blue-hover: #2c5aa0;
--brand-blue-bg: #3b82f6;          /* fundo seção plans */
--brand-green: #48bb78;            /* btn-secondary, checkmarks, persona left-border */
--brand-green-hover: #38a169;
--brand-green-bright: #4ade80;     /* preço destaque, btn-basic-new, btn-premium-new */
--brand-green-bright-hover: #22c55e;
--brand-green-deep: #16a34a;       /* notification left border */

/* Gradient (benefits hero) */
--gradient-purple: linear-gradient(135deg, #667eea, #764ba2);

/* Alert / urgency */
--urgency-red: #dc2626;
--bonus-red: red;                  /* literal 'red' = #ff0000 */
--bonus-red-hover: #c00;
--accent-orange: #ff6b35;          /* .offer-bar (não está visível no snapshot atual) */
--star-yellow: #fbbf24;
--discount-yellow-bg: #fbbf24;

/* Neutrals */
--ink-900: #1a202c;                /* H1, H2 */
--ink-800: #2d3748;
--ink-700: #4a5568;                /* subtitle text */
--ink-600: #718096;                /* microcopy */
--ink-500: #666;
--ink-300: #cbd5e0;                /* dots inativos */
--ink-200: #e2e8f0;                /* borders plan-cards */
--ink-100: #e5e7eb;                /* footer text */
--ink-50:  #f7fafc;                /* bg seções claras */
--canvas: #f8fafc;                 /* hero bg */
--white: #ffffff;

/* Footer */
--footer-bg: #1f2937;
--footer-text: #e5e7eb;
--footer-text-dim: #d1d5db;

/* Guarantee mint */
--mint-bg: #e6fffa;
--mint-border: #4fd1c7;
--mint-text: #234e52;

/* Error / negative */
--error-red: #f56565;              /* .cross na tabela comparação (legacy) */
```

### RGB conversion para os mais usados

| HEX | RGB |
|---|---|
| `#3182ce` | rgb(49, 130, 206) |
| `#48bb78` | rgb(72, 187, 120) |
| `#4ade80` | rgb(74, 222, 128) |
| `#dc2626` | rgb(220, 38, 38) |
| `#667eea` | rgb(102, 126, 234) |
| `#764ba2` | rgb(118, 75, 162) |
| `#1a202c` | rgb(26, 32, 44) |
| `#3b82f6` | rgb(59, 130, 246) |
| `#fbbf24` | rgb(251, 191, 36) |

## 3. Spacing & layout

### Container

```css
.container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
```

### Section padding

- Default: `padding: 3rem 0` (48px topo/baixo).
- Benefits: `padding: 4rem 0` (64px) com `content-visibility: auto` e `contain-intrinsic-size: 600px`.
- Testimonials-carousel: `padding: 4rem 0`.
- Mobile (≤768px): reduzido para `2rem 0–3rem 0`.

### Grid columns

- `.benefits-grid` → `grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem`.
- `.personas-grid` → mesmo.
- `.plans-grid` → `repeat(auto-fit, minmax(320px, 1fr)); gap: 2rem; max-width: 800px`.
- Mobile: tudo vira `grid-template-columns: 1fr`.

### Breakpoints

| Bp | Width |
|---|---|
| Mobile small | `≤480px` |
| Mobile | `≤768px` |
| (Desktop é o default acima) |  |

## 4. Border-radius

| Token | px |
|---|---|
| `radius.sm` | 0.25rem (4px) — payment image |
| `radius.md` | 0.5rem (8px) — buttons default, .testimonial-brief |
| `radius.lg` | 0.75rem (12px) — `.faq-item`, `.guarantee` |
| `radius.xl` | 1rem (16px) — `.benefit-card`, `.persona`, `.carousel-container`, `.plan-card` |
| `radius.2xl` | 20px — `.plan-basic-new`, `.plan-premium-new` |
| `radius.pill` | 25px / 22px — `.btn-basic-new` (25px), `.plan-badge-new` (22px) |
| `radius.pill-lg` | 30px — `.bonus-btn` |
| `radius.full` | 50% (avatar, dots, carousel nav arrows) |
| `radius.tag` | 2rem — `.price-badge`, `.plan-badge` |

## 5. Shadow tokens

| Token | Value |
|---|---|
| `shadow.xs` | `0 2px 4px rgba(0,0,0,.1)` — faq-item |
| `shadow.sm` | `0 4px 6px rgba(0,0,0,.1)` — content-image, plan-card, comparison-table |
| `shadow.md` | `0 8px 25px rgba(0,0,0,.1)` — notification, testimonial-placeholder |
| `shadow.lg` | `0 10px 30px rgba(0,0,0,.1)` — plan-basic-new, plan-premium-new |
| `shadow.xl` | `0 10px 40px rgba(0,0,0,.1)` — carousel-wrapper |
| `shadow.benefit-card` | `0 8px 32px rgba(0,0,0,.1)` (idle) → `0 15px 40px rgba(0,0,0,.2)` (hover) |
| `shadow.glow-green` | `0 8px 25px rgba(74,222,128,.7)` — pulse-button keyframe |
| `shadow.bonus-red-hover` | `0 8px 25px rgba(255,0,0,.3)` |

## 6. Transition

```
transition: all 0.3s ease;       /* default em cards, btns */
transition: transform 0.5s ease; /* carousels (translateX) */
transition: transform 0.5s ease-in-out; /* testimonials-carousel */
```

## 7. Accessibility tokens

- `button, .btn { min-height: 44px; min-width: 44px; touch-action: manipulation; }`
- Focus: `outline: 3px solid rgba(66,153,225,.5); outline-offset: 2px` (azul translucido).
- `@media (prefers-reduced-motion: reduce)` neutraliza animações.
- `@media (prefers-contrast: high)` força `.btn-primary, .btn-secondary` para `background:#000; border:2px solid #000`.
