# DK22 — Site institucional

Site institucional da conveniência DK22 (Canasvieiras, Florianópolis-SC), portado
do protótipo estático (`deck22_site_v2.html`) para Next.js 14 (App Router) + TypeScript
+ Tailwind CSS + next-intl.

## Rodando localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`. As rotas de idioma são `/` (pt-BR, padrão),
`/es` e `/en`.

## Build de produção

```bash
npm run build
npm run start
```

Deploy alvo: Vercel, apontando pro domínio `deck22conveniencia.com.br`.

## Estrutura

```
messages/          strings traduzidas (pt.json, es.json, en.json) — next-intl
src/i18n/          routing, navigation e request config do next-intl
src/middleware.ts  roteamento de locale
src/app/[locale]/  layout + página (metadata por idioma)
src/app/sitemap.ts, src/app/robots.ts
src/components/    uma seção/elemento por arquivo, fiel ao protótipo HTML
src/lib/fonts.ts           next/font (Cinzel, Bebas Neue, Montserrat)
src/lib/business-hours.ts  cálculo de aberto/fechado (fuso America/Sao_Paulo)
src/lib/site-config.ts     placeholders centralizados (ver abaixo)
```

## Placeholders para trocar antes de ir ao ar

Tudo centralizado em `src/lib/site-config.ts`:

| Placeholder | Valor atual | Trocar por |
|---|---|---|
| `whatsappNumber` | `5548992050818` ✅ já é o número real | — |
| `mapsQuery` | `"Canasvieiras, Florianópolis - SC"` | Endereço completo do ponto |
| `instagramUrl` / `instagramHandle` | `@deck22canas` | Validar se a URL está correta |
| `siteUrl` | `https://deck22conveniencia.com.br` | Confirmar domínio final (usado em metadata/sitemap) |

Fotos reais do ponto: hoje a seção "Sobre" (`src/components/About.tsx`) usa um
bloco gradiente como placeholder no lugar da vitrine — trocar por `<Image>` do
`next/image` quando houver foto.

## Notas de implementação

- **Aberto agora / Fechado**: calculado client-side (`OpenStatusBadge`), sempre
  no fuso de Florianópolis (`America/Sao_Paulo`), não no fuso do visitante.
  Abertura estimada às 11h (varia 10h–12h na prática), fechamento fixo às 02h.
- **Menu mobile**: o botão de abrir/fechar (`z-[200]`) fica sempre acima do
  painel (`z-[99]`) e do backdrop (`z-[98]`) — bug do protótipo, preservado
  corrigido aqui.
- **`prefers-reduced-motion`**: respeitado no ticker e no pulso do botão de
  WhatsApp via `motion-reduce:` do Tailwind.
- **Cardápio**: seção mock (`MenuMock.tsx`) com estrutura pronta pra ser
  trocada pela integração real (NEX ou similar) depois.
