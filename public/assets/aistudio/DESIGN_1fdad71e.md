---
name: Tech-Chinoiserie Creative Studio
colors:
  surface: '#faf8ff'
  surface-dim: '#d2d9f4'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f3ff'
  surface-container: '#eaedff'
  surface-container-high: '#e2e7ff'
  surface-container-highest: '#dae2fd'
  on-surface: '#131b2e'
  on-surface-variant: '#434655'
  inverse-surface: '#283044'
  inverse-on-surface: '#eef0ff'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006a61'
  on-secondary: '#ffffff'
  secondary-container: '#86f2e4'
  on-secondary-container: '#006f66'
  tertiary: '#ac0031'
  on-tertiary: '#ffffff'
  tertiary-container: '#d71142'
  on-tertiary-container: '#ffecec'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#89f5e7'
  secondary-fixed-dim: '#6bd8cb'
  on-secondary-fixed: '#00201d'
  on-secondary-fixed-variant: '#005049'
  tertiary-fixed: '#ffdada'
  tertiary-fixed-dim: '#ffb3b6'
  on-tertiary-fixed: '#40000c'
  on-tertiary-fixed-variant: '#920028'
  background: '#faf8ff'
  on-background: '#131b2e'
  surface-variant: '#dae2fd'
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 52px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Noto Serif
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Noto Serif
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 38px
  headline-md:
    fontFamily: Noto Serif
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Noto Serif
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  title-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 10px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-lg: 1.5rem
  margin: 1.5rem
  margin-mobile: 1rem
  space-2xs: 0.125rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1rem
  space-xl: 1.5rem
  space-2xl: 2rem
---

## Brand & Style

This design system defines an immersive studio environment for creative writers, world-builders, and screenwriters. The aesthetic fuses **Eastern Calligraphic Poetics** with **Cybernetic Precision** (东方未来主义 / Tech-Chinoiserie). 

The emotional tone balances intellectual serenity with high-velocity creative momentum:
- **Atmospheric & Scholarly**: Evoking the quiet resonance of raw xuan paper, layered ink washes, traditional seal stamps, and classical scroll navigation.
- **Cybernetic & Analytical**: Crisp linear nodes, glowing spline connections, modular data panels, and structural graph workflows inspired by mortise-and-tenon (榫卯) architecture and algorithmic logic.

The interface leverages modern glassmorphism infused with subtle ink-bleed diffusion and hairline structural framing, avoiding historical pastiche while delivering a sharp, tactile workspace designed for deep focus.

## Colors

The palette establishes tension between the depth of traditional mineral pigments and the luminosity of modern interface displays:

- **Ultramarine Tech Blue (`#2563EB`)**: The primary active state, digital pulse, and focus highlight. Represents generative intelligence, active graph node states, and core action pathways.
- **Tianshui Bi / River Mist Teal (`#0D9488`)**: The secondary tonal anchor. Applied to knowledge taxonomy, environmental tags, and auxiliary narrative threads.
- **Vermilion Stamp Red (`#E11D48`) & Imperial Amber (`#D97706`)**: Expressive accents. Used sparingly for critical plot turning points, verification stamps, conflict milestones, and high-priority node markers.
- **Deep Ink Slate (`#0F172A`)**: The neutral core, grounding the typography and high-density panels like solid ink stone.

### Surface Tiers & Translucency
The default canvas uses an airy, cold-porcelain tone (`#F8FAFC` to `#F1F5F9`) layered with 85%–92% translucent white glass overlays. For dark canvas editors or graph views, surfaces invert to dense ink slate (`#0B0F19`) with cyan-hued glow rings, maintaining high legibility through disciplined luminance separation.

## Typography

The typographic hierarchy harmonizes editorial gravitas with operational efficiency:

- **Headlines & Editorial Focus (`Noto Serif`)**: Brings the brush-carved cadence of Song dynasty typefaces to story titles, major graph chapters, and chapter milestones. It signals literature, permanence, and depth.
- **Interface & Prose Body (`Plus Jakarta Sans`)**: Delivers clear, unencumbered legibility for dense outlines, manuscript drafts, dialogue cards, and sidebar listings.
- **Labels, Telemetry & Metadata (`Space Grotesk`)**: Provides geometric clarity for node coordinates, word counters, version tags (e.g., `v1.0.3`), timestamps, and system indicators.

## Layout & Spacing

The workspace uses a dense, modular multi-pane workbench optimized for continuous flow:

- **Desktop (>= 1280px)**: A 3-to-4-pane responsive frame consisting of a collapsed or full navigation spine (240px), dynamic workspace canvas (infinite scroll or graph surface), and an inspectable context drawer (320px–380px).
- **Tablet (768px - 1279px)**: Split-screen architecture with collapsable off-canvas drawers for graph inspectors and character references.
- **Mobile (< 768px)**: Single active panel with horizontal scroll-snapped segment tabs mirroring bamboo slip rolls.

Gaps and padding strictly align with an 8px architectural grid (with 4px sub-increments for compact badges and metadata fields). Margins between functional card groups maintain sufficient breathing space (`1.5rem`) to evoke classical negative space (留白, *liubai*).

## Elevation & Depth

Visual hierarchy rejects heavy, dirty drop shadows in favor of luminous atmospheric layering:

- **Ink Wash Glass (Base Tier)**: Semi-transparent backdrop blur (`backdrop-filter: blur(16px)`) with pure white translucent fill (`rgba(255, 255, 255, 0.78)`) in light mode, framed with an ultra-fine border (`1px solid rgba(226, 232, 240, 0.8)`).
- **Diffused Ink Glow (Mid Tier - Hover & Active)**: Elevated cards cast a soft, tinted cyan-slate shadow: `0 8px 24px -4px rgba(37, 99, 235, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04)`.
- **Node Focus (Top Tier)**: Critical nodes in the Novel Graph deploy dual halos: an inner high-contrast stroke (`1.5px solid #2563EB`) accompanied by an outer soft radiant ring (`0 0 12px rgba(37, 99, 235, 0.25)`).
- **Mortise Hairlines**: Panels and interior splitters feature crisp, 1px geometric tracks echoing architectural framework joints.

## Shapes

The interface balances soft curved corners with tight structural discipline:
- Base interactive elements (buttons, inputs, regular chips) carry an 8px radius (`rounded-md`), offering a smooth tactile touch.
- Story graph nodes and modular inspiration cards utilize 12px to 16px radius (`rounded-lg` / `rounded-xl`) to feel like individual paper blocks or smooth jade tiles.
- Avatars, status pills, and chapter progression chips utilize pill styling for frictionless visual separation.

## Components

### 1. Action Buttons
- **Primary Cyber-Ink Button**: Rich blue gradient (`#2563EB` to `#1D4ED8`) or deep ink slate background, high-contrast white text, soft cyan inner border sheen, and active spring transform (`scale(0.98)`).
- **Secondary Xuan Button**: Frosted translucent surface (`rgba(255, 255, 255, 0.85)`), hairline slate border, subtle ink wash tint on hover.
- **Tertiary Seal Icon Button**: Minimalist square container with 8px radius, icon colored in slate or deep blue, transitioning to vermilion on critical toggle states.

### 2. Novel Graph Nodes & Connectors
- **Story Nodes**: Rounded glass tiles containing an icon/avatar, role title in bold serif, status tag, and subtle colored edge-bar indicating story faction or plotline category.
- **Splines & Paths**: Bezier curved connecting strokes rendered as dynamic watercolor paths: muted grey for completed threads, pulsating gradient blue/cyan for current narrative focuses, and dashed vermilion for unresolved plot tensions.

### 3. 印章 (Yinzhang) Seal Badges & Tags
- Compact label containers featuring square or pill geometry.
- Finished status: Vermilion tinted border and background (`rgba(225, 29, 72, 0.08)`) with vermilion text (`#E11D48`), mirroring an artisan wax seal.
- Drafting status: Soft amber or ink teal wash.

### 4. Input Fields & Prompt Editors
- Flat frosted backdrop with 1px structural hairline borders (`#CBD5E1`).
- Focus state activates an instantaneous ultramarine outline accompanied by a faint cyan ambient glow. Includes integrated quick-action chips for character tagging, location pin insertion, and AI expansion prompts.

### 5. Inspiration & World-Building Cards
- Modular cards showcasing a micro-thumbnail banner, serif headline, condensed summary, and bottom metadata row (character mentions, word count, last modified).
- Border highlights smoothly track pointer proximity, revealing subtle geometric corners reminiscent of traditional Chinese window lattice fretwork.

### 6. Scroll Navigation (卷轴式流转)
- Horizontal secondary sub-bars utilize seamless horizontal scrolling with subtle left/right edge fade gradients that evoke an unrolling silk handscroll.