import type { DocOverview } from 'client/definitions'

export const BOX_OVERVIEW: DocOverview = {
  bundle: 'core',
  title: 'Foundational visual surface component that exposes a curated set of core CSS properties.',
  description:
    'Box lets you style a plain block-level element directly in JSX, covering appearance, layout, spacing, sizing and positioning.',
  features: [
    'paints its own background and border through `bgMode`, `borderMode`, `color`, `intent` and `surfaceDepth`, gated by the `drawable` prop',
    'supports flexbox and CSS grid layout directly, so a separate layout wrapper is never required',
    'controls padding, margin, border width and border radius per side or as an all-sides shorthand',
    'supports absolute, relative and fixed positioning with inset, offset and z-index props',
    'provides optional interactivity through the `interactive` prop - hover, active, focus, disabled and selected states',
    'acts as the surface foundation that higher-level components (e.g. Button, Text) render under the hood',
  ],
  guidelines: [
    "can be used as a simple wrapper, similar to how you'd normally reach for <div>",
    'use `drawable` prop to turn Box into a surface that paints colors',
    'use `interactive` prop to turn Box into a surface that responds to hover, active and focus states',
    'use `surfaceDepth` prop to control the depth style of the component',
    'set `display="flex"` or `display="grid"` directly on Box to combine layout with a painted surface on the same element',
    'wrap Box in `StylingIsland` to give it and its descendants a local theme or brand context',
  ],
  composedOf: ['HtmlElem'],
}
