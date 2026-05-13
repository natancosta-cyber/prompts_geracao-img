import { useState } from "react";

const prompts = [
  // === FOTO DE PRODUTO (1-6) ===
  {
    id: 1,
    cat: "produto",
    catLabel: "📦 Foto de Produto",
    title: "Fundo branco premium (padrão marketplace)",
    prompt: `Professional product photograph of [SEU PRODUTO] on a pure white background (#FFFFFF). Studio lighting with soft, even illumination to eliminate harsh shadows. Position the product at a slight 30-degree angle to show dimension. High detail, sharp focus throughout, showing clear material texture. Photorealistic rendering for high-end e-commerce use.`,
    emailTip: "Use como hero image em emails de lançamento. Funciona perfeitamente em fundo branco do email. Adicione o preço e CTA em HTML ao redor.",
    tags: ["marketplace", "amazon", "shopify"],
  },
  {
    id: 2,
    cat: "produto",
    catLabel: "📦 Foto de Produto",
    title: "Produto com textura e material premium",
    prompt: `Minimalist glass perfume bottle, studio product photography, softbox lighting with smooth shadows, placed on reflective white surface, high detail glass material with subtle refraction, clean background, premium commercial style, sharp focus, no dust, no scratches, no text.`,
    emailTip: "Ideal para email de 'produto em destaque'. O reflexo na superfície cria sofisticação visual mesmo em telas pequenas de mobile.",
    tags: ["luxo", "beleza", "cosmético"],
  },
  {
    id: 3,
    cat: "produto",
    catLabel: "📦 Foto de Produto",
    title: "Embalagem com texto legível",
    prompt: `A close-up of a brown kraft paper coffee bag standing upright. The label is perfectly legible and says "MIDNIGHT ROAST" in bold black vintage typography. Subtitle reads "Single Origin · Dark Roast". Small coffee beans scattered around the base. Realistic paper texture. Studio lighting, warm tones. No extra text, no watermark.`,
    emailTip: "Perfeito para email de 'Novo Produto'. A tipografia legível do Image 2 elimina a necessidade de sobrepor texto no Canva. O nome do produto já sai na imagem.",
    tags: ["embalagem", "packaging", "alimentos"],
  },
  {
    id: 4,
    cat: "produto",
    catLabel: "📦 Foto de Produto",
    title: "Flat-lay overhead de múltiplos produtos",
    prompt: `Overhead flat-lay product arrangement of a complete skincare routine: cleanser, toner, serum, moisturizer, and sunscreen. All in matching minimalist white and gold packaging on a pale marble surface. Organized in a neat diagonal line. Soft natural window light from the top-left. Fresh eucalyptus sprigs as props. Clean, editorial e-commerce style. No text overlay needed.`,
    emailTip: "Hero image para emails de 'kit completo' ou 'rotina'. O layout overhead funciona bem em largura de 600px de email. Mostra toda a linha de uma vez.",
    tags: ["skincare", "kit", "linha completa"],
  },
  {
    id: 5,
    cat: "produto",
    catLabel: "📦 Foto de Produto",
    title: "Macro close-up de textura",
    prompt: `Extreme macro close-up of [SEU PRODUTO], shot with a 100mm macro lens at f/2.8. Dramatic rim lighting from behind highlighting the surface texture and material quality. Visible material details: [descreva textura: weave of fabric / grain of leather / brushed metal / glass refraction]. Dark moody background. Premium tech/luxury product photography aesthetic.`,
    emailTip: "Use em sequência no email: primeiro o macro (gera curiosidade), depois a foto completa do produto. Cria um efeito de 'reveal' que aumenta o scroll.",
    tags: ["detalhes", "textura", "premium"],
  },
  {
    id: 6,
    cat: "produto",
    catLabel: "📦 Foto de Produto",
    title: "Diorama miniatura criativo",
    prompt: `A hyper-realistic miniature diorama product advertisement featuring an oversized [SEU PRODUTO] placed on a circular platform. Tiny figurine construction workers in yellow coveralls climbing scaffolding around the product, painting it with rollers, operating a tower crane. Tilt-shift lens effect, warm studio lighting, playful but premium feel. No watermark.`,
    emailTip: "Excelente para email de 'pré-lançamento' ou 'em construção'. Visual diferenciado que gera altíssimo engajamento e compartilhamento. Funciona como teaser.",
    tags: ["criativo", "viral", "lançamento"],
  },
  // === LIFESTYLE (7-12) ===
  {
    id: 7,
    cat: "lifestyle",
    catLabel: "🌿 Lifestyle & Contexto",
    title: "Produto em contexto de uso real",
    prompt: `Photorealistic lifestyle photograph of a woman in her late 30s using [SEU PRODUTO] in a bright, modern Scandinavian kitchen at morning. Natural window light, soft shadows. She has a relaxed, genuine expression. Shot on 35mm lens, wide-angle environmental portrait. Unposed feeling, documentary style. Visible countertop details: fresh fruit, ceramic mug, linen towel. No commercial styling, no over-retouching.`,
    emailTip: "Hero image para emails 'estilo de vida'. A naturalidade gera confiança. Funciona especialmente bem em emails para público feminino 25-45 anos.",
    tags: ["lifestyle", "uso real", "confiança"],
  },
  {
    id: 8,
    cat: "lifestyle",
    catLabel: "🌿 Lifestyle & Contexto",
    title: "UGC / estilo casual para ads",
    prompt: `Casual handheld iPhone photo style: a person's hand holding [SEU PRODUTO] against a slightly cluttered, real-looking background (coffee shop table with napkins, receipts). Slightly overexposed, natural smartphone camera quality. The product label is readable. Authentic, unpolished, user-generated content aesthetic. No studio lighting.`,
    emailTip: "Ideal para emails de 'prova social' ou reviews. O estilo UGC gera 2-3x mais cliques que fotos de estúdio perfeitas em emails promocionais segundo testes A/B.",
    tags: ["UGC", "social proof", "ads"],
  },
  {
    id: 9,
    cat: "lifestyle",
    catLabel: "🌿 Lifestyle & Contexto",
    title: "Produto em ambiente sazonal (verão)",
    prompt: `Bright summer lifestyle scene: [SEU PRODUTO] placed on a white wooden deck table next to a pool. Condensation droplets on the product surface. Tropical plants in background, clear blue sky. Bright, airy natural sunlight with lens flare. A straw hat and sunglasses nearby as props. Fresh, vacation mood. Photorealistic, no watermark.`,
    emailTip: "Para campanhas sazonais de verão. Troque as props para adaptar: inverno (cobertor, chocolate quente), outono (folhas, cachecol), primavera (flores, jardim).",
    tags: ["sazonal", "verão", "campanha"],
  },
  {
    id: 10,
    cat: "lifestyle",
    catLabel: "🌿 Lifestyle & Contexto",
    title: "Produto em ambiente sazonal (inverno/natal)",
    prompt: `Cozy winter flat-lay: [SEU PRODUTO] centered on a dark wood surface surrounded by pine branches, cinnamon sticks, dried orange slices, and a small candle. Warm candlelight mixed with soft overhead light. Knitted cream fabric in the corner. Rich, warm color palette: deep greens, golds, burgundy. Editorial holiday campaign photography. No text.`,
    emailTip: "Template de Natal/inverno. Funciona como hero em emails de Black Friday, Natal, e Ano Novo. Sensação 'premium gift' que justifica valor percebido.",
    tags: ["natal", "inverno", "gift guide"],
  },
  {
    id: 11,
    cat: "lifestyle",
    catLabel: "🌿 Lifestyle & Contexto",
    title: "Modelo vestindo produto (moda)",
    prompt: `High fashion editorial photoshoot. A confident woman wearing [DESCREVA A PEÇA: cor, material, corte] walking through a sunlit cobblestone street in Lisbon. Shot on 135mm lens, compressed perspective. Shallow depth of field, background bokeh of pastel-colored buildings. Golden hour side lighting with warm tones. Natural skin texture, visible fabric drape and movement. No over-retouching, no extra logos.`,
    emailTip: "Para emails de moda/vestuário. Gere a mesma modelo em 3-4 peças diferentes para uma sequência 'Looks da Semana' num único email. Consistência visual = mais cliques.",
    tags: ["moda", "vestuário", "editorial"],
  },
  {
    id: 12,
    cat: "lifestyle",
    catLabel: "🌿 Lifestyle & Contexto",
    title: "Antes e depois (split)",
    prompt: `A before-and-after comparison image split vertically with a thin white divider line. Left side labeled "BEFORE" in small gray sans-serif at top: [descreva estado antes]. Right side labeled "AFTER" in small gray sans-serif at top: [descreva estado depois]. Same lighting angle on both sides. Same camera position. Clean, clinical, believable difference. Photorealistic. No exaggeration.`,
    emailTip: "Altíssima conversão em emails de skincare, fitness, organização, limpeza. O formato split é auto-explicativo e funciona sem texto adicional.",
    tags: ["antes/depois", "transformação", "resultados"],
  },
  // === BANNERS & ADS (13-18) ===
  {
    id: 13,
    cat: "banner",
    catLabel: "🎯 Banners & Ads Criativos",
    title: "Banner de promoção com texto",
    prompt: `E-commerce promotional banner, horizontal 16:9 aspect ratio. Left side: hero product shot of [SEU PRODUTO] with soft shadow on clean background. Right side: bold headline "UP TO 50% OFF" in large white sans-serif on a deep coral (#E8544E) background. Subtext: "Limited Time Only" in smaller weight below. Clean geometric accent shapes. Modern, high-converting ad layout. No watermark, no extra text.`,
    emailTip: "Banner perfeito para header de email promocional. O texto '50% OFF' sai legível direto na imagem — sem precisar de live text em HTML. Dimensione para 600x300px.",
    tags: ["promoção", "sale", "banner"],
  },
  {
    id: 14,
    cat: "banner",
    catLabel: "🎯 Banners & Ads Criativos",
    title: "Social media ad quadrado",
    prompt: `A square social media ad for a skincare brand. Minimalist composition: a single [SEU PRODUTO] centered on a pale blush pink background. Clean, editorial studio lighting. EXACT TEXT: "YOUR SKIN. SIMPLIFIED." centered below the product in black thin sans-serif. Small logo placeholder in bottom-right corner. No extra decoration, no watermark.`,
    emailTip: "Funciona como bloco de conteúdo dentro do email. O formato quadrado é ótimo para layout mobile-first. Use como card clicável.",
    tags: ["social media", "instagram", "ads"],
  },
  {
    id: 15,
    cat: "banner",
    catLabel: "🎯 Banners & Ads Criativos",
    title: "FOOH (Fake Out-of-Home) viral",
    prompt: `Photorealistic fake-out-of-home advertisement: a giant [SEU PRODUTO] rising from the ground in a busy city square (Times Square / Shibuya / Paulista Avenue). Pedestrians walking by look up in amazement, taking phone photos. Natural daylight, realistic shadows on the ground. Product label text is readable. Believable city scale, no extra logos. Shot as if captured by a passerby's phone at eye level.`,
    emailTip: "Viral por natureza. Use como hero em emails de 'lançamento épico'. O formato FOOH gerou milhões de views em 2025-2026 no TikTok/Reels. Transfere esse engajamento pro email.",
    tags: ["viral", "FOOH", "criativo"],
  },
  {
    id: 16,
    cat: "banner",
    catLabel: "🎯 Banners & Ads Criativos",
    title: "Comparativo de cores/variantes",
    prompt: `Product color comparison layout: five [SEU PRODUTO] arranged in a horizontal row on a clean white surface. Each in a different color: [Midnight Black, Ocean Blue, Forest Green, Dusty Rose, Cloud White]. Even spacing between each. Same angle, same lighting for all. Small color-name label below each in clean sans-serif. Studio product photography, overhead slight angle. No background distractions.`,
    emailTip: "Essencial para emails de 'escolha sua cor'. Um único visual substitui 5 fotos separadas. Cada cor vira clicável com image map ou CTA abaixo.",
    tags: ["variantes", "cores", "comparativo"],
  },
  {
    id: 17,
    cat: "banner",
    catLabel: "🎯 Banners & Ads Criativos",
    title: "Landing page hero section",
    prompt: `A website hero section design, horizontal 16:9 format. Left side: large bold headline "ADVENTURE AWAITS" in white serif font. Subtext: "Explore our new outdoor collection" in light gray below. A clear rounded button with text "SHOP NOW". Right side: a lifestyle photo of [SEU PRODUTO] being used outdoors in a dramatic mountain landscape at golden hour. Blended seamlessly. Modern web design aesthetic, clean layout.`,
    emailTip: "Use como hero image clicável do email, linkando para a landing page real. A consistência visual entre email e LP aumenta a conversão em até 20%.",
    tags: ["landing page", "hero", "conversão"],
  },
  {
    id: 18,
    cat: "banner",
    catLabel: "🎯 Banners & Ads Criativos",
    title: "Newsletter header / digest",
    prompt: `Professional email header banner, horizontal 3:1 ratio (600x200px proportions). Gradient background from deep navy (#1A1A2E) to rich purple (#4A1942). EXACT TEXT: "WEEKLY FINDS" in white bold sans-serif on the left. Subtitle: "Curated picks just for you" in light gray. Subtle geometric pattern overlay. Small brand icon placeholder on the far right. Clean, modern, premium newsletter aesthetic. No photos, text-focused.`,
    emailTip: "Header reutilizável para newsletter semanal. Gere variantes por semana trocando apenas o texto: 'FRIDAY PICKS', 'MONTHLY DIGEST', 'FLASH SALE'. Consistência visual sem monotonia.",
    tags: ["newsletter", "header", "digest"],
  },
  // === EMAIL MARKETING ESPECÍFICO (19-24) ===
  {
    id: 19,
    cat: "email",
    catLabel: "📧 Email Marketing",
    title: "Hero de email de boas-vindas",
    prompt: `Warm, inviting product scene for a welcome email. A beautifully wrapped gift box (cream paper, satin ribbon) slightly open, revealing [SEU PRODUTO] inside. Surrounded by small dried flowers and tissue paper. Soft, warm studio lighting. The feeling of receiving a special delivery. Clean background with subtle texture. Photorealistic, overhead angle. No text overlay.`,
    emailTip: "Email de boas-vindas (welcome series). A sensação de 'presente' ativa reciprocidade psicológica. Aumente com cupom de primeira compra logo abaixo da imagem.",
    tags: ["welcome", "boas-vindas", "onboarding"],
  },
  {
    id: 20,
    cat: "email",
    catLabel: "📧 Email Marketing",
    title: "Abandono de carrinho (urgência)",
    prompt: `Dramatic product spotlight: [SEU PRODUTO] illuminated by a single focused beam of light against a completely dark background. The product appears to glow. A subtle clock shadow or hourglass shadow cast on the dark surface beside it, suggesting time passing. Cinematic, moody, high-contrast lighting. The product is the only bright element. Premium, theatrical staging. No text.`,
    emailTip: "Email de carrinho abandonado. A dramaticidade visual cria FOMO. Combine com subject line 'Seu [produto] está esperando' e countdown timer em HTML.",
    tags: ["carrinho abandonado", "urgência", "FOMO"],
  },
  {
    id: 21,
    cat: "email",
    catLabel: "📧 Email Marketing",
    title: "Recompra / reabastecimento",
    prompt: `Clean overhead flat-lay: an almost-empty container of [SEU PRODUTO] next to a brand new, sealed replacement. The empty one slightly tilted showing it's nearly used up. The new one pristine and full. Both on a clean marble surface. Bright, clean lighting. A small green arrow icon drawn between them suggesting 'refill'. Simple, clear visual message. No clutter.`,
    emailTip: "Email automático de recompra (ex: 30 dias após compra de skincare de 30ml). O visual 'quase vazio → novo' é universalmente compreensível sem texto.",
    tags: ["recompra", "refil", "automação"],
  },
  {
    id: 22,
    cat: "email",
    catLabel: "📧 Email Marketing",
    title: "Testemunho / review visual",
    prompt: `A realistic smartphone screen showing a 5-star product review. The phone is held at a slight angle on a wooden desk. Screen shows: 5 gold stars, review text "Best purchase I made this year. The quality is incredible and shipping was fast." Username "Sarah M." with a small verified badge. Below: a thumbnail of [SEU PRODUTO]. Photorealistic iPhone screenshot, casual desk setting. Natural light.`,
    emailTip: "Seção de 'O que dizem nossos clientes' no email. O formato de screenshot é mais crível que texto puro. Gere 3-4 reviews diferentes para rotação em emails.",
    tags: ["review", "testemunho", "prova social"],
  },
  {
    id: 23,
    cat: "email",
    catLabel: "📧 Email Marketing",
    title: "Contagem regressiva / lançamento",
    prompt: `Dark, atmospheric product teaser: [SEU PRODUTO] partially hidden in dramatic fog/mist, only the silhouette and key features visible. Dramatic backlight creating a glowing halo effect. EXACT TEXT: "COMING SOON" in large thin uppercase white letters at the top. Date "06.15.2026" in small text below. Cinematic, mysterious, high-end product launch aesthetic. Dark background, no other text.`,
    emailTip: "Primeiro email da série de lançamento (3-email drip: teaser → reveal → disponível). O mistério gera reply e forward entre amigos.",
    tags: ["lançamento", "teaser", "coming soon"],
  },
  {
    id: 24,
    cat: "email",
    catLabel: "📧 Email Marketing",
    title: "Bundle / combo de produtos",
    prompt: `Elegant product bundle arrangement: three complementary products [DESCREVA OS 3 PRODUTOS] arranged in a triangular composition on a clean surface. Connected by subtle dotted lines suggesting they work together. A small tag reads "THE COMPLETE SET" in clean typography. Each product has a tiny label: "STEP 1", "STEP 2", "STEP 3". Studio lighting, editorial product photography. Clean, organized, premium. No extra decoration.`,
    emailTip: "Email de upsell / cross-sell. O layout 'Step 1, 2, 3' educa sobre a rotina completa e justifica o bundle. AOV (average order value) aumenta 30-40% com bundles visuais.",
    tags: ["bundle", "upsell", "cross-sell"],
  },
  // === TEMPLATES ESPECIALIZADOS (25-30) ===
  {
    id: 25,
    cat: "especial",
    catLabel: "⭐ Templates Especializados",
    title: "Página de produto estilo Taobao/Shopee",
    prompt: `Vertical e-commerce product detail page (long-image format). Product: "[NOME DO PRODUTO]". Top section: hero shot on white background, centered. Second section: 4-grid lifestyle photos of the product in different use scenarios. Third section: feature callouts with icons (list 4-5 key features). Fourth section: size chart or specs. Bottom: bold CTA banner in red reading "ADD TO CART". Tightly packed editorial e-commerce layout, clean and professional.`,
    emailTip: "Use como inspiração para o layout completo do email. Cada 'seção' vira um bloco separado no email HTML. O formato longo funciona em mobile scroll.",
    tags: ["página produto", "detail page", "shopee"],
  },
  {
    id: 26,
    cat: "especial",
    catLabel: "⭐ Templates Especializados",
    title: "Infográfico de benefícios do produto",
    prompt: `Clean modern infographic: "5 REASONS TO LOVE [SEU PRODUTO]". Vertical layout with 5 numbered sections, each with a small circular icon and a one-line benefit description. Icons represent: [liste 5 benefícios]. Color palette: [sua cor principal] with white and light gray. Magazine-quality editorial layout, clear spacing, readable sans-serif labels. Footer: "Learn more at [seusite.com]". No clutter, no stock photo look.`,
    emailTip: "Bloco educacional para emails de nurturing (meio de funil). Transforma features em benefícios visualmente. Funciona melhor que bullet points em texto.",
    tags: ["infográfico", "benefícios", "educacional"],
  },
  {
    id: 27,
    cat: "especial",
    catLabel: "⭐ Templates Especializados",
    title: "Identidade visual mockup completo",
    prompt: `Brand visual identity mockup for "[NOME DA MARCA]". Brand palette: [COR 1 hex], [COR 2 hex], [COR 3 hex]. Scene: 45-degree overhead flat-lay on [superfície]. Items arranged neatly: stack of business cards (front shows logo), branded packaging, product, branded tote bag, a thank-you card. Editorial advertising photography, high detail, soft morning light. Consistent brand application across all items.`,
    emailTip: "Use no email de 'conheça a marca' ou 'nossa história'. Mostra profissionalismo e consistência visual. Ideal para welcome series B2B.",
    tags: ["branding", "identidade", "marca"],
  },
  {
    id: 28,
    cat: "especial",
    catLabel: "⭐ Templates Especializados",
    title: "Grid de coleção (4 ou 6 produtos)",
    prompt: `A 2x3 product grid layout on a clean white background. Six different [TIPO DE PRODUTO] arranged in a perfect grid with equal spacing. Each item shot from the same angle with identical studio lighting. Subtle shadow beneath each. Clean, catalog-style e-commerce photography. No labels, no text, just the products. Professional, consistent, ready for a collection page.`,
    emailTip: "Seção 'Novidades' ou 'Best-sellers' do email. Cada produto do grid vira um link separado. O layout uniforme cria profissionalismo mesmo sem designer.",
    tags: ["coleção", "grid", "catálogo"],
  },
  {
    id: 29,
    cat: "especial",
    catLabel: "⭐ Templates Especializados",
    title: "Unboxing experience",
    prompt: `Top-down view of a premium unboxing experience in progress. A matte black box with magnetic closure, partially open, revealing [SEU PRODUTO] nestled in custom-molded white foam. Tissue paper with gold logo print folded back. A small 'Thank You' card visible. A hand is lifting the product out. Natural daylight from a window on the left. The scene is on a clean white desk. Photorealistic, aspirational, the moment of discovery.`,
    emailTip: "Email pós-compra 'Seu pedido está a caminho'. Cria antecipação sobre a experiência de receber. Reduz ansiedade de espera e pedidos de cancelamento.",
    tags: ["unboxing", "experiência", "pós-compra"],
  },
  {
    id: 30,
    cat: "especial",
    catLabel: "⭐ Templates Especializados",
    title: "Flash sale / oferta relâmpago",
    prompt: `Dynamic promotional graphic. EXACT TEXT: "FLASH SALE" in huge bold impact white letters with a glowing neon yellow (#FFEE00) outline, slightly tilted 3 degrees for energy. Subtitle: "24 HOURS ONLY" in smaller clean text below. Background: dark charcoal (#1A1A1A) with radiating light beams from behind the text. [SEU PRODUTO] floating in the bottom-right corner with a subtle glow effect. High-energy, urgency-driven, modern commercial graphic. No watermark.`,
    emailTip: "Email de flash sale. A energia visual do 'FLASH SALE' substitui qualquer template genérico. Combine com countdown timer real em HTML para máxima urgência.",
    tags: ["flash sale", "urgência", "promoção"],
  },
];

const categories = [
  { id: "all", label: "Todos (30)", icon: "📋" },
  { id: "produto", label: "Foto Produto", icon: "📦" },
  { id: "lifestyle", label: "Lifestyle", icon: "🌿" },
  { id: "banner", label: "Banners & Ads", icon: "🎯" },
  { id: "email", label: "Email Mkt", icon: "📧" },
  { id: "especial", label: "Especiais", icon: "⭐" },
];

const bestPractices = [
  {
    title: "Estrutura do Prompt (6 Slots)",
    items: [
      "1️⃣ Artefato: o que é (foto de produto, banner, flat-lay)",
      "2️⃣ Texto exato: entre ASPAS, fonte, cor, posição",
      "3️⃣ Layout: composição, ângulo, enquadramento",
      "4️⃣ Sistema visual: paleta de cores, estilo, mood",
      "5️⃣ Detalhes: iluminação, material, textura, câmera",
      "6️⃣ Restrições: sem watermark, sem texto extra, sem logo drift",
    ],
  },
  {
    title: "Texto na Imagem (>95% precisão)",
    items: [
      'Coloque o texto EXATO entre aspas: "SUMMER SALE"',
      "Use CAPS para nomes próprios e marcas",
      "Especifique: fonte, peso, cor, posição exata",
      'Adicione: "verbatim, perfectly legible, no extra text"',
      "Limite: funciona melhor com 1-5 palavras por elemento",
    ],
  },
  {
    title: "Dimensões para Email Marketing",
    items: [
      "Hero image: 600x300px (ratio 2:1) — padrão email",
      "Banner header: 600x200px (ratio 3:1) — topo do email",
      "Produto quadrado: 300x300px — funciona em grid 2 colunas",
      "Use quality=medium para emails (não precisa de 4K)",
      "Exporte em JPG comprimido (<200KB) para deliverability",
    ],
  },
  {
    title: "Workflow E-commerce + Email",
    items: [
      "Gere 5 variantes do mesmo produto (white, lifestyle, sazonal, UGC, comparativo) de uma vez",
      "Crie um 'template master' com sua paleta de cores hex para consistência",
      "Para A/B test: gere mesma cena com iluminação quente vs fria",
      "Reutilize: mesma foto de produto → edite fundo para cada estação",
      "Lote: use API com n=4 para gerar 4 variantes por prompt",
    ],
  },
];

function CopyBtn({ text }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }}
      style={{
        background: copied ? "#10b981" : "rgba(255,255,255,0.06)",
        color: copied ? "#fff" : "#94a3b8",
        border: "1px solid " + (copied ? "#10b981" : "rgba(255,255,255,0.1)"),
        borderRadius: 6,
        padding: "5px 14px",
        fontSize: 11,
        fontWeight: 700,
        cursor: "pointer",
        transition: "all 0.2s",
        letterSpacing: "0.5px",
      }}
    >
      {copied ? "✓ COPIADO" : "COPIAR PROMPT"}
    </button>
  );
}

function Tag({ children }) {
  return (
    <span
      style={{
        background: "rgba(99,102,241,0.12)",
        color: "#a5b4fc",
        padding: "2px 8px",
        borderRadius: 4,
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: "0.3px",
      }}
    >
      {children}
    </span>
  );
}

export default function App() {
  const [activeCat, setActiveCat] = useState("all");
  const [activeTab, setActiveTab] = useState("prompts");
  const [expandedId, setExpandedId] = useState(null);

  const filtered = activeCat === "all" ? prompts : prompts.filter((p) => p.cat === activeCat);

  return (
    <div style={{ fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif", background: "#080810", color: "#e2e8f0", minHeight: "100vh" }}>
      {/* HEADER */}
      <div style={{ background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #172554 100%)", padding: "28px 20px 18px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ fontSize: 11, fontWeight: 700, color: "#818cf8", letterSpacing: "2px", marginBottom: 6 }}>GPT IMAGE 2 × E-COMMERCE × EMAIL MARKETING</div>
          <h1 style={{ margin: 0, fontSize: 22, fontWeight: 900, color: "#f1f5f9", lineHeight: 1.3 }}>30 Prompts Profissionais</h1>
          <p style={{ margin: "6px 0 0", fontSize: 13, color: "#64748b", lineHeight: 1.5 }}>
            Cada prompt inclui dica de adaptação para email marketing. Copie, substitua [SEU PRODUTO] e use.
          </p>
        </div>
      </div>

      {/* TABS */}
      <div style={{ background: "#0c0c18", borderBottom: "1px solid rgba(255,255,255,0.06)", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", gap: 0 }}>
          {[
            { id: "prompts", label: "📋 30 Prompts" },
            { id: "praticas", label: "⚙️ Boas Práticas" },
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              style={{
                flex: 1,
                padding: "12px 0",
                background: "transparent",
                color: activeTab === t.id ? "#818cf8" : "#475569",
                borderBottom: activeTab === t.id ? "2px solid #818cf8" : "2px solid transparent",
                border: "none",
                borderBottomStyle: "solid",
                fontSize: 13,
                fontWeight: 700,
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "16px 16px 40px" }}>
        {/* === PROMPTS TAB === */}
        {activeTab === "prompts" && (
          <>
            {/* Category pills */}
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 20 }}>
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCat(c.id)}
                  style={{
                    background: activeCat === c.id ? "#312e81" : "rgba(255,255,255,0.04)",
                    color: activeCat === c.id ? "#c7d2fe" : "#64748b",
                    border: "1px solid " + (activeCat === c.id ? "#4338ca" : "rgba(255,255,255,0.06)"),
                    borderRadius: 20,
                    padding: "6px 14px",
                    fontSize: 12,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.15s",
                  }}
                >
                  {c.icon} {c.label}
                </button>
              ))}
            </div>

            {/* Prompt cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {filtered.map((p) => {
                const isOpen = expandedId === p.id;
                return (
                  <div
                    key={p.id}
                    style={{
                      background: "#0f0f1a",
                      borderRadius: 12,
                      border: "1px solid rgba(255,255,255,0.06)",
                      overflow: "hidden",
                      transition: "border-color 0.2s",
                      borderColor: isOpen ? "#4338ca" : "rgba(255,255,255,0.06)",
                    }}
                  >
                    {/* Card header */}
                    <div
                      onClick={() => setExpandedId(isOpen ? null : p.id)}
                      style={{
                        padding: "14px 16px",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                      }}
                    >
                      <span
                        style={{
                          background: "#1e1b4b",
                          color: "#818cf8",
                          fontWeight: 900,
                          fontSize: 11,
                          width: 28,
                          height: 28,
                          borderRadius: 8,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {p.id}
                      </span>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, color: "#e2e8f0" }}>{p.title}</div>
                        <div style={{ fontSize: 11, color: "#64748b", marginTop: 2 }}>{p.catLabel}</div>
                      </div>
                      <span style={{ color: "#475569", fontSize: 16, transition: "transform 0.2s", transform: isOpen ? "rotate(180deg)" : "rotate(0)" }}>▾</span>
                    </div>

                    {/* Expanded content */}
                    {isOpen && (
                      <div style={{ padding: "0 16px 16px" }}>
                        {/* Prompt */}
                        <div style={{ background: "rgba(255,255,255,0.03)", borderRadius: 8, padding: 14, marginBottom: 12, border: "1px solid rgba(255,255,255,0.04)" }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                            <span style={{ fontSize: 10, fontWeight: 700, color: "#818cf8", letterSpacing: "1px" }}>PROMPT</span>
                            <CopyBtn text={p.prompt} />
                          </div>
                          <p style={{ margin: 0, fontSize: 12, lineHeight: 1.8, color: "#94a3b8", fontFamily: "'SF Mono', 'Fira Code', monospace" }}>{p.prompt}</p>
                        </div>

                        {/* Email tip */}
                        <div style={{ background: "rgba(16,185,129,0.06)", borderRadius: 8, padding: 14, border: "1px solid rgba(16,185,129,0.12)" }}>
                          <div style={{ fontSize: 10, fontWeight: 700, color: "#10b981", letterSpacing: "1px", marginBottom: 6 }}>📧 ADAPTAÇÃO PARA EMAIL MARKETING</div>
                          <p style={{ margin: 0, fontSize: 12, lineHeight: 1.7, color: "#86efac" }}>{p.emailTip}</p>
                        </div>

                        {/* Tags */}
                        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 10 }}>
                          {p.tags.map((t) => (
                            <Tag key={t}>{t}</Tag>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </>
        )}

        {/* === BOAS PRÁTICAS TAB === */}
        {activeTab === "praticas" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {bestPractices.map((bp, i) => (
              <div key={i} style={{ background: "#0f0f1a", borderRadius: 12, padding: 18, border: "1px solid rgba(255,255,255,0.06)" }}>
                <h3 style={{ margin: "0 0 12px", fontSize: 15, fontWeight: 800, color: "#c7d2fe" }}>{bp.title}</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {bp.items.map((item, j) => (
                    <div key={j} style={{ fontSize: 13, lineHeight: 1.6, color: "#94a3b8", padding: "6px 12px", background: "rgba(255,255,255,0.02)", borderRadius: 6 }}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Regra de ouro */}
            <div style={{ background: "linear-gradient(135deg, #312e81 0%, #1e1b4b 100%)", borderRadius: 12, padding: 20, border: "1px solid #4338ca" }}>
              <h3 style={{ margin: "0 0 10px", fontSize: 16, fontWeight: 900, color: "#e0e7ff" }}>🏆 Regra de Ouro</h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.7, color: "#c7d2fe" }}>
                Pare de "vender" a imagem com adjetivos vagos ("stunning", "beautiful", "amazing"). Comece a dar um <strong style={{ color: "#fbbf24" }}>briefing como faria para um fotógrafo profissional</strong>: superfícies, fontes de luz, lentes, ângulo, texto exato, e o que NÃO deve aparecer.
              </p>
              <div style={{ marginTop: 14, padding: 12, background: "rgba(0,0,0,0.2)", borderRadius: 8 }}>
                <div style={{ fontSize: 11, color: "#ef4444", fontWeight: 700, marginBottom: 4 }}>❌ NÃO FUNCIONA:</div>
                <code style={{ fontSize: 12, color: "#fca5a5" }}>"Stunning product photo, ultra HD, 8K, masterpiece, trending"</code>
                <div style={{ fontSize: 11, color: "#10b981", fontWeight: 700, marginTop: 10, marginBottom: 4 }}>✅ FUNCIONA:</div>
                <code style={{ fontSize: 12, color: "#86efac" }}>"Glass bottle on dark marble, single softbox from upper-left, condensation droplets, label reads 'MIDNIGHT BREW' in serif. No extra text."</code>
              </div>
            </div>

            {/* Anti-slop */}
            <div style={{ background: "#0f0f1a", borderRadius: 12, padding: 18, border: "1px solid rgba(239,68,68,0.2)" }}>
              <h3 style={{ margin: "0 0 12px", fontSize: 15, fontWeight: 800, color: "#fca5a5" }}>🚫 Palavras que NÃO Ajudam</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {["stunning", "beautiful", "amazing", "epic", "masterpiece", "hyper-realistic", "8K", "trending on artstation", "best quality", "ultra-detailed"].map((w) => (
                  <span key={w} style={{ background: "rgba(239,68,68,0.1)", color: "#fca5a5", padding: "4px 10px", borderRadius: 4, fontSize: 11, fontWeight: 600, textDecoration: "line-through" }}>
                    {w}
                  </span>
                ))}
              </div>
              <p style={{ margin: "12px 0 0", fontSize: 12, color: "#94a3b8", lineHeight: 1.6 }}>
                O GPT Image 2 ignora esses termos. Substitua por descrições concretas: tipo de iluminação, material exato, câmera específica, ângulo, textura visível.
              </p>
            </div>
          </div>
        )}

        {/* Footer */}
        <div style={{ marginTop: 28, padding: 14, background: "rgba(255,255,255,0.02)", borderRadius: 8, textAlign: "center" }}>
          <p style={{ margin: 0, fontSize: 10, color: "#334155", lineHeight: 1.6 }}>
            Fontes: OpenAI Cookbook, fal.ai, Morphed, ImagineArt, NoteGPT, MindStudio, LazzaStudio, Apiyi, awesome-gpt-image (GitHub) · Maio 2026
          </p>
        </div>
      </div>
    </div>
  );
}
