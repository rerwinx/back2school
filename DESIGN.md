---
name: GitHub Copilot Back to School Series 2026
description: A connected developer learning journey expressed through contribution graphs, terminal surfaces, and a restrained rose signal.
colors:
  light-page: "#f7f4ef"
  light-elevated: "#fcfbf8"
  light-surface: "#ffffff"
  light-surface-soft: "#f5f5f5"
  light-border: "#dedede"
  light-border-strong: "#919191"
  light-text: "#242424"
  light-text-muted: "#5c5c5c"
  light-text-soft: "#6f6f6f"
  light-rose: "#b11f4b"
  light-rose-hover: "#9a1a41"
  light-rose-soft: "rgba(177, 31, 75, 0.08)"
  light-accent-foreground: "#ffffff"
  dark-page: "#3d3b3a"
  dark-elevated: "#343231"
  dark-surface: "#292929"
  dark-surface-soft: "#2e2e2e"
  dark-border: "#474747"
  dark-border-strong: "#5f5f5f"
  dark-text: "#dedede"
  dark-text-muted: "#919191"
  dark-text-soft: "#b0b0b0"
  dark-rose: "#fd8ea1"
  dark-rose-hover: "#fb7b91"
  dark-rose-soft: "rgba(253, 142, 161, 0.14)"
  dark-accent-foreground: "#1a1a1a"
  success-light: "#16a34a"
  success-dark: "#4ade80"
typography:
  display:
    fontFamily: "Segoe UI, Aptos, Calibri, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(3.5rem, 7vw, 6rem)"
    fontWeight: 720
    lineHeight: 0.98
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Segoe UI, Aptos, Calibri, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(2.4rem, 5vw, 4.5rem)"
    fontWeight: 720
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  title:
    fontFamily: "Segoe UI, Aptos, Calibri, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(1.8rem, 4vw, 3.25rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Segoe UI, Aptos, Calibri, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Segoe UI, Aptos, Calibri, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.82rem"
    fontWeight: 750
    lineHeight: 1.4
    letterSpacing: "0.02em"
  mono:
    fontFamily: "Consolas, Courier New, Courier, monospace"
    fontSize: "0.72rem"
    fontWeight: 700
    lineHeight: 1.4
rounded:
  control: "0.625rem"
  container: "1rem"
  pill: "999px"
spacing:
  page-gutter: "1rem"
  compact: "0.5rem"
  control: "1rem"
  content: "2rem"
  section: "7rem"
  page-width: "76rem"
  reading-width: "70ch"
components:
  button-primary:
    backgroundColor: "{colors.light-rose}"
    textColor: "{colors.light-accent-foreground}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1rem"
    height: "3rem"
  button-primary-hover:
    backgroundColor: "{colors.light-rose-hover}"
    textColor: "{colors.light-accent-foreground}"
    rounded: "{rounded.control}"
    padding: "0.7rem 1rem"
    height: "3rem"
  workflow-card:
    backgroundColor: "{colors.light-surface}"
    textColor: "{colors.light-text}"
    rounded: "{rounded.container}"
    padding: "0"
  role-control:
    backgroundColor: "{colors.light-surface}"
    textColor: "{colors.light-text}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.8rem 1rem"
    height: "4rem"
  role-control-selected:
    backgroundColor: "{colors.light-rose-soft}"
    textColor: "{colors.light-rose}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0.8rem 1rem"
    height: "4rem"
  registration-link:
    backgroundColor: "{colors.light-surface}"
    textColor: "{colors.light-text}"
    typography: "{typography.mono}"
    rounded: "{rounded.control}"
    padding: "0.65rem 0.8rem"
    width: "9.5rem"
---

# Design System: GitHub Copilot Back to School Series 2026

## Overview

**Creative North Star: "The Connected Development Journey"**

The visual world presents the series as one progressive workflow rather than an event-card stack. An editorial promise leads into contribution-graph rails, terminal framing, and linked session surfaces so visitors can understand progression, find the right starting point, and register without leaving the journey metaphor.

The system is professional, technical, and quiet. Warm page tones and GitHub-like controls provide credibility; the rose signal marks dates, graph nodes, focus, and primary action. The first viewport pairs large editorial copy with a four-node graph, and the same connected structure continues through the weekly curriculum.

**Key Characteristics:**
- Connected graph and rail structures express sequence.
- Terminal chrome and monospace labels make workflow concepts tangible.
- Rose is a sparse signal, not a decorative wash.
- Light and dark themes share the same hierarchy and state semantics.
- Content remains detailed, scannable, and registration-oriented.

## Colors

The palette combines warm neutrals with a single rose accent. Light mode is paper-like; dark mode uses warm charcoal rather than pure black. Theme variables switch through `data-theme`, initialized from the `scoutTheme` query parameter or the system color-scheme preference.

### Primary
- **Rose Signal:** Used for graph nodes, dates, primary buttons, focus outlines, prompts, and key-takeaway emphasis.
- **Soft Rose Signal:** Used only as the background for selected or hovered workflow controls.

### Neutral
- **Warm Page and Elevated Canvas:** Separate the site background from reading and workflow regions without introducing competing hues.
- **White or Charcoal Surfaces:** Hold graph, session, navigation, and registration containers.
- **Quiet Borders:** Define structure at rest; the stronger border is reserved for controls, rails, and emphasis.
- **Primary, Soft, and Muted Text:** Maintain a clear editorial hierarchy while keeping secondary metadata subdued.
- **Live Green:** Appears only in the graph status indicator.

**The Rose Signal Rule.** Rose communicates progression, selection, focus, or action; do not use it as broad decoration.

**The Warm Neutral Rule.** Preserve the warm paper and charcoal foundations; do not replace them with clinical white, blue-gray, or pure black.

## Typography

**Display and Body Font:** Segoe UI with Aptos, Calibri, and system sans-serif fallbacks  
**Label/Mono Font:** Consolas with Courier fallbacks

**Character:** The sans-serif stack is direct and editorial, using tight tracking and compact leading for large promises. Monospace is an interface voice for dates, commands, workflow filenames, week labels, and registration times, not a body-text treatment.

### Hierarchy
- **Display:** Reserved for the hero promise; large, tightly tracked, and limited to a short line length.
- **Headline:** Used for major section and registration statements.
- **Title:** Used for individual session names.
- **Body:** Comfortable long-form reading with a maximum measure of 70 characters where the layout permits.
- **Label:** Dense, confident metadata and control copy; uppercase is limited to small structural labels.
- **Mono:** Small technical metadata and terminal cues.

**The Two-Voice Rule.** Use sans-serif for explanation and monospace for workflow metadata; never set paragraphs or major headings in monospace.

## Layout

The page uses a centered fluid container capped at 76rem, with a 1rem outer gutter that tightens to 0.625rem below 430px. Desktop sections use generous 7rem vertical rhythm and asymmetric grids: editorial copy beside the graph, explanation beside controls, and story beside learning details.

The workflow is spatially connected. The hero graph uses four staggered cards beside a vertical contribution rail; weekly sessions share a continuous rail and week markers. Session interiors divide narrative and structured learning content rather than repeating generic cards.

At 960px, primary grids collapse to one column and session interiors stack. At 720px, navigation becomes an expandable menu, the graph becomes a single vertical track, session rails simplify to labels, and session-action layouts wrap. At 430px, primary actions and session choices become full-width stacks.

The fixed background grid uses 4rem cells and fades out within the upper page. It supports the developer-workflow atmosphere without competing with content.

**The Journey Before Cards Rule.** New layouts must preserve visible sequence or flow; do not arrange related curriculum content as an interchangeable event-card grid.

## Elevation & Depth

Depth is restrained and structural. Containers use a fine border plus a compact ambient shadow (`0 0 2px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.14)`). The larger shadow (`0 18px 48px rgba(0, 0, 0, 0.12)` in light mode and `rgba(0, 0, 0, 0.32)` in dark mode) appears only when a primary action or signature graph surface lifts.

**The Flat-at-Rest Rule.** Borders and tonal layers establish default hierarchy; pronounced elevation is a response to interaction or a signature focal surface.

## Shapes

Controls, labels, and small workflow steps use gently rounded 0.625rem corners. Major graph, session, and registration containers use 1rem corners. Pills are reserved for compact status such as the Recommended marker. One-pixel borders, circular graph nodes, thin rails, and arrow lines provide the system's precise GitHub-like geometry.

The hero graph may carry a slight 1.2-degree rotation on wide screens to distinguish it as the editorial artifact; it straightens on hover and remains unrotated on smaller screens. Avoid decorative blobs, oversized capsules, and unrelated illustration shapes.

## Components

### Buttons and Links
- **Primary button:** Rose fill, high-contrast foreground, compact control radius, strong label weight, and a minimum 3rem touch height.
- **Hover:** Darkens slightly, rises 2px, and gains the larger ambient shadow.
- **Text link:** Uses normal text color with a quiet underline, becoming rose on hover.
- **Session-action link:** A bordered terminal-style control containing either a registration time and action label or a completed session's recording action, plus an external-arrow cue.
- **Focus:** Every interactive element uses a visible 3px rose outline with a 3px offset.

### Navigation
- Desktop navigation is visually quiet: muted text, compact rounded hit areas, and a bordered Register control.
- Hover introduces only a soft surface and stronger text.
- Below 720px, navigation becomes a bordered menu button and an independent surface menu. `aria-expanded` and the native `hidden` attribute are the state contract; choosing a link closes the menu.

### Workflow Graph
- The signature graph is a terminal-framed surface with a toolbar, four-node rail, staggered linked steps, and a command footer.
- Step hover uses a rose border, soft rose background, and a small upward shift.
- The live-status dot is green; all progression nodes remain rose.

### Session Containers
- Each week is a connected rail marker plus one large container, not an independent promotional card.
- Headers pair date/title with a quiet audience panel. Bodies divide narrative, takeaway, and structured learning details. Registration controls remain attached as the final workflow row.

### Motion
- Standard control transitions run for 160ms; signature graph movement uses 500ms with `cubic-bezier(0.16, 1, 0.3, 1)`.
- Motion is limited to small translation, scale, opacity, shadow, border, and background changes. It communicates hover and elevation state rather than providing ambient spectacle.
- Under `prefers-reduced-motion: reduce`, smooth scrolling is disabled and transitions collapse to 0.01ms.

## Do's and Don'ts

### Do:
- **Do** show curriculum as a connected contribution graph, workflow map, or rail.
- **Do** keep the first viewport focused on an editorial promise beside the four-node series graph.
- **Do** use terminal details selectively for filenames, commands, dates, weeks, and times.
- **Do** preserve explicit 10:00 and 16:00 BST choices for upcoming sessions and use one clear recording action for completed sessions.
- **Do** retain semantic landmarks, keyboard-operable controls, skip navigation, visible focus, live announcements, sufficient contrast, and reduced-motion behavior.

### Don't:
- **Don't** turn the page into a stack or grid of interchangeable event cards.
- **Don't** use rose as a large background field or introduce competing accent colors.
- **Don't** replace the quiet controls with glossy gradients, glass effects, heavy glows, or oversized pill buttons.
- **Don't** use motion that changes layout unexpectedly or makes access to session and registration content conditional.
- **Don't** communicate selection or navigation state by color alone; preserve text, outlines, labels, and ARIA state.
