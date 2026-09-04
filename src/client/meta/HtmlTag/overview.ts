import type { DocOverview } from 'client/definitions'

export const HTML_TAG_OVERVIEW: DocOverview = {
  bundle: 'core',
  title: 'Low-level component that renders an HTML tag.',
  features: [
    'renders the specified HTML tag',
    'forwards the relevant attributes for the tag',
    'passes through the ref',
    'polymorphic design lets you swap the underlying element while still receiving the correct props, ensuring the component resolves to a predictable, semantic element',
    'intentionally minimal - higher-level primitives usually fit better',
    'provides an escape hatch for raw elements or styles when you need the lowest possible abstraction',
  ],
}
