# Prompt — Site DK22 (Next.js)

## Contexto

Estou construindo o site institucional do **DK22** (conveniência em Canasvieiras, Florianópolis-SC), que vai rodar no domínio próprio `deck22conveniencia.com.br`. Já validei design e copy num protótipo estático em HTML/CSS/JS puro (arquivo anexado a esse projeto: `deck22_site_v2.html`) junto com o time. Agora quero a versão de produção, em Next.js, usando esse HTML como **referência de visual, copy e comportamento** — não é pra reinventar o design, é pra portar fielmente pra uma stack que aguenta crescer.

Esse site vai ser a base de futuras soluções no mesmo domínio (cardápio digital, possível painel interno), então a arquitetura importa mais do que a entrega rápida.

## Stack obrigatória

- **Next.js 14+ (App Router)**, TypeScript
- **Tailwind CSS** para estilos (portar os tokens do HTML de referência para o `tailwind.config`, não hardcodar cores soltas nos componentes)
- **next-intl** para internacionalização (não reimplementar um dicionário JS na unha como no protótipo)
- **next/font** para carregar Cinzel, Bebas Neue e Montserrat (Google Fonts) de forma otimizada
- Deploy alvo: **Vercel**, apontando pro domínio `deck22conveniencia.com.br`

## Idiomas

- **pt-BR** (padrão) / **es** (prioridade — maioria do público turista é argentino) / **en**
- Rotas por idioma via `next-intl` (`/`, `/es`, `/en` ou `[locale]` conforme o padrão da lib)
- Portar todas as strings traduzidas que já estão validadas — vão anexadas junto: `pt.json`, `es.json` e `en.json`, já no formato de namespace que o `next-intl` espera (`messages/pt.json`, etc.). É só usar como estão, não reescrever/parafrasear o conteúdo.
- Seletor de idioma no header, igual ao do protótipo (PT | ES | EN)

## Identidade visual (seguir à risca — vem do guia de marca da Indara)

- Cores: preto `#000000` / preto secundário `#1C1C1C` como fundo; verde limão `#C6FF00` (principal) e `#E6FF5C` (secundário/gradiente) como acento; branco `#FFFFFF`
- Tipografia: **Cinzel** (bold/800) para logotipo e títulos; **Bebas Neue** para rótulos/subtítulos/eyebrows; **Montserrat** para corpo de texto
- Logotipo: "DK" + círculo com "22" dentro (replicar a composição do HTML de referência), coroa como elemento de marca (usada no hero)
- ⚠️ Cuidado de acessibilidade: `#E6FF5C` sobre fundo claro tem contraste baixo — não usar pra texto corrido, só pra elementos gráficos/símbolo

## Estrutura de seções (portar do HTML de referência)

1. **Header fixo** — logo DK22, links (Sobre, Cardápio, Localização, Delivery), seletor de idioma, CTA WhatsApp, menu mobile (hambúrguer que abre um painel lateral com backdrop — cuidado pro botão continuar clicável/acima do painel quando aberto, isso já foi bug no protótipo)
2. **Hero** — logotipo grande, coroa, linha "★ CONVENIÊNCIA ★", @deck22canas, tagline (ver texto exato no HTML), indicador "Aberto agora / Fechado" calculado em tempo real, dois CTAs (ver cardápio / WhatsApp)
3. **Ticker** — faixa rolante com as categorias (destilados, gin & vodka, espumantes, tabacaria, gelo, bebidas geladas, combos), traduzido por idioma
4. **Sobre** — texto sobre ser negócio de família + bloco visual (pode ser foto real do ponto, hoje é um placeholder gradiente)
5. **Cardápio (mock)** — não é o cardápio real ainda. É um card único estilo preview ("Cardápio digital em breve") com botão de WhatsApp embaixo. Deixar a estrutura pronta pra depois trocar por integração real (cardápio do NEX ou similar)
6. **Horário & Localização** — atenção: **não temos horário fixo de abertura entre 10h e 12h** (varia dia a dia), mas **fechamos sempre às 02h, todos os dias**. Mostrar isso como uma linha só ("Todos os dias · abre entre 10h–12h · fecha sempre às 02h"), não uma tabela de dias da semana. O indicador de aberto/fechado do hero deve refletir essa mesma regra (considerar abertura ~11h como estimativa e fechamento sempre às 02h)
7. **Delivery** — banda de destaque sobre o delivery próprio (sem intermediário tipo iFood), CTA WhatsApp
8. **Instagram** — link pro @deck22canas
9. **Footer** — links + nota de rodapé
10. **Botão flutuante de WhatsApp** — fixo no canto inferior direito, visível em todas as seções e nos três idiomas, com animação de pulso sutil

## Funcionalidades específicas a implementar corretamente

- Cálculo de "Aberto agora / Fechado" client-side (ou via server component com hora do servidor — decidam o que fizer mais sentido em Next), considerando que o negócio fecha depois da meia-noite (fechamento é sempre às 02h)
- Menu mobile: garantir que o botão de fechar fique sempre acima do painel (bug que já aconteceu no protótipo: o painel cobria o próprio botão de toggle)
- `prefers-reduced-motion`: respeitar pra ticker e pulso do botão de WhatsApp
- Metadata de SEO por idioma (title, description, OG tags) — isso o protótipo HTML não tinha, é ganho real de migrar pra Next
- Sitemap e `robots.txt` básicos

## Placeholders que preciso confirmar/trocar antes de ir ao ar

- Número de WhatsApp real (hoje está como placeholder `5548000000000` em todos os links e no botão flutuante)
- Fotos reais do ponto (hoje é um bloco gradiente no lugar da "vitrine")
- Link real do Instagram (`@deck22canas` já está correto, só validar a URL)
- Endereço completo pro Google Maps (hoje só linka busca genérica "Canasvieiras Florianópolis")

## Entregável esperado

- Projeto Next.js completo, rodando localmente com `npm run dev`, pronto pra deploy na Vercel
- Estrutura de pastas organizada (`app/`, `components/`, `messages/`, etc.)
- README curto explicando como rodar e como trocar os placeholders acima
