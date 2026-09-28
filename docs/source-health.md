# Aurora Meridian — Source Health Report

## Snapshot

* **Commit:** `3ea62b587453039f51e862f2823ca9c39bd0515b`
* **Branch:** `main`
* **Remote:** `origin/main`
* **Git sync:** up to date with `origin/main`
* **Working tree:** clean
* **Date:** 28/09/2026
* **Node:** `v22.17.0`
* **npm:** `10.9.2`
* **Package lock:** enabled
* **Framework:** Next.js `16.3.5`
* **Build engine:** Turbopack
* **React:** `19.2.8`
* **TypeScript:** `5.9.3`
* **Tailwind CSS:** `4.3.3`
* **ESLint:** `9.39.5`

### Recent development history

The current commit sits on top of the following recent implementation sequence:

1. `3ea62b5` — `feat(security): harden security and compliance foundations`
2. `b493fcb` — `feat(seo): implement site metadata and social sharing foundation`
3. `5bddc75` — `perf(header): optimize responsive logo image delivery`
4. `49fff96` — `feat: refine accessibility, design tokens, and content semantics`
5. `644dfe8` — `feat(responsive): refine responsive layouts across core sections`
6. `2f43c47` — `feat: add FAQ and risk disclosure sections`
7. `3ccadf9` — `feat(culture): add institutional culture and sports section`
8. `53ada98` — `feat(book): add editorial book access experience`
9. `8ce07a9` — `feat: add structure opportunity access flow`
10. `7eeba5e` — `feat(fund): add fund showcase section`

---

# Source Health

## DEGRADED

The source is sufficiently healthy for development and local runtime, but not yet at a clean production-build baseline.

### Evidence

**PASS**

* Git working tree clean.
* Branch synchronized with remote.
* Dependencies install successfully with `npm ci`.
* `npm audit` reports `0 vulnerabilities`.
* ESLint passes.
* TypeScript passes with `tsc --noEmit`.
* Development server starts successfully.
* `/` returns HTTP `200`.
* `/opportunity/access` returns HTTP `200`.
* No browser console errors observed.
* No observed 404/500/network blocking errors.
* Responsive inspection passed at six viewport sizes.
* Lighthouse scores are strong.
* Keyboard interaction largely passes.
* Visual inspection found no current visual errors.

**DEGRADED**

* `npm run build` fails.
* The failure occurs in `next/font/google` while Turbopack attempts to resolve the Cormorant Garamond font.
* The failure produces 20 resolution errors originating from the same underlying font-resolution problem.
* Two accessibility behaviors remain imperfect.

**Important interpretation:** the 20 build errors should not be treated as 20 independent defects. They are repeated manifestations of the same font-resolution failure.

---

# Architecture Snapshot

### Application architecture

* Next.js `16.3.5`
* App Router architecture
* TypeScript
* React `19.2.8`
* Turbopack
* Tailwind CSS `4.3.3`
* ESLint with `eslint-config-next`
* `next/image` for optimized image delivery
* Server/client component model according to component requirements
* Security/compliance foundations implemented at application level

### Known routes verified

* `/`
* `/opportunity/access`

Both routes returned HTTP `200` during the local runtime inspection.

### Current architectural state

The project has progressed beyond a simple landing-page prototype.

The current implementation includes foundations for:

* institutional homepage
* opportunity access flow
* fund presentation
* editorial/book experience
* culture and sports section
* FAQ
* risk disclosure
* SEO metadata
* social sharing metadata
* responsive behavior
* accessibility semantics
* security/compliance foundations
* optimized responsive logo delivery

---

# Dependency Snapshot

## Runtime dependencies

| Package                |    Version | Status    |
| ---------------------- | ---------: | --------- |
| `next`                 |   `16.3.5` | Installed |
| `react`                |   `19.2.8` | Installed |
| `react-dom`            |   `19.2.8` | Installed |
| `tailwindcss`          |    `4.3.3` | Installed |
| `@tailwindcss/postcss` |    `4.3.3` | Installed |
| `typescript`           |    `5.9.3` | Installed |
| `eslint`               |   `9.39.5` | Installed |
| `eslint-config-next`   |   `16.3.5` | Installed |
| `@types/node`          | `20.19.43` | Installed |
| `@types/react`         |   `19.3.0` | Installed |
| `@types/react-dom`     |   `19.3.0` | Installed |

### Installation

`npm ci` completed successfully:

* 364 packages added
* 365 packages audited
* 0 vulnerabilities

`npm install` subsequently completed successfully:

* dependencies up to date
* 365 packages audited
* 0 vulnerabilities

### Dependency warning

npm reports:

> `eslint@9.39.5` is deprecated / no longer supported.

This is a **maintenance concern**, not the cause of the current build failure.

### Extraneous packages

`npm ls --depth=0` reports several extraneous packages, including:

* `@emnapi/core`
* `@emnapi/runtime`
* `@emnapi/wasi-threads`
* `@img/sharp-wasm32`
* `@napi-rs/wasm-runtime`
* `@tybys/wasm-util`

These should be investigated against the lockfile and package manager state before being classified as defects. They are not currently preventing local development or lint/type checking.

---

# Runtime Status

## PASS

Development server starts successfully:

```text
next dev
▲ Next.js 16.3.5 (Turbopack)
✓ Local: http://localhost:3000
✓ Ready in 731ms
```

### Verified requests

```text
GET / 200
GET /opportunity/access 200
GET / 200
```

No runtime application error was observed during the supplied inspection.

### Browser console

**PASS**

No console errors observed.

### Network

**PASS**

No observed:

* 404
* 500
* blocked requests

Fonts were successfully served from generated local `.woff2` assets during development.

The optimized Aurora Meridian logo was also successfully served through `next/image`.

---

# Build Status

## FAIL

Command:

```text
npm run build
```

Result:

```text
Build error occurred
Error: Turbopack build failed with 20 errors
```

### Primary failure

The failure originates from:

```text
[next]/internal/font/google/cormorant_garamond_efb9294a.module.css
```

with:

```text
Module not found:
Can't resolve
'@vercel/turbopack-next/internal/font/google/font'
```

The trace points to:

```text
./src/app/layout.tsx
```

### Root failure signature

The build repeatedly reports:

```text
next/font/google queries have exactly one entry
```

followed by failure resolving:

```text
@vercel/turbopack-next/internal/font/google/font
```

### Current interpretation

**Verified:** the production build currently fails while processing the Google font generated by `next/font/google`, specifically Cormorant Garamond.

**Verified:** the failure is occurring inside the Turbopack/Next font processing pipeline.

**Not yet verified:** the exact underlying trigger, such as a specific font configuration, Next.js/Turbopack regression, cached generated asset, or configuration interaction.

Therefore, the correct engineering classification is:

> **BUILD BLOCKER — FONT PIPELINE / TURBOPACK**

The source should not yet be considered production-build clean.

---

# Lint Status

## PASS

Command:

```text
npm run lint
```

Result:

```text
Process completed successfully.
```

No ESLint errors were reported.

---

# TypeScript Status

## PASS

Command:

```text
npx tsc --noEmit
```

Result:

```text
Process completed successfully.
```

No TypeScript errors were reported.

---

# Test Status

## PARTIAL / NOT ESTABLISHED

No automated test suite execution was supplied.

Therefore:

* Type checking: **PASS**
* Linting: **PASS**
* Runtime smoke testing: **PASS**
* Visual/manual testing: **PASS**
* Automated unit/integration test suite: **NOT VERIFIED**

This should **not** be interpreted as "tests are failing."

The accurate status is:

> **Automated test coverage/execution is not established by the supplied evidence.**

---

# Git Status

## PASS

### Branch

```text
main
```

### Synchronization

```text
Your branch is up to date with 'origin/main'.
```

### Working tree

```text
nothing to commit, working tree clean
```

### Short status

```text
git status --short
```

returned no entries.

### Diff

```text
git diff --stat
```

returned no changes.

### Current HEAD

```text
3ea62b587453039f51e862f2823ca9c39bd0515b
```

Git baseline is therefore clean and reproducible against the current committed state.

---

# Accessibility Baseline

## STRONG — WITH 2 KNOWN ISSUES

### Verified positive behavior

Keyboard interaction was manually inspected.

Confirmed:

* `Tab` works through interactive elements.
* `Space` works through interactive controls in the tested flows.
* `Enter` works through interactive controls.
* `Esc` closes the mobile navigation menu.
* Focus returns to the mobile menu toggle after closing.
* Responsive layouts were inspected at:

  * `375 × 812`
  * `390 × 844`
  * `768 × 1024`
  * `1024 × 768`
  * `1440 × 900`
  * `1920 × 1080`

### Known accessibility issue #1

On the final **Confirmation** step of `/opportunity/access`:

* `Return to homepage` does not respond to `Space`.
* `Enter` activates it correctly.

This should be investigated as an interaction semantics issue.

### Known accessibility issue #2

Keyboard navigation through the header/navigation links presents an undesirable viewport behavior.

When focus reaches navigation options from a location other than the Hero:

* pressing `Tab` causes the page to move upward;
* section content changes as focus moves;
* this occurs before a navigation option has actually been selected.

This requires investigation into the relationship between:

* focus management;
* navigation interaction;
* scroll behavior;
* anchor links;
* sticky/header behavior;
* possible focus/scroll restoration logic.

### Lighthouse accessibility

**96/100**

This supports a strong baseline but does not eliminate the manually observed keyboard issues.

---

# Performance Baseline

## STRONG

### Lighthouse — Mobile

* **Performance:** 95
* **Accessibility:** 96
* **Best Practices:** 100
* **SEO:** 100

### Lighthouse — Desktop

* **Performance:** 99
* **Accessibility:** 96
* **Best Practices:** 100
* **SEO:** 100

### Additional evidence

Responsive logo delivery is functioning through `next/image`.

Fonts are being served as generated `.woff2` assets during development.

No obvious network failures were observed.

### Important limitation

The Lighthouse measurements establish a strong **local/current-page baseline**, but they should not be treated as a final production performance measurement until the production build succeeds.

---

# SEO Baseline

## PASS

Lighthouse:

* **SEO Mobile:** 100
* **SEO Desktop:** 100

The project also contains the SEO foundation introduced in:

```text
b493fcb
feat(seo): implement site metadata and social sharing foundation
```

Current evidence therefore supports:

* metadata foundation implemented;
* social sharing foundation implemented;
* Lighthouse SEO checks passing.

### Remaining limitation

A production deployment/crawl has not been established by the supplied evidence.

Therefore:

> Local SEO baseline: **PASS**
> Production/indexation baseline: **NOT VERIFIED**

---

# Security Baseline

## STRONG / PARTIALLY VERIFIED

The current HEAD commit explicitly introduces:

```text
feat(security): harden security and compliance foundations
```

The application was also inspected in the browser without:

* 404 errors;
* 500 errors;
* blocked network requests;
* console errors.

`npm audit` reports:

```text
found 0 vulnerabilities
```

### CSP

The supplied network inspection reports:

```text
CSP não encontrado.
```

This is important because the current commit specifically concerns security hardening.

The correct interpretation is not that security is broken, but that the expected Content Security Policy behavior was **not observed in the supplied local network inspection**.

This should therefore remain an explicit verification item.

### Security status

* Dependency vulnerabilities: **PASS**
* Application runtime: **PASS**
* Security foundations commit present: **VERIFIED**
* CSP observed in inspected response: **NOT VERIFIED / CONCERN**
* Production security-header verification: **NOT VERIFIED**

---

# Visual Baseline

## PASS

Manual visual inspection reported:

> Projeto OK, nenhum erro visual encontrado.

The `/opportunity/access` experience was additionally inspected and reported as:

> Projeto OK, todas as etapas estão corretas e sem erros visuais.

### Responsive baseline

| Viewport    | Result |
| ----------- | ------ |
| 375 × 812   | PASS   |
| 390 × 844   | PASS   |
| 768 × 1024  | PASS   |
| 1024 × 768  | PASS   |
| 1440 × 900  | PASS   |
| 1920 × 1080 | PASS   |

### Visual runtime

* No visible visual errors reported.
* Logo loads correctly.
* Fonts load correctly during development.
* Opportunity access flow renders correctly.
* No reported layout overflow at tested sizes.

---

# Known Issues

## P0 — Production Build Blocker

### `next/font/google` / Turbopack build failure

`npm run build` currently fails while processing Cormorant Garamond through `next/font/google`.

Primary signature:

```text
Can't resolve '@vercel/turbopack-next/internal/font/google/font'
```

Impact:

* production build cannot currently be considered valid;
* deployment readiness is blocked;
* local development remains functional.

---

## P1 — Accessibility

### Confirmation button — Space key

`Return to homepage` on the final Confirmation state does not activate with `Space`, although `Enter` works.

---

## P1 — Navigation focus/scroll behavior

Keyboard focus through the navigation can cause unexpected page scrolling/section changes before a navigation option is selected.

This creates an undesirable keyboard-navigation experience despite the underlying navigation remaining usable.

---

## P2 — CSP verification

CSP was not observed during the supplied network inspection.

Because the latest security commit explicitly concerns security hardening, this deserves a direct header-level verification before considering the security baseline complete.

---

## P2 — ESLint version maintenance

npm reports `eslint@9.39.5` as deprecated/no longer supported.

This is not currently breaking linting.

---

## P2 — Extraneous dependencies

`npm ls --depth=0` reports several extraneous packages.

These should be reconciled against:

* `package.json`
* `package-lock.json`
* Next.js/Turbopack generated dependency requirements

before cleanup is performed.

No cleanup should be performed merely because `npm ls` reports them as extraneous.

---

# Deferred Issues

The following items should remain outside the immediate build-fix scope unless new evidence makes them relevant.

### Deferred — Automated test suite

No unit/integration/E2E test execution was supplied.

Manual runtime and visual validation currently provide the available baseline.

### Deferred — Production Lighthouse

Current Lighthouse scores are local/runtime measurements.

A production deployment measurement should be established after the production build is repaired.

### Deferred — Production SEO verification

Metadata and Lighthouse SEO are passing locally.

Production crawl/indexation behavior has not been established.

### Deferred — Production security-header verification

Headers such as CSP and other security controls should ultimately be verified against the production response, not only local development behavior.

### Deferred — Dependency cleanup

Extraneous packages should be investigated, but dependency cleanup should not be mixed with the current build repair unless required.

### Deferred — ESLint upgrade

The current ESLint version should eventually be moved to a supported version, but this should be treated as maintenance rather than conflated with the current font/Turbopack blocker.

---

# Evidence

## Git

```text
git status
→ On branch main
→ Your branch is up to date with 'origin/main'
→ nothing to commit, working tree clean

git branch --show-current
→ main

git rev-parse HEAD
→ 3ea62b587453039f51e862f2823ca9c39bd0515b

git status --short
→ empty

git diff --stat
→ empty
```

## Environment

```text
Node
→ v22.17.0

npm
→ 10.9.2

package-lock
→ true
```

## Dependencies

```text
npm ci
→ 364 packages added
→ 365 packages audited
→ 0 vulnerabilities

npm install
→ up to date
→ 365 packages audited
→ 0 vulnerabilities

npm audit
→ found 0 vulnerabilities
```

## Static analysis

```text
npm run lint
→ PASS

npx tsc --noEmit
→ PASS
```

## Build

```text
npm run build
→ FAIL

Next.js
→ 16.3.5
→ Turbopack

Primary error
→ Can't resolve '@vercel/turbopack-next/internal/font/google/font'

Affected font pipeline
→ next/font/google
→ Cormorant Garamond
→ src/app/layout.tsx
```

## Runtime

```text
npm run dev
→ PASS

GET /
→ 200

GET /opportunity/access
→ 200

Console
→ no errors observed

Network
→ no 404
→ no 500
→ no blocked requests
```

## Responsive

```text
375 × 812
→ PASS

390 × 844
→ PASS

768 × 1024
→ PASS

1024 × 768
→ PASS

1440 × 900
→ PASS

1920 × 1080
→ PASS
```

## Lighthouse

```text
Mobile
Performance     95
Accessibility   96
Best Practices 100
SEO            100

Desktop
Performance     99
Accessibility   96
Best Practices 100
SEO            100
```

## Manual accessibility

```text
Tab
→ PASS with known navigation-scroll issue

Space
→ PASS generally
→ known failure on Confirmation → Return to homepage

Enter
→ PASS

Esc
→ PASS on mobile navigation

Focus restoration
→ PASS after mobile menu close
```

---

# Baseline Conclusion

The Aurora Meridian source is currently in a **DEGRADED but highly functional development state**.

The project is not suffering from a broad architectural or runtime failure. The evidence shows that the application:

* installs correctly;
* runs correctly in development;
* passes ESLint;
* passes TypeScript;
* has no reported dependency vulnerabilities;
* renders the verified routes correctly;
* has strong Lighthouse results;
* responds correctly across the tested viewport matrix;
* has a clean Git working tree;
* has a synchronized `main` branch;
* has functioning keyboard/mobile interaction across most tested scenarios.

The principal blocker is isolated to the **production build pipeline**, specifically the `next/font/google` → Cormorant Garamond → Turbopack resolution path.

The next engineering objective should therefore be:

> **Restore a successful `npm run build` without unnecessarily changing the visual system, typography intent, architecture, or unrelated dependencies.**

Only after the build returns to PASS should the remaining accessibility and security verification items be promoted according to their actual impact.
