# Animations & Transitions

> Tudo é CSS puro (`@keyframes` + `transition`). Nenhuma lib de animação detectada (sem Framer, GSAP, AOS, Lottie). `prefers-reduced-motion: reduce` zera tudo.

## Keyframes capturados

### 1. `pulse` — usado em `.limited-time-banner`

```css
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.05); }
}
animation: pulse 2s infinite;
```

| Prop | Value |
|---|---|
| trigger | on-load (loop) |
| duration | 2s |
| easing | (default `ease`) |
| iteration | infinite |
| escopo | `.limited-time-banner` (legacy red banner — não está renderizado na versão atual mas a regra existe) |

### 2. `pulse-button` — usado em `.btn-basic-new`, `.btn-premium-new`, `.bonus-btn`

```css
@keyframes pulse-button {
  0%, 100% { transform: scale(1);     box-shadow: rgba(74,222,128,.7) 0 0; }
  50%      { transform: scale(1.02);  box-shadow: rgba(74,222,128,0) 0 0 0 10px; }
}
animation: pulse-button 2s infinite;
```

| Prop | Value |
|---|---|
| trigger | on-load (loop) |
| duration | 2s |
| iteration | infinite |
| effect | leve scale + ring verde expandindo (`#4ade80`) |
| escopo | Os 3 CTAs principais de venda (Básico, Premium, Bônus) |

### 3. `slideInOut` — usado em `.purchase-notification`

```css
@keyframes slideInOut {
  0%   { transform: translateX(100%); opacity: 0; }
  15%  { transform: translateX(0);    opacity: 1; }
  85%  { transform: translateX(0);    opacity: 1; }
  100% { transform: translateX(100%); opacity: 0; }
}
animation: slideInOut 6s ease-in-out forwards;
```

| Prop | Value |
|---|---|
| trigger | quando uma toast é injetada via JS (provavelmente em loop simulando compras) |
| duration | 6s (1s entrada, 4s visível, 1s saída) |
| easing | ease-in-out |
| fill-mode | forwards (mantém estado final) |
| escopo | `.purchase-notification` no canto top-right |

## Transitions inline declaradas

| Selector | Property | Duration | Easing |
|---|---|---|---|
| `.btn` | all | 0.3s | ease |
| `.btn-primary:hover` | adiciona `transform: translateY(-2px)` | (herda 0.3s) | ease |
| `.btn-secondary:hover` | idem | 0.3s | ease |
| `.btn-basic-new:hover` | `transform: translateY(-2px)`, bg → `#22c55e` | 0.3s | ease |
| `.btn-premium-new:hover` | idem | 0.3s | ease |
| `.bonus-btn:hover` | `translateY(-2px)`, bg → `#c00`, shadow `0 8px 25px rgba(255,0,0,.3)` | 0.3s | ease |
| `.benefit-card:hover` | `translateY(-10px)` + shadow upgrade + bg `rgba(255,255,255,.15)` | 0.3s | ease |
| `.carousel` | transform | 0.5s | ease |
| `.carousel-slides` (#testimonials-carousel) | transform | 0.5s | ease-in-out |
| `#testimonials-carousel .carousel-btn:hover` | bg → `#fff`, shadow, `translateY(-50%) scale(1.1)` | 0.3s | ease |
| `.samples-carousel-dot`, `.carousel-dot` | all | 0.3s | ease |
| `.footer-link:hover` | color → `#fff` underline | 0.3s | ease |

## Comportamentos JS observados (todos confirmados em `app.js`)

| Behavior | Tipo | Notas |
|---|---|---|
| **Countdown** `#countdown-timer` | setInterval 1s | Calcula tempo até 23:59:59 do dia atual. Formato `HH:MM:SS` com `padStart(2,'0')`. Reseta automaticamente após meia-noite. |
| **Promo date** `#promo-date` | DOMContentLoaded | Mostra a data de HOJE em formato `dd/mm/yyyy`. Reforça urgência sempre como "hoje". |
| **Carousel testimonials** | `translateX(-N*100%)` + auto-loop | Auto-avança a cada **6s**. Setas + dots clicáveis. Reseta inicial em slide 0. |
| **Samples carousel** (não está visível na variante atual mas no JS) | auto-loop 8s | `display: none ↔ block`. |
| **FAQ accordion** | toggle `.active` + span text | Click em `.faq-question` fecha todos os outros, abre o clicado. Span alterna `+`/`-`. Dispara `track('faq_open', {question: data-question})`. |
| **Purchase notifications** | random pick + inject + auto-remove 6s | Primeira toast aos **3s** depois do load, depois a cada **8–15s** (random). Mensagem: "{Nome} acaba de comprar el Paquete Premium" + "📍 {Cidade} - ⏰ Hace {N} minuto(s)". |
| **Spot counter** | random 5–15 + IntersectionObserver | Conta vagas restantes. Quando o usuário vê `#plans` (threshold 0.3), troca o banner pra "ÚLTIMOS 5 DISPONÍVEIS COM BÔNUS E PREÇO ESPECIAL, COMPRE AGORA." e força bg vermelho `#dc2626`. |
| **Geo-IP pricing** ⚠ **HUGE** | `fetch('https://ipapi.co/json/')` | Substitui preço + moeda baseado no `country_code` do visitante. Ver `tracking.md` p/ tabela completa. |
| **Scroll depth tracking** | passive listener throttled 100ms | Dispara `scroll_25`, `scroll_50`, `scroll_90` no dataLayer. |
| **CTA tracking** | listeners diretos | `click_hero_cta`, `click_benefits_cta`, `click_plan_basic`, `click_plan_premium`. Hero e benefits CTAs também fazem `scrollIntoView` para `#plans`. |
| **Guarantee view tracking** | IntersectionObserver threshold 0.5 | Dispara `view_guarantee` quando o bloco `#guarantee-inline` é visto. |
| **Hotmart UTM hijack** | inline IIFE no fim do body | Substitui o `sck` e `utm_*` dos links Hotmart por `undefined|undefined...` se UTMs não encontrados — garante atribuição zerada quando tráfego direto. |

## Scroll behavior

```css
html { scroll-behavior: smooth; }
```

CTA `ASEGURAR MI BONO` usa `href="#plans"` para scroll suave até a seção de preços.

## Performance hints no CSS

- `content-visibility: auto` em `#benefits`, `#plans`, `#faq`, `#testimonials-carousel` (renderiza só quando próximo do viewport).
- `contain-intrinsic-size` declarado para evitar saltos do scroll.
- `font-display: swap`.
- `-webkit-tap-highlight-color: transparent` em `.btn`.
