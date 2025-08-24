# CLAUDE.md

This file guides Claude Code when working in this repository.

## Stack

- Language: TypeScript (^5.0.0)
- Framework: Next.js 15 (App Router)
- Styling: Tailwind 4
- Component library: shadcn/ui
- Data fetching: React Query (TanStack)
- Testing: Jest + React Testing Library
- Linting: ESLint with @typescript-eslint
- Formatting: Prettier
- Package manager: npm

## Deployment

This is a Next.js 15 application that can be deployed to Vercel or other platforms.

## Recommended project structure

```
.
├── app/                          # Next.js App Router
│   ├── (site)/                   # Route group to keep URLs clean
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Landing
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── projects/
│   │   │   ├── page.tsx          # Grid of projects
│   │   │   └── [slug]/
│   │   │       └── page.tsx      # Project details
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── api/
│   │   └── contact/route.ts      # Form handler or email webhook
│   ├── sitemap.ts
│   └── robots.ts
│
├── components/
│   ├── ui/                       # Design system primitives (button, card, input)
│   ├── layout/                   # Header, footer, navbar, section wrappers
│   ├── sections/                 # Homepage sections like hero, work, testimonials
│   └── content/                  # MDX components (prose, callout, gallery)
│
├── content/                      # Option A: MDX content kept in repo
│   ├── projects/                 # One folder per case study
│   │   └── my-project.mdx
│   └── posts/
│       └── my-post.mdx
│
├── cms/                          # Option B: headless CMS client
│   ├── sanity/                   # Or Contentful, Strapi
│   │   ├── client.ts
│   │   └── queries.ts
│   └── schema/                   # Portable Text or Zod schemas
│
├── data/                         # Option C: small JSON or TS data
│   ├── site.ts                   # Site name, links, meta defaults
│   ├── nav.ts                    # Nav items, social links
│   └── projects.ts               # Quick cards without MDX
│
├── lib/
│   ├── mdx.ts                    # MDX config, rehype/remark plugins
│   ├── contentlayer.ts           # If using Contentlayer
│   ├── images.ts                 # next/image helpers, blur placeholders
│   ├── seo.ts                    # Shared metadata builders
│   ├── og.ts                     # Open Graph image generation
│   └── utils.ts                  # Small helpers only
│
├── styles/
│   ├── globals.css               # Tailwind base imports
│   ├── prose.css                 # Typography tweaks for MDX
│   └── tailwind.css              # Optional split if you like
│
├── public/
│   ├── images/
│   │   ├── projects/
│   │   ├── avatars/
│   │   └── logos/
│   ├── fonts/
│   └── favicon.ico
│
├── types/
│   ├── content.ts                # Zod types for posts or projects
│   └── index.d.ts
│
├── tests/
│   ├── components/
│   └── e2e/                      # Playwright if you want UI checks
│
├── scripts/
│   ├── optimize-images.ts        # Sharp based preprocessor
│   └── generate-og.ts            # Batch OG images
│
├── .env.local.example
├── CLAUDE.md                     # Project rules for AI assistant
├── contentlayer.config.ts        # If using Contentlayer
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
├── next.config.mjs
├── .eslintrc.cjs
└── .prettierrc
```
## Installation notes

- Tailwind set up with PostCSS
- shadcn/ui installed with `npx shadcn@latest init`
- React Query initialized with `<QueryClientProvider>`

## Dev commands

- Dev server: `npm run dev`
- Build: `npm run build`
- Start: `npm start`
- Lint: `npm run lint`
- Format: `npm run format`
- Test: `npm test`

## Core architecture patterns

### Single page snap scrolling

The homepage (`app/page.tsx`) uses a snap scroll container.
- Each section uses a `.snap-section` class
- CSS scroll snap handles section navigation
- Body scrolling is disabled when snap scroll is active
- `HeroWithNav` handles container scroll and window scroll events

### Section based components

Main sections live in `components/sections`.
- `HeroWithNav` - hero with integrated navigation
- `ServiceCards` - horizontal service carousel
- `MeetMe` - five column personal story layout
- `HearMeOut` - video placeholder section
- `Testimonials` - testimonial carousel
- `MyStyle` - expandable photo grid
- `Contact` - contact form with image

## Component guidelines

- Prefer shadcn/ui for forms, cards, dialogs
- Style with Tailwind utility classes
- Co locate small CSS modules with the component if needed

## React Query patterns

- Create a `QueryClient` in `app/layout.tsx`
- Use `useQuery`, `useMutation`, `useInfiniteQuery` from `@tanstack/react-query`
- Place API logic in `lib/api` and call it through hooks
- Use descriptive keys like `['user', id]`

## Code style

- Prefer arrow functions
- Annotate return types
- Destructure props
- Avoid `any` - prefer `unknown` or strict generics
- Group imports: React - Next - libraries - local

## Documentation and onboarding

- Add a short usage comment to each component and hook
- Document top level files like `app/layout.tsx` and all configs
- Keep `README.md` updated with setup notes, design tokens and component usage

## Security

- Validate all server side inputs in API routes
- Use HTTPS only cookies and CSRF tokens when applicable
- Protect sensitive routes with middleware or session logic

## Commit rules

- Follow Conventional Commits  
  - Format: `type(scope): short description`  
  - Types: feat, fix, docs, refactor, style, test, chore, build, ci, perf, revert  
  - Subject length ≤ 72 chars
- Scope  
  - Use folders or domains like ui, seo, content, cms, images, styles, auth
- Style  
  - Present tense, imperative voice  
  - Example: `feat(ui): add badge component`  
  - No trailing punctuation in subject
- Body  
  - Wrap at 72 chars  
  - Explain why, not just what  
  - Reference issues like `refs #123`
- Footers  
  - Allowed: `BREAKING CHANGE:`, `Refs:`, `Fixes:`  
  - No author trailers for bots or AI
- No AI vendor attribution  
  - Do not include vendor names or headers in commits, diffs, comments, file headers  
  - Banned examples: `claude`, `anthropic`, `claude.ai`, `Co-authored-by: Claude`, `Generated by Claude`, `AI-generated`  
  - Repo stays vendor neutral and credits the human committer
- Licenses and third party code  
  - If you copy or adapt code, add attribution in `docs/third_party.md` and keep required headers

## PR checklist

- Conventional commit title
- No banned words
- Screenshots for UI changes
- Tests updated when logic changes
- Changelog updated when needed

## Commit message template

```
type(scope): short description

why
- brief reasoning

what
- key changes

refs: #123
```

Set as default:
```
git config commit.template .gitmessage.txt
```

## Minimal commit message guard

Create `.git/hooks/commit-msg`:

```bash
#!/usr/bin/env bash
set -euo pipefail
MSG="$1"
if grep -iE 'co-authored-by:\s*claude|anthropic|generated by claude|claude\.ai|ai-generated' "$MSG" ; then
  echo "error: commit message contains banned ai attribution or vendor mentions"
  exit 1
fi
```

Make it executable:
```
chmod +x .git/hooks/commit-msg
```
