# BioCircuit Laboratories — Full Revamp

A move from "sci-fi lab" to quiet, high-end technical consultancy. Same foundation (biotech, research, wellness), new centre of gravity: agentic AI, security and governance, deep research.

## The design system

Midnight & Platinum, applied as semantic tokens in `index.css` (no hardcoded colours anywhere).

- Background `#070B12`, surfaces `#101823`, text/platinum `#B7C2CE`, signal accent teal `#3FBFA8`
- Type: Instrument Serif for headlines (replaces Orbitron), Work Sans for body and UI
- Luxury cues: generous vertical rhythm (sections breathe at 8–10rem), wide letter-spaced overlines, hairline rules instead of heavy borders, 1px platinum borders at low opacity, restrained radius
- Motion: slow, low-amplitude. Scroll-reveals, hairlines that draw themselves, a subtle animated node/orchestration graphic built in SVG + CSS. No AI-generated imagery anywhere — all graphics are hand-built SVG, gradients, grids and line work.

## Voice

First-person plural, plain and direct, short sentences, no em-dashes, no "unlock/leverage/seamlessly/in today's fast-paced world". Written like a practitioner explaining their work to a peer, not marketing copy.

## Services — the three new pillars

The services page becomes a real page (`/services`) with depth, not just cards. Each pillar gets its own detail page.

**1. Agentic AI** (`/agentic-ai`, old `/agentic-ai-wellness` redirects here)
Agents that take the repetitive work off your team so the bottlenecks clear. Explained honestly at the mechanics level:
- System prompting and role design grounded in your own data
- Retrieval over your database, so answers come from your records and not the open internet
- Tool and API calls that let the agent actually do things in your stack
- Orchestration: multiple agents, handoffs, human approval gates
- Evaluation and guardrails, plus what stays human
- Security stance: your data stays yours, deployable in your own cloud tenancy, customisable and editable by your team
- Existing PartyRock case studies stay, framed as health-tech proof of the pattern

**2. Security, Governance & Cloud** (`/security-governance`)
- Data protection compliance: NDPR / NDPA (Nigeria Data Protection Act, NDPC as regulator) and GDPR, with health data handled to the stricter bar
- Security posture reviews, threat modelling, hardening
- Incident response and investigation of attacks
- Governance of company IP, databases and applications
- Cloud and infrastructure: AWS, Azure, Terraform, infrastructure as code, least-privilege access, audit trails

**3. Deep Research** (`/deep-research`)
- Commissioned research into your specific context: what has been done, what is emerging, what it means for you
- Method laid out: scoping, literature and prior-art review, primary analysis, briefing
- Links out to published work (ResearchGate and LinkedIn as institutional credentials, no personal name in the copy) and to the existing on-site research articles (oxytocin and sympathetic ovarian innervation, water, mycelium electrode arrays, autism and neurodivergence, numerology), each with a one-line summary

Biotechnology consulting, education, workshops, ML data and shop remain, restyled and repositioned below the three lead pillars.

## Contact per service

Every service page and the services index gets its own contact block using `Biocircuitlaboratories@gmail.com` with a pre-filled subject and body for that service, so enquiries arrive already labelled. Example: subject "Agentic AI enquiry".

## SEO

- Add `react-helmet-async` for per-route title, description, canonical and og tags
- Location-intent targeting for Abuja and Nigeria on the relevant pages: agentic AI development, AI agents for business, cloud security, application security, data protection and NDPR/GDPR compliance
- JSON-LD: `ProfessionalService` with Abuja address region sitewide, plus `Service` schema on each pillar page and `Article` on research pages
- `index.html` gets a rewritten title and description matching the new positioning, a `sitemap.xml` is added, and internal linking runs homepage to services to pillar pages
- Caveat worth stating plainly: this is a static single-page app, so social-preview crawlers only read the one static head. Google executes JS and will see per-route tags fine.

## Build order

1. Design tokens, fonts, Tailwind config, shared primitives (Section, Overline, Rule, Card, CTA)
2. Navbar, Hero, About, Contact, Footer rebuilt on the new system
3. `/services` index with real detail
4. The three pillar pages
5. Restyle existing pages to match
6. Helmet, per-route SEO, schema, sitemap
7. Preview check across desktop and mobile widths

## Technical notes

- `react-helmet-async` added, provider in `src/main.tsx`, canonical removed from `index.html`
- Google Fonts swapped to Instrument Serif + Work Sans; `tailwind.config.ts` `fontFamily.display` / `fontFamily.body` updated
- All colour values live as HSL CSS variables in `index.css`
- Old `/agentic-ai-wellness` route kept as a redirect so existing links do not break
- No backend needed; contact stays mailto
