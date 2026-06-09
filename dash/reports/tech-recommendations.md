# Tech Recommendations — Rebuild Stack

## Observações da implementação original

- HTML simples (404 linhas) + 1 CSS bundled (`index-h9jXibMU.css`, 22KB minified).
- O nome do CSS (`index-{hash}.css`) é hash de Vite. Sugere build estática com **Vite** ou similar.
- **Nenhum framework JS** detectado no DOM (sem React, Vue, Svelte runtime). HTML é estático server-rendered.
- Sem webfonts — usa system stack.
- Hosted provavelmente em CDN (Cloudflare/Vercel/Netlify) — favicon e CSS servidos do mesmo origin.
- Imagens hospedadas em **ImgBB** (`i.ibb.co`) — CDN externa gratuita. Risco de quebra se a conta expirar.

## Stack recomendado para rebuild

| Camada | Recomendação | Por quê |
|---|---|---|
| **Framework** | **Next.js 16 (App Router) + Server Components** | É single-page estática mas com imagens grandes — `next/image` ganha bastante. Dá pra renderizar como `export const dynamic = 'force-static'` e servir como SSG. |
| **Estilo** | **Tailwind CSS v4** | Os tokens mapeiam quase 1:1 com Tailwind (`text-slate-50`, `bg-blue-500`, `from-[#667eea] to-[#764ba2]`). Os "novos" cards (`plan-basic-new`, `plan-premium-new`) já são Tailwind-friendly. |
| **Animações** | **CSS keyframes puros** | Não há nada que exija lib JS. `pulse-button` e `slideInOut` são triviais. Manter como está. |
| **Carousel** | **Embla Carousel** (~5KB gzip) ou `keen-slider` | Carousels nativos em CSS, sem dependência pesada. |
| **Form / Lead capture** | Não há formulário — todo CTA vai direto pro Hotmart. Manter assim. |
| **Hosting** | **Vercel** | SSG estática + edge cache + analytics nativo. Suporta `next/image` com otimização automática. Domínio + SSL grátis no preview. |
| **Image hosting** | **Mover de ImgBB para `/public`** ou Vercel Blob | ImgBB é frágil para produção. 11 imagens × ~6MB no total cabe perfeitamente no `/public`. |
| **Analytics** | GTM container novo + GA4 + Meta Pixel (próprios) + Utmify (nova conta) | Rebuild precisa de IDs próprios — não usar os do original. |

### Scaffold sugerido (5 min)

```bash
npx create-next-app@latest actividades-clone --typescript --tailwind --app --no-src-dir
cd actividades-clone
npm i embla-carousel-react
```

Páginas:
- `app/page.tsx` — landing inteira.
- `app/layout.tsx` — meta, GTM/GA4, Pixel.
- `components/` — `UrgencyBanner`, `Hero`, `Benefits`, `Personas`, `TestimonialsCarousel`, `Plans`, `Testimonials`, `FAQ`, `Footer`, `PurchaseToasts`.
- `public/assets/` — copiar tudo de `output/.../assets/` para cá.

### Componentes específicos a portar

| Componente | Notas |
|---|---|
| **Countdown** | `'use client'` + `useEffect` setInterval. Resetar à meia-noite local. |
| **FAQ accordion** | `'use client'` simples com `useState`. Texto `+`/`−` no botão. |
| **TestimonialsCarousel** | Embla embed + dots + setas; manter `max-height: 600px / 500px / 400px` por breakpoint. |
| **PurchaseToasts** | `'use client'` com timer randômico (10–25s) gerando toast random dum array fixo de nomes/cidades LATAM. |
| **StickyCTA** | Aparecer após scroll > 50% via `useEffect` ouvindo scroll. |
| **PulseButton** | classe utilitária Tailwind: `animate-[pulse-button_2s_ease_infinite]` + keyframes em `globals.css`. |

## Tailwind config — tokens propostos

```ts
// tailwind.config.ts
export default {
  theme: {
    extend: {
      colors: {
        brand: {
          blue: { DEFAULT: '#3182ce', hover: '#2c5aa0', bg: '#3b82f6' },
          green: { DEFAULT: '#48bb78', hover: '#38a169', bright: '#4ade80', deep: '#16a34a' },
        },
        urgency: '#dc2626',
        ink: { 900: '#1a202c', 800: '#2d3748', 700: '#4a5568', 600: '#718096' },
        mint: { bg: '#e6fffa', border: '#4fd1c7', text: '#234e52' },
        star: '#fbbf24',
      },
      backgroundImage: {
        'benefits-gradient': 'linear-gradient(135deg, #667eea, #764ba2)',
        'plan-button': 'linear-gradient(135deg, #4ade80, #22c55e)',
      },
      keyframes: {
        'pulse-button': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 0 rgba(74,222,128,.7)' },
          '50%': { transform: 'scale(1.02)', boxShadow: '0 0 0 10px rgba(74,222,128,0)' },
        },
        slideInOut: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '15%, 85%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
      },
      animation: {
        'pulse-button': 'pulse-button 2s ease infinite',
        'slide-in-out': 'slideInOut 6s ease-in-out forwards',
      },
    },
  },
};
```

## Riscos / red flags da página original

1. **Imagens em CDN gratuito (ImgBB)** — qualquer take-down quebra a página. Self-host obrigatório no rebuild.
2. **Cópia/imagem do selo em português** ("Garantia de 30 Dias") em página em espanhol — fica visível em quem ler o alt. Reproduzir como está mas marcar para troca.
3. **Inconsistência da garantia** — 7 dias vs 30 dias coexiste. Decidir uma e padronizar.
4. **`#` em links de footer** (Política, Termos, Soporte) — não funcionam. Antes de publicar, precisa criar essas páginas (LGPD/LATAM compliance + Hotmart exige).
5. **Pixel duplicado FB causa erro** "o param is different" — verificar que só carrega 1 vez (preferir GTM ou inline, não os dois).
6. **`utm_source=organic`** hardcoded — força organic mesmo em tráfego pago, pode atrapalhar atribuição se vier de Ads. Tornar dinâmico via UTM hijack.
7. **Sem `robots.txt`** declarado — 404. Adicionar `User-agent: * / Allow: /` se objetivo é organic, ou `Disallow: /` se for pure paid.

## Anti-bot / anti-scraping

Nenhum mecanismo observado. Sem Cloudflare challenge, sem hCaptcha, sem Akamai. Playwright navegou sem obstáculos. Boa notícia para auditoria + ruim para o operador (concorrência pode clonar facilmente).

## Resumo da operação observada

- **Modelo de negócio:** infoproduto LATAM (US$5.90 / US$8.90) com afiliação Hotmart.
- **Funil:** Meta Ads (LATAM) → landing espanhol → Hotmart 1-click checkout.
- **Stack típico:** Vite static + ImgBB + GTM + GA4 + Pixel + Utmify + Hotmart.
- **Volume implícito:** "3.397 compradores" + "Más de 500 personas ya eligieron esta oferta" + 4 testemunhos WhatsApp — copy padrão de operação escalada.
