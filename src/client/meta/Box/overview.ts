import type { DocOverview } from 'client/definitions'

export const BOX_OVERVIEW: DocOverview = {
  bundle: 'core',
  title: 'Foundational visual surface component that exposes a curated set of core CSS properties.',
  description:
    'Box is a foundational visual surface component that exposes a curated set of core CSS properties - appearance, spacing, sizing and positioning - so you can style a plain block-level element directly in JSX.',
  features: [
    'acts as the surface foundation that higher-level components (e.g. Button, Text) render under the hood',
    'provides optional interactivity - hover, active, focus, disabled and selected states',
    "can be used as a simple wrapper, similar to how you'd normally reach for <div>",
  ],
  guidelines: [
    'use `drawable` prop to turn Box into a surface that paints colors',
    'use `surfaceDepth` prop to control the depth style of the component',
    'wrap Box in `StylingIsland` to give it and its descendants a local theme or brand context',
  ],
  composedOf: ['HtmlTag'],
}
