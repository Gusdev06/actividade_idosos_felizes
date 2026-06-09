# Tracking, Pixels & Lead Destinations

## Pixels e analytics ativos

| Provider | ID | Onde foi visto |
|---|---|---|
| **Google Tag Manager** | (carregado via `gtm.js` — ID está em script inline) | inline IIFE no `<head>` |
| **Google Analytics 4** | `G-JRH45EN1B0` | requests para `https://www.google-analytics.com/g/collect?tid=G-JRH45EN1B0` |
| **Meta / Facebook Pixel** | `1603655467659563` | script `https://connect.facebook.net/signals/config/1603655467659563?v=2.9.334&...` |
| **Utmify pixel #1** | `689a73400585f3565b6253b8` | `window.pixelId = ...` + `https://cdn.utmify.com.br/scripts/pixel/pixel.js` |
| **Utmify pixel #2** | `690899e1db575b5a5654c96b` | idem |
| **Utmify pixel #3** | `69720d6eb8b0237938554b1c` | idem |
| **Utmify URL saver** | userId `695ea3f8498e367c50561316` | `POST https://utmify-tracker-url.vercel.app/save-url` (falhou — DNS/CORS no nosso browser, mas faz parte do stack) |
| **Hotmart MPC** | — | `POST https://mpc2-prod-21-is5qnl632q-uc.a.run.app/events`, `mpc-prod-23-s6uit34pua-ue.a.run.app/events` (Hotmart Mid-funnel Pixel Collector) |
| **Google Ads conversion linker** | — | `POST https://www.google.com/ccm/collect?...` |

## Eventos GA4 capturados

| Event | Quando dispara |
|---|---|
| `page_view` | on-load |
| `scroll` | `epn.percent_scrolled=90` (90% scroll depth) |
| `gtm.js` | container init |

## Eventos Utmify capturados

| Endpoint | Método | Frequência |
|---|---|---|
| `https://tracking.utmify.com.br/tracking/v1/events` | POST | múltiplas vezes durante a sessão |
| `https://tracking.utmify.com.br/tracking/v1/lead` | PUT | múltiplas vezes (3 pixels × eventos) |

## Geolocation / IP fingerprinting

- `https://ipapi.co/json/` → DNS bloqueado no nosso ambiente, mas faz parte do stack para enrich do tracking.
- `https://api.ipify.org/?format=json` + `api6.ipify.org` → IPv4 + IPv6 lookup, retorna 200.

## Lead destinations / Checkout

| CTA | URL completa |
|---|---|
| **Paquete Básico** | `https://pay.hotmart.com/U104294498Q?sck=jLj6a28489b4b19b7dfc0b98fd2hQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR&utm_source=organic&utm_medium=&utm_campaign=&utm_content=&utm_term=&off=x7r8xm5r&checkoutMode=10&xcod=jLj6a28489b4b19b7dfc0b98fd2hQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR` |
| **Paquete Premium** | mesmo `U104294498Q`, **sem `off=`** (oferta default), mesmo `sck`/`xcod` |

- **Hotmart product ID:** `U104294498Q`
- **Hotmart `off` code (Básico):** `x7r8xm5r` (segunda oferta dentro do mesmo produto)
- **Checkout mode:** `10` (provavelmente Hotmart Embedded / 1-click)
- **`sck` / `xcod`:** strings idênticas, parece tracking afiliado / código de partner.

## UTM hijack script

Detectado inline:

```js
(function(){
  for (var d = document.querySelectorAll('a[href*="pay.hotmart.com"]'), ...
    /* sobrescreve sck e utm_* dos links se UTMs não vierem na URL atual */
})();
```

Em tráfego direto (sem UTM), os links são reescritos para `sck=undefined|undefined|undefined|undefined|undefined&utm_source=undefined&...`. Em tráfego com UTM, os valores são propagados ao Hotmart — atribuição em pré-checkout.

## Geo-IP pricing (descoberto no `app.js`) ⚠

A página detecta o país via `ipapi.co/json/` e troca preço + moeda em tempo real. Default = US$ 5.90 / 8.90.

| Country | Currency | Basic (de → por) | Premium (de → por) |
|---|---|---|---|
| **BR** | R$ | 199 → 24.90 | 349 → 39.90 |
| **AR** | $ | 12.000 → 1.490 | 21.000 → 2.390 |
| **MX** | $ | 890 → 109 | 1.590 → 169 |
| **CO** | $ | 185.000 → 22.900 | 329.000 → 34.900 |
| **PE** | S/ | 189 → 22.90 | 329 → 32.90 |
| **CL** | $ | 39.900 → 4.990 | 69.900 → 7.990 |
| **EC** | $ | 49 → 5.90 | 89 → 8.90 |
| **ES** | € | 42 → 4.90 | 79 → 7.90 |
| **PY** | ₲ | 350.000 → 42.000 | 620.000 → 69.000 |
| **UY** | $ | 1.890 → 229 | 3.390 → 349 |
| **Default / outros** | $ | 49 → 5.90 | 89 → 8.90 |

Dispara `track('pricing_adjusted', { country, currency })` no dataLayer.

## Purchase notifications — lista completa (descoberta no `app.js`)

20 personas pre-definidas com nome + cidade LATAM/Espanha, randomizadas:

```
María González — Ciudad de México, México
José Rodríguez — Buenos Aires, Argentina
Carmen López — Bogotá, Colombia
Carlos Hernández — Lima, Perú
Ana Martín — Madrid, España
Roberto Sánchez — Caracas, Venezuela
Lucía Fernández — Santiago, Chile
Pedro Jiménez — Quito, Ecuador
Isabel Ruiz — Guadalajara, México
Miguel Torres — Córdoba, Argentina
Elena Morales — Medellín, Colombia
Francisco Vargas — Arequipa, Perú
Sofía Ramírez — Barcelona, España
Alejandro Castro — Maracaibo, Venezuela
Valentina Silva — Valparaíso, Chile
Diego Mendoza — Guayaquil, Ecuador
Gabriela Herrera — Monterrey, México
Andrés Delgado — Rosario, Argentina
Patricia Vega — Cali, Colombia
Luis Paredes — Trujillo, Perú
```

`minutesAgo = random 1–30`. Sempre "Paquete Premium" (nunca Básico — escolha de copy: ancorar high-tier).

## Eventos dataLayer (custom) descobertos no `app.js`

| Event | Payload | Trigger |
|---|---|---|
| `page_loaded` | `{ timestamp }` | on-load |
| `pricing_adjusted` | `{ country, currency }` | depois do geo-IP |
| `faq_open` | `{ question: data-question }` | click em FAQ |
| `scroll_25` / `scroll_50` / `scroll_90` | — | scroll depth |
| `view_guarantee` | — | guarantee block visível 50% |
| `click_hero_cta` / `click_benefits_cta` | — | CTAs scroll-to-plans |
| `click_plan_basic` / `click_plan_premium` | — | click no checkout |
| `view_testimonials_carousel` | `{ slide }` | troca de slide |
| `view_samples_carousel` | `{ slide }` | troca samples (legacy) |

## Notas reproduzir o tracking no clone

1. **Trocar todos os IDs** antes de publicar — o Pixel/UTMs atuais pertencem ao operador original.
2. Manter o **fluxo de injeção condicional via GTM** se o objetivo for usar GTM como abstração (ID novo).
3. **Utmify** é um stack tipicamente brasileiro/LATAM para atribuição de afiliados Hotmart. Se for clone próprio, configure sua conta Utmify e troque os 3 pixelIds.
4. Reproduzir o **scroll 90% event** em GA4 (já é default no Enhanced Measurement).
5. Reproduzir o **UTM hijack** se o tráfego vier de campanhas pagas, para passar UTM ao Hotmart sem perder atribuição.

## Erros observados (na captura)

- `connect.facebook.net/log/error` → `ERR_BLOCKED_BY_ORB` (browser block, não compromete o pixel).
- `Error: [SignalsFBEvents] o param is different from the existing value.` → conflito de eventos Facebook (carregado duplicado provavelmente via GTM + script inline).
- `utmify-tracker-url.vercel.app/save-url` → `ERR_FAILED` por CORS no ambiente Playwright. Em produção provavelmente passa.
