import type { DocOverview } from 'client/definitions'

export const LINK_OVERVIEW: DocOverview = {
  bundle: 'core',
  title: 'Wrapper that makes components navigable.',
  description:
    "Link makes its child navigable while ensuring valid and accessible HTML. In 'merge' mode (the default), it replaces the child's own underlying tag with <a> and merges its attributes in, avoiding invalid nested interactive elements. In 'wrap' mode, it wraps its content with a separate anchor element instead. When an onClick handler is provided, Link automatically prevents the browser's default navigation behavior, allowing you to handle routing or custom logic manually.",
  features: [
    'makes any wrapped content navigable via a single API',
    'merge mode avoids invalid nested interactive elements by taking over the child tag',
    'supports href and target for standard link behavior',
  ],
  exposedTags: ['a'],
}
