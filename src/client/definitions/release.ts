export const RELEASE_VERSIONS = [
  '0.11.0',
  '0.10.0',
  '0.9.0',
  '0.8.0',
  '0.7.0',
  '0.6.1',
  '0.6.0',
  '0.5.0',
  '0.4.3',
  '0.4.2',
  '0.4.1',
  '0.4.0',
  '0.3.0',
  '0.2.3',
] as const

export type ReleaseVersion = (typeof RELEASE_VERSIONS)[number]

export const RELEASE_INFO: Record<
  ReleaseVersion,
  {
    timestamp: number
    headline?: string
    changelog?: { main?: string[]; core?: string[]; pro?: string[] }
  }
> = {
  '0.11.0': {
    timestamp: 1779375775922,
    headline: '...',
    changelog: {
      main: [
        'improved tsd coverage and aligned specs more accurately with documented component APIs',
        'optimized Box runtime DOM synchronization by reducing redundant dataset/style mutations and minimizing internal allocation overhead during responsive updates',
        'improved Patterns page',
      ],
    },
  },
  '0.10.0': {
    timestamp: 1779319530393,
    headline: 'Typography refinement',
    changelog: {
      main: [
        'removed the compact typography scale to simplify the typography system',
        'refined the typography scale for better readability and visual balance',
        'exposed typography and length scales as reusable CSS custom properties for external styling and custom content',
        'fixed slot resolution behavior by distinguishing between strict and optional slot systems, preserving plain text and non-slot children when no required slots are defined',
        'with this release, the NebulaKit website introduced the new Patterns page and Website Map',
      ],
    },
  },
  '0.9.0': {
    timestamp: 1778295383512,
    headline: 'Scale standardization + responsiveness evolution',
    changelog: {
      main: [
        'standardized logical size, margin, padding, gap and inset/offset props to use predefined scale values',
        'extended the breakpoint system with a new xxl range for large screens and wide layouts',
        'added support for global saturation profiles to control the overall color intensity of the application',
        'fixed an issue in the responsive styling system where runtime-applied styles could override user-defined inline styles (tagAttrs.style), inline styles are now respected as the source of truth and are no longer overwritten by system updates',
        'with this release, the NebulaKit website introduced the AI chat assistant',
      ],
    },
  },
  '0.8.0': {
    timestamp: 1777258833132,
    headline: 'Styling engine rewrite',
    changelog: {
      main: [
        'reduced final CSS bundle size from ~176 KB to ~43 KB',
        'completely rebuilt the styling engine around explicit state and deterministic resolution - styling context (theme, brand, color) is now resolved in React and expressed directly on the DOM, eliminating implicit CSS inheritance and cascade-driven behavior',
        'replaced the previous context-based token layer with a simplified, scoped token system - CSS now acts as a pure rendering layer instead of a logic engine',
        'refined the color token system to align with the new architecture, improving consistency across themes, brands and surfaces while keeping behavior predictable and composable',
        'expanded the palette to support a wider and more expressive range of values within the new system constraints',
        'simplified component APIs by removing experimental and no-longer-needed props made obsolete by the new styling model',
        'improved internal styling performance, debuggability and development velocity through clearer separation of concerns and removal of redundant abstraction layers',
        'switched focus rings from box-shadow to outline to eliminate corner artifacts and ensure consistent rendering without layout shifts',
        'this release establishes a more predictable and explicit styling foundation for future components and features',
      ],
    },
  },
  '0.7.0': {
    timestamp: 1773443646502,
    headline: 'Color system consolidation',
    changelog: {
      main: [
        'simplified the color system by reducing the palette to nine core colors',
        'reduced the number of brand colors',
        'standardized lightness scale across all brand palettes',
        'consolidated theme color token mapping into a single source and simplified dark theme to use palette inversion',
        'introduced an elevated surface state axis to separate semantic intent from stateful surface appearance and simplify component APIs',
        'replaced color-mix() state blending with relative lightness scaling',
        'rebalanced ripple opacity values across all theme, variant and intent combinations',
      ],
    },
  },
  '0.6.1': {
    timestamp: 1770829250673,
    changelog: {
      main: [
        'improved contrast handling for bright brand colors in light and dark themes',
        'contrast logic moved into color resolution layer for consistency',
      ],
    },
  },
  '0.6.0': {
    timestamp: 1770590689376,
    headline: 'Component refinement',
    changelog: {
      main: ['refined Button sizing'],
    },
  },
  '0.5.0': {
    timestamp: 1770177660907,
    headline: 'Interaction polish',
    changelog: {
      main: ['improved ripple animation', 'improved focus rings'],
    },
  },
  '0.4.3': {
    timestamp: 1769904739419,
    changelog: {
      main: ['enhanced editor IntelliSense with richer tooltips for slots and slot props'],
    },
  },
  '0.4.2': {
    timestamp: 1769515247187,
    changelog: {
      main: ['enhanced editor IntelliSense with richer tooltips for components'],
    },
  },
  '0.4.1': {
    timestamp: 1769434481859,
    changelog: {
      main: ['enhanced editor IntelliSense with richer tooltips for component props'],
    },
  },
  '0.4.0': {
    timestamp: 1769178791000,
    headline: 'Expansion + DX refinement',
  },
  '0.3.0': {
    timestamp: 1768567158078,
    headline: 'First advanced/pro ecosystem',
  },
  '0.2.3': {
    timestamp: 1767722681237,
    headline: 'Initial public foundation',
  },
}
