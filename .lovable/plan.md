## The idea

The page is built like a **service manual with a torn-out estimate sheet inside it**. Not a landing page. Newsprint stock, a heavy left-hand column of type, hairline rules, numbered sections, and one loud red overprint that shows up only where the free-build offer is. The design argument: this looks like a document, and documents are honest.

The free build is dramatized by making it the physically largest thing on the page. Right under the h1 sits a full-bleed red band, set in the biggest type on the site, that says the offer in one sentence and nothing else. It is the only red on the page above the price sheet.

## Palette

Ink on newsprint, plus one overprint red.

- `--paper` #F2EFE7 (warm newsprint), `--paper-2` #E7E2D6 for the alternating band
- `--ink` #141310 (near-black, not black), `--ink-soft` #57534A for secondary lines
- `--overprint` #C8321E (a slightly off, misregistered print red) with paper as its foreground
- No blue, no purple, no gradient, no shadow, no blur, no rounded corners past 2px.

## Type

Two faces, huge range.

- **Display**: Archivo Black, set very tight (-0.04em), lowercase headlines, sizes from 2.75rem on a phone to 6.5rem wide. Headlines break across lines on purpose, ragged right.
- **Utility**: JetBrains Mono, uppercase, 0.72rem, wide tracking. Used for section numbers, field labels, the price rows, and the footer. This is what makes it read as a manual rather than a brochure.
- **Body**: Barlow, 1.125rem on phone, `max-w-[54ch]`, generous leading. Short paragraphs, one idea each.

## Structure

Asymmetric. Nothing is centered. On phone it is a single column with a persistent hanging left rule; on desktop it becomes a `[10ch_1fr]` grid where the mono section numbers and labels sit in the narrow left gutter and the content runs long in the right.

```text
┌──────────────────────────────────────────────┐
│ SINGH DYNAMICS            MICHIGAN / EST 2026│  slim mono bar, sticky
├──────────────────────────────────────────────┤
│ 00 │  someone looked up your shop            │  h1, huge, ragged
│    │  last night and found nothing.          │
│    │  short paragraph, the 9pm argument      │
├──────────────────────────────────────────────┤
│ ███ I BUILD IT FIRST. YOU LOOK AT IT.    ███ │  full-bleed RED band,
│ ███ THEN YOU DECIDE.                     ███ │  biggest type on page
│     one line under it + email link           │
├──────────────────────────────────────────────┤
│ 01 │  how it works — three long numbered     │  no cards. rules only.
│    │  rows, big number in the gutter         │
├──────────────────────────────────────────────┤
│ 02 │  what you get — four rows, hairline     │  alternating paper-2
│    │  separated, mono label + plain sentence │
├──────────────────────────────────────────────┤
│ 03 │  ESTIMATE — dot-leader price rows,      │  the "torn-out sheet":
│    │  BUILD ....... $400–700   ONE TIME      │  bordered block, mono,
│    │  UPKEEP ...... $50–75/MO  OPTIONAL      │  price in overprint red
│    │  small print under: cancel anytime, no  │
│    │  contract, you own the domain           │
├──────────────────────────────────────────────┤
│ 04 │  straight answers — five Q/A rows in a  │  dl, no accordion,
│    │  real dl, all copy in the HTML          │  zero JS
├──────────────────────────────────────────────┤
│ ███ want to see what yours looks like?   ███ │  red again, closing
│     sarab@singhdynamics.com  (set enormous)  │
├──────────────────────────────────────────────┤
│ SINGH DYNAMICS / MICHIGAN / SARAB, 16, RUNS  │  mono footer, states
│ THIS HIMSELF               © 2026            │  the "new" fact plainly
└──────────────────────────────────────────────┘
```

The "I'm 16 and I run it myself" fact goes in the footer and in one FAQ answer, stated flat. It is the honesty that replaces the missing proof.

## Copy

Rewritten from your brief in your voice. Short sentences, no em dashes, none of the banned words. Facts used exactly as given: $400 to $700 one time, $50 to $75 a month optional with no contract, hosting + Google Business Profile + updates + monitoring, client owns the domain in their name, about a week, changes by text, sarab@singhdynamics.com. Nothing invented: no testimonials, no logos, no stats, no client count.

## Technical

- `src/routes/index.tsx`: one route, semantic `header` / `main` / `section` / `footer`, single `h1`, `ol` for the steps, `dl` for the questions. Every word is literal JSX text in the HTML output. No state, no effects, no storage, no routing.
- Head: exact title, meta description, canonical `https://singhdynamics.com/`, og:title / og:description / og:type / og:url, twitter:card, and the ProfessionalService JSON-LD with name, areaServed Michigan, email, url.
- `src/styles.css`: rewritten tokens (paper / ink / overprint) in `@theme inline`, plus `@utility` classes for the gutter grid, the dot-leader price row, and the mono label. No hardcoded color classes in the component.
- Fonts via `<link>` + preconnect in `src/routes/__root.tsx` — three families, weights trimmed to exactly what is used, `display=swap`. That is the only network cost; no images, no icon library, no JS beyond the framework runtime.
- Mobile first: phone layout is the base, desktop is `sm:`/`lg:` widening into the gutter grid. Header uses `grid-cols-[minmax(0,1fr)_auto]` so it never collapses at 320px.
- Contrast checked for ink-on-paper and paper-on-red; visible focus outlines on every link; the existing `prefers-reduced-motion` block kept (there is almost no motion anyway).
