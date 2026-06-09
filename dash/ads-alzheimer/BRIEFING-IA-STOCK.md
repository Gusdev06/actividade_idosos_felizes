# Briefing de produção — AI Video + Stock Footage

> Versão pivotada: você NÃO vai gravar. Vai gerar com IA (Veo 3.1, Runway, Kling, Sora, Pika) + completar com stock (Pexels, Storyblocks, Envato, Artgrid). Este briefing substitui o `BRIEFING-PRODUCAO.md`.

---

## Estratégia geral — o que IA gera bem × o que pega de stock

| Tipo de plano | Fonte recomendada | Por quê |
|---|---|---|
| Estabelecimento atmosférico (sala vazia, janela, café frio, sofá) | **AI** (Veo/Runway) | IA arrasa em ambientes parados, luz natural, sem humanos |
| Close de objeto/mão segurando algo | **AI** ou **Stock** | Ambos funcionam |
| Rosto pensativo sem falar (olhar baixo, suspiro, lágrima) | **AI** (Kling 2.0 é o melhor pra rosto) | Sem lip-sync = IA entrega |
| Idoso(a) sozinho em ambiente íntimo | **AI** ou **Stock** | Stock tem opções específicas pra demência |
| Mãe + filha juntas interagindo (mão na mão, abraço) | **Stock** | IA ainda erra interação entre 2 humanos |
| Atividade do produto sendo executada (atividade impressa + mão) | **AI** com prompt específico ou tela com print | Pode mockar com imagem de referência |
| End card com produto | **Estático** (Figma/Canva) | Não anima — é frame final |

**Regra de ouro:** clipes IA de 4-6s cada (limite da maior parte dos geradores). Edite 5-8 clipes por anúncio + cobertura de stock.

---

## 🎬 HOOK 1 — "LA CONFESIÓN"

**VO de referência:** *"El día que mi madre dejó de reconocerme... lloré toda la noche. Al día siguiente, no fui al psicólogo. No fui al médico. Hice esto."*

**Duração final:** 18-22s · **Necessário:** 6 clipes (~3s cada) + 1 end card

### Clipe 1 (0-3s) — Estabelecimento atmosférico

**Prompt Veo 3.1 / Runway Gen-3:**
```
A close-up of a half-empty coffee cup on a wooden kitchen table, cold steam barely visible, soft morning window light from the left, slow push-in, shallow depth of field, warm beige tones, 16mm film grain, melancholic mood, 9:16 vertical, no people
```

**Stock alternativo (Pexels/Storyblocks):**
- `cold coffee cup window light morning`
- `empty cup wooden table sunlight`
- `slow zoom cup steam cinematic`

### Clipe 2 (3-6s) — Rosto pensativo (sem falar)

**Prompt Kling 2.0 (melhor para rostos):**
```
Close-up portrait of a 55-year-old Latin American woman with graying hair, looking down at her hands, tired sad expression, no smile, soft window light from the side, sitting in a home kitchen, natural skin texture, no makeup, warm earth tones, shallow depth of field, slow micro-movements, cinematic 9:16 vertical
```

**Stock alternativo:**
- `pensive woman 50s window sad`
- `mature woman thinking kitchen warm light`
- `latin woman portrait reflective`

⚠ Stock costuma dar resultados melhores aqui — busque em Storyblocks com filtro "people" + "50+" + "vertical".

### Clipe 3 (6-9s) — Insert mãos no celular

**Prompt:**
```
Top-down close shot of mature woman's hands holding a smartphone, scrolling slowly with thumb, screen blurred (no readable text), wooden table background, soft warm afternoon light, 9:16 vertical, cinematic, no face visible
```

**Stock alternativo:**
- `hands scrolling phone top down`
- `mother hands smartphone search`

### Clipe 4 (9-12s) — Mão pegando o caderno

**Prompt:**
```
Close shot of hands picking up a printed binder from a kitchen counter, cover shows "Sistema" partially visible but blurred, warm light, slow gentle movement, no face, 9:16 vertical, cinematic shallow depth
```

**Alternativa (mais segura):** gere uma imagem do produto impresso com IA estática (Midjourney/DALL-E) + anime no Runway "Image to Video" com prompt:
```
Slow hand reaching for printed booklet on table, warm afternoon light, gentle movement
```

### Clipe 5 (12-15s) — Mãe sorrindo (delicado)

**Stock (recomendado fortemente):**
- `senior woman gentle smile daughter`
- `elderly mother smiling soft natural light`
- `grandmother peaceful expression`

**Por que stock e não IA aqui:** mostrar 2 pessoas interagindo (mãe+filha) com sorriso genuíno + sem ser cringey = IA ainda escorrega. Stock entrega em 5 minutos de busca.

### Clipe 6 (15-18s) — End card

**Estático no Figma/Canva.** Não usar IA.
- Fundo: bege `#f5f0e8`
- Mockup do livro centralizado (gere com Midjourney: `printed book mockup beige background top down, "Sistema para hijos cuidadores" cover, warm minimalist`)
- Texto: "Sistema para hijos cuidadores · Garantía 30 días"
- Botão CTA roxo `#7c3aed`

### Música (não muda da versão anterior)

- Piano solo melódico, 60-70 BPM, tom menor (Am/Em)
- Busca: "*sad slow piano emotional reflective*" no Pixabay Music ou Uppbeat
- Volume -24dB durante VO, sobe pra -14dB no end card
- Entra em 0.5s, crescendo sutil entre 5-8s

### Legendas (idêntico ao briefing anterior)

- Fonte: Inter Bold 92px
- Branco com stroke 4px preto
- Palavras-chave em roxo `#7c3aed` ou amarelo `#fbbf24`
- Posição: 22% do topo
- Animação: fade in/out 200ms

---

## 🎬 HOOK 2 — "LO QUE EL GERIATRA NO TE DIJO"

**VO:** *"Tres geriatras. Cuatro mil pesos en consultas. Y nadie me dijo lo más simple: cómo pasar el día con él. Hasta que encontré este sistema."*

**Duração final:** 22-26s · **Necessário:** 6-7 clipes + end card

### Clipe 1 (0-2s) — Receitas médicas

**Prompt:**
```
Top-down shot of multiple medical prescriptions and printed exam papers spread on a wooden desk, slight overlap, soft natural light, no readable text, beige/cream tones, slow gentle camera movement, 9:16 vertical, documentary style
```

**Stock alternativo:**
- `medical prescription papers desk top down`
- `medical exam reports overhead shot`
- `doctor receipts spread out paperwork`

### Clipe 2 (2-4.5s) — Dinheiro/calculadora

**Prompt:**
```
Close-up of hand using calculator on wooden table, then hands counting bills (use neutral generic banknotes, not Argentine pesos specifically), soft warm light, frustration mood, 9:16 vertical
```

**Stock alternativo (melhor):**
- `hand using calculator stressed`
- `counting money frustrated`
- `cash on table top down`

⚠ Evite mostrar moeda específica (peso argentino, real, etc.) — o ad vai pra múltiplos países. Use notas genéricas/euros/USD.

### Clipe 3 (4.5-9s) — Talking head SEM falar (look frustrado)

**Stock (NECESSÁRIO):**
- `latin woman frustrated 50s sitting`
- `mature woman stressed thinking`
- `mother sighing kitchen sad`

⚠ Não use IA aqui. Você precisa de uma face sustentada por 4.5 segundos com expressão consistente — IA dá glitch. Stock resolve.

### Clipe 4 (9-13s) — Continua talking head + gesto

**Stock:**
- Continuar com o mesmo clip estendido, ou
- Buscar: `woman explaining gesturing emotional`, `mature woman venting talking`

### Clipe 5 (13-17s) — Abrir caderno do produto

**Prompt Runway "Image to Video":**
```
Start image: top-down printed binder closed on wooden table
Motion: hand reaches in, opens the binder slowly, reveals printed activity page
```

Ou stock: `hand opening journal book top down`

### Clipe 6 (17-20s) — Mãe + filha fazendo atividade

**Stock (recomendado):**
- `mother daughter activity table puzzle`
- `senior woman puzzle game family`
- `caregiver elderly woman activity`
- `dementia activity engagement`

⚠ Storyblocks tem categoria "Dementia Care" — vale a procura.

### Clipe 7 (20-23s) — End card

Idêntico ao Hook 1.

### Música

- Piano + violino sutil, 75-85 BPM
- Tom menor com resolução maior no final
- Busca: "*thoughtful piano violin reflective*" no Uppbeat ou Artlist
- Volume -22dB durante VO, -12dB no end card
- Drama building no "Y nadie me dijo..." (17s) peak em 17s

### Legendas

- Estilo "newspaper highlight"
- Background bar `rgba(0,0,0,0.85)` padding 12px 20px
- Texto branco bold, palavras-chave em laranja `#f59e0b`
- Posição: 65% do topo (abaixo do peito da pessoa)

---

## 🎬 HOOK 3 — "NO ES TU CULPA"

**VO:** *"Sabes que debería moverse. Estimularse. Pero no sabes qué hacer... y todo lo que probaste no funcionó. No es tu culpa. Es que nadie te enseñó."*

**Duração final:** 25-30s · **Necessário:** 7-8 clipes + end card

### Clipe 1 (0-3s) — Idoso apático no sofá ⭐ (clipe-âncora)

**Prompt Veo 3.1 (este é o hero shot):**
```
Wide shot of empty living room interior, elderly woman in her 80s sitting alone on a couch, looking blankly at a turned-on TV (no screen content visible), cold afternoon light from window, lonely atmosphere, melancholic mood, static camera, 9:16 vertical, 16mm film grain, no movement from subject, documentary style
```

**Stock alternativo (MUITO bom para este shot):**
- `elderly woman alone sofa watching tv`
- `senior depression sitting alone living room`
- `lonely grandmother couch afternoon`
- `dementia patient passive sitting`

⚠ Pexels tem ótimas opções gratuitas para esse plano específico. Vale procurar 30min.

### Clipe 2 (3-6s) — Rosto da filha suspirando

**Prompt Kling 2.0:**
```
Close-up portrait of a 50-year-old Latin American woman watching her elderly parent off-screen, looking heavy and tired, slow blink, soft exhale, no words, gentle window light from the right, warm earth tones, shallow depth of field, micro-movement only, cinematic 9:16 vertical
```

**Stock:**
- `daughter caregiver tired watching parent`
- `worried woman observing elderly mother`

### Clipe 3 (6-9s) — Mãos no celular pesquisando

**Prompt:** mesmo do Hook 1 Clipe 3.

**Stock:**
- `hands searching phone google blurred`
- `mature woman researching smartphone night`

### Clipe 4 (9-13s) — Close frustração

Reutilizar partes do Hook 2 Clipe 3 ou:

**Stock:**
- `mature woman frustrated head in hands`
- `tired caregiver portrait emotional`

### Clipe 5 (13-16s) — Mão da filha no joelho da mãe

**Stock (NECESSÁRIO):**
- `hand on knee elderly mother comfort`
- `daughter holding mother hand sofa`
- `caregiver touch comfort senior`

⚠ Pegou IA, escorregou. Stock resolve em 1 busca.

### Clipe 6 (16-19.5s) ⭐ MOMENTO CHAVE "No es tu culpa"

**Prompt Veo 3.1 para um close emocional sustentado:**
```
Extreme close-up portrait of a 50-year-old Latin American woman, looking directly into camera lens, soft tear in one eye barely forming, calm acceptance expression, warm window light from left, soft focus, slow micro-movement of eyes, no words spoken, vertical 9:16, 16mm cinematic
```

**Stock alternativo:**
- `mature woman tear close up gentle`
- `emotional portrait acceptance peace`

**🎵 Detalhe crítico de áudio:** PAUSA TOTAL da música 0.5s antes desta legenda. O silêncio dá o impacto.

### Clipe 7 (19.5-22.5s) — Pegando o caderno

**Prompt:**
```
Slow movement of hand reaching for printed binder on coffee table, gentle warm afternoon light, peaceful mood (not desperate), 9:16 vertical, shallow focus
```

### Clipe 8 (22.5-26s) — Mãe começando a participar

**Stock (recomendado):**
- `elderly woman engaged activity smile`
- `senior dementia engaged caregiver`
- `grandmother participating activity hopeful`

### Clipe 9 (26-29s) — End card

Idêntico aos anteriores.

### Música

- Piano ambient + leve reverb
- Tom menor que vira maior no "No es tu culpa"
- Busca: "*ambient piano warm forgiveness gentle*"
- Volume -25dB durante VO
- **CORTE TOTAL** da música 0.5s antes do "No es tu culpa" (16s) — silêncio = impacto
- Música retorna suave após em tom mais resolvido
- NÃO usar percussão/drums

### Legendas

- Estilo "soft pillow"
- Texto branco com glow suave `#ffffff80`
- Sem stroke duro — usar shadow `0 0 20px rgba(0,0,0,0.6)`
- Fonte: Inter **Medium** (não Bold — tom menos agressivo)
- Para "No es tu culpa": escala 1.4x, fade-in 400ms, cor rosa-clara `#f9a8d4` ou roxo médio `#a78bfa`
- Letter-spacing: 0.02em
- Posição: 30% do topo

---

## 🎨 End card — único para os 3 anúncios

**Crie no Figma ou Canva (não usar IA — precisa ser pixel-perfect):**

```
Dimensão: 1080×1920 (9:16)
Fundo: cor sólida #f5f0e8 (bege quente)

Mockup do livro centralizado (gere com Midjourney):
  Prompt MJ: "printed coil-bound notebook mockup, beige cover with subtle 
  texture, lying flat on cream surface, soft overhead lighting, minimalist, 
  warm tones, photorealistic, --ar 9:16"

Texto abaixo:
  Linha 1 (Inter Bold 70px): "Sistema para hijos cuidadores"
  Divisor: linha 2px de 60px largura, cor #7c3aed
  Linha 2 (Inter Regular 45px): "+80 actividades · 15 min/día"
  Linha 3 (Inter Regular 45px): "Garantía 30 días"

Botão CTA:
  Fundo: #7c3aed
  Texto: "MÁS INFORMACIÓN →" Inter Bold 38px branco
  Padding: 18px 32px
  Border-radius: 12px

Duração no vídeo: 2-3s estático
```

---

## 🛠 Ferramentas — pilha sugerida

### Geração de vídeo IA (escolha 1-2)

| Tool | Preço | Forte em | Limite |
|---|---|---|---|
| **Google Veo 3.1** | ~US$ 0.50/clipe (via Vertex AI) ou Gemini Advanced | Realismo cinemato, ambientes | 8s máx |
| **Kling 2.0** | US$ 10/mês | Rostos humanos naturais | 5-10s |
| **Runway Gen-3** | US$ 12/mês | Image-to-video, controle de movimento | 10s |
| **Sora** | ChatGPT Plus | Cinemático, mas filas | 20s |
| **Pika 1.5** | US$ 8/mês | Estilo artístico, prompts simples | 4-8s |
| **Luma Dream Machine** | Free + paid | Fluido natural | 5s |

**Recomendação:** comece com **Kling 2.0** (US$10/mês ilimitado, melhor relação rosto-humano-IA) + **Veo 3.1** para ambientes.

### Stock de vídeo (escolha 1)

| Tool | Preço | Foco |
|---|---|---|
| **Pexels** | FREE | Bom para inserts simples |
| **Storyblocks** | US$ 30/mês | Biblioteca grande + categoria "dementia care" |
| **Artgrid** | US$ 25/mês | Cinematic premium |
| **Envato Elements** | US$ 17/mês | Vasto, qualidade média-boa |

**Recomendação:** **Pexels** primeiro (grátis). Se faltar específico → **Storyblocks** por 1 mês.

### Stock de imagem (para mockups + end card)

- **Midjourney** (US$10/mês) — gera mockup do livro
- **Ideogram** — bom para texto em imagem (se quiser uma cartilha "fake")
- **Freepik** — ícones e elementos gráficos

### Geração de voz

- **ElevenLabs** (US$ 5-22/mês) — VOs do `VOZ-ELEVENLABS.txt`
- Voz feminina LATAM 40-55, stability 45-55

### Edição final

- **CapCut Pro** (mobile + desktop) — corte rápido, auto-captions em ES, fácil pra iniciante
- **DaVinci Resolve** (free) — controle pro de cor + áudio
- **Premiere Rush** (mobile) — assinatura Adobe

### Música

- **Pixabay Music** — free
- **Uppbeat** — free com licença
- **Artlist** (US$ 12/mês) — premium, sem royalties

---

## 📋 Workflow recomendado por anúncio

```
1. Gere VO no ElevenLabs (5 min)
2. Liste shot-by-shot necessários (já está neste briefing)
3. Para cada shot:
   3a. Tente gerar com IA → 3-5 variações até achar uma boa
   3b. Se IA falhar (humano interagindo, sustentação >5s, dificuldade) → pegue stock
4. Gere mockup do livro no Midjourney (1 imagem)
5. Crie end card no Figma/Canva (10 min)
6. Importe tudo no CapCut/Premiere
7. Corte sincronizando com VO
8. Adicione legendas (auto-caption + ajuste manual de estilo)
9. Mixe música -22dB durante VO, ducking automático
10. Export 1080×1920 H.264 30fps
```

**Tempo estimado por anúncio:** 3-5h se você for iniciante em IA video. 1.5-2h se já tiver fluência.

---

## ⚠ Coisas que vão dar errado (preventivamente)

1. **IA gera idoso "muito jovem"** — sempre adicione idade explícita no prompt (`"80-year-old elderly woman"` + `"visible wrinkles, gray hair"`).
2. **IA gera latino "anglo"** — adicione `"Latin American"` ou `"Hispanic features"` + `"warm skin tone"`.
3. **Texto em objetos IA fica ilegível/distorcido** — não tente colocar texto real em prop. Use blur ou texto genérico.
4. **Cores entre IA e stock divergem** — color grade tudo no final (DaVinci) com mesmo LUT/preset. Look "warm documentary" funciona.
5. **Lip-sync impossível** — nunca mostre boca falando + VO. Sempre boca fechada ou fora de quadro durante VO.
6. **Aspect ratio errado** — alguns geradores entregam 16:9 mesmo pedindo 9:16. Crop center + reframe no edit.

---

## 🔁 Quando 1 hook vencer — escalando com IA

Vantagem de pipeline IA: dá pra gerar 10 variações por semana com 1/4 do custo da gravação. Quando 1 hook bater 2.5x ROAS por 3 dias:

1. **Variação de cenário** — re-rode o mesmo prompt trocando `kitchen` → `bedroom` / `garden` / `balcony`
2. **Variação de pessoa** — mude idade (45/55/65) ou perfil (mulher latina → homem brasileiro)
3. **Variação de luz** — `morning light` → `golden hour` → `evening lamp`
4. **Variação de país** — adapte VO no ElevenLabs com voz de outro país (ES vs MX vs AR)
5. **Variação de tom emocional** — `melancholic` → `hopeful` → `defiant`

Mantenha **música igual** entre variações do mesmo hook → reconhecimento de marca.
