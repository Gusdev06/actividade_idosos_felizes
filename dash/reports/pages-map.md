# Pages Map — actividadesadultosmayores.com

> **Tipo:** Landing page de venda de produto digital (single-page, *long-form sales letter*). **Não é um quiz** — não há ramificações nem perguntas. Toda a experiência acontece em uma única rota (`/`) com âncoras internas.

## Rota única

- URL: `https://actividadesadultosmayores.com/`
- Idioma: `es` (espanhol — público LATAM)
- Título: `+100 Actividades y Ejercicios para Adultos Mayores | Material Imprimible`
- Destino final (checkout): `https://pay.hotmart.com/U104294498Q` (Hotmart)

## Estrutura das seções (top → bottom)

```mermaid
flowchart TD
  A[Top urgency banner<br/>'¡Último día con precio especial!<br/>Termina en: HH:MM:SS'] --> B[#hero<br/>H1 + subtitle + mockup PNG + CTA 'OBTENER ACCESO AHORA' + rating 4.9/3.397]
  B --> C[#benefits<br/>'Beneficios inmediatos' — 4 cards com emoji<br/>fundo gradient roxo]
  C --> D[#personas<br/>'Para quién está indicado' — 4 cards de público<br/>+ mockup target-audience]
  D --> E[#testimonials-carousel<br/>'Historias reales' — carousel 4 screenshots WhatsApp]
  E --> F[#plans<br/>'Elige tu Paquete' — fundo azul<br/>2 cards: Básico US$5.90 / Premium US$8.90<br/>+ selo garantia + 'pulse-button']
  F --> G[#testimonials<br/>'Lo que dicen nuestros usuarios' — 3 quotes com foto<br/>+ CTA âncora 'ASEGURAR MI BONO' → #plans]
  G --> H[#faq<br/>'Preguntas frecuentes' — 6 itens accordion]
  H --> I[#footer<br/>links + copyright '© 2025']

  F -- click CTA --> X[Hotmart checkout<br/>https://pay.hotmart.com/U104294498Q<br/>off=x7r8xm5r p/ Básico, sem off p/ Premium]
  G -- 'ASEGURAR MI BONO' --> F
```

## Ramificações?

Nenhuma. É uma **landing linear**. Variações observadas:
- Dois CTAs distintos que vão a duas variantes de checkout Hotmart (parâmetro `off`):
  - **Básico** → `?off=x7r8xm5r` (oferta com desconto p/ US$5.90)
  - **Premium** → sem `off` (oferta default US$8.90 com bônus)

## Estados / interações capturadas

- **FAQ accordion**: cada item alterna `class="faq-answer"` ↔ `class="faq-answer active"`. Botão alterna texto `+` ↔ `-`. Comportamento simples (provavelmente listener inline ou em JS bundled — não foi exposto).
- **Carousel de testemunhos** (WhatsApp screenshots): setas `‹` / `›` + dots. Transform translateX nos slides, transition `.5s ease-in-out`.
- **Countdown** no top banner: contador regressivo HH:MM:SS, texto fixo em espanhol.
- **Pulse animation** no CTA premium (`@keyframes pulse-button`): scale 1→1.02→1 com box-shadow expanding em verde (`#4ade80`).
- **Sticky CTA bar** definida no CSS (`.sticky-cta` fixed bottom) — não visível no snapshot inicial, provavelmente injetada via JS após scroll (não chegou a aparecer durante a captura).
- **Purchase notifications** definidas no CSS (`.purchase-notification` slide-in/out 6s) — toasts no canto superior direito simulando compras recentes, animação `slideInOut`.

## Anchors / âncoras internas

- `#plans` — usado pelo CTA "ASEGURAR MI BONO" para rolar até a seção de preços.
- `smooth-scroll` aplicado globalmente em `html { scroll-behavior: smooth }`.

## Variantes / A/B observadas

Apenas uma variante capturada. CSS contém classes legacy não usadas (`.plan-card`, `.plan-popular`, `.comparison-table`, `.testimonial-placeholder`) que sugerem versões anteriores do layout — a versão ativa usa `.plan-basic-new` e `.plan-premium-new`.
