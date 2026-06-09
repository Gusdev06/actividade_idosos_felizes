# Como abrir o clone

## 1. Versão pronta pra ver (HTML self-contained com todos os assets locais)

A pasta `site/` tem o clone funcional:

```
site/
├── index.html        ← abre aqui
├── index.css         ← idêntico ao original
├── app.js            ← FAQ, countdown, carousel, notifications, geo-pricing
├── assets-step-01/   ← imagens locais (sem dependência do ImgBB)
└── assets-shared/    ← favicon
```

### Modo 1 — abrir direto (mais rápido)

```bash
open site/index.html
```

Funciona em qualquer browser via `file://`. ✓ Imagens locais carregam. ✓ FAQ, countdown e carousel funcionam. ✗ Geo-IP pricing falha por CORS (mostra preço default US$ 5.90 / 8.90).

### Modo 2 — servidor local (mais fiel)

Num terminal:

```bash
cd site
python3 -m http.server 8765
```

Depois abre `http://localhost:8765/` no browser. Mesma coisa do modo 1, mas as toasts de "purchase notification" também animam normal e o geo-IP funciona (vai detectar seu IP real).

## 2. Versão "original" capturada (com tracking ativo, imagens via ImgBB)

`snapshots/step-01.html` é o DOM exato como veio do servidor (com scripts FB/GA/Utmify intactos). Não recomendo abrir — vai disparar pixels do dono original.

## 3. Apenas os screenshots

```bash
open snapshots/step-01-desktop-full.png   # versão desktop fullpage
open snapshots/step-01-mobile-full.png    # versão mobile fullpage
```

## 4. Reports / documentação

```bash
open reports/                # abre o Finder na pasta dos reports
```

Cada `.md` documenta uma camada:
- `pages-map.md` — fluxo da landing
- `style-guide.md` — tokens (cores, tipografia, spacing)
- `components.md` — 14 componentes com specs
- `animations.md` — keyframes + comportamentos JS
- `content.md` — todo o copy em espanhol
- `tracking.md` — pixels + geo-pricing + lista das 20 notifications
- `tech-recommendations.md` — stack pra rebuild (Next + Tailwind)

## Diferenças entre `site/` e o original

| Item | Original | `site/` clone |
|---|---|---|
| HTML | minified, gerado por Vite | indentado, legível |
| CSS | `/assets/index-h9jXibMU.css` | `site/index.css` (mesmo arquivo, copiado) |
| JS | `/app.js` | `site/app.js` (mesmo arquivo, copiado) |
| Imagens | hospedadas em ImgBB (`i.ibb.co/...`) | locais em `site/assets-step-01/` |
| FB Pixel × 3 | ATIVO | **REMOVIDO** |
| GA4 / GTM | ATIVO | **REMOVIDO** |
| Utmify × 3 | ATIVO | **REMOVIDO** |
| `utmify-tracker-url.vercel.app` | ATIVO | **REMOVIDO** |
| UTM hijack Hotmart | ATIVO | **REMOVIDO** |
| Geo-IP pricing | `ipapi.co/json/` ✓ | ainda chama (mas pode falhar local) |
| Hotmart checkout | URLs do operador original | **mantidas** (clicar abre o checkout original — se quiser desativar, troque os `href` em `site/index.html`) |
