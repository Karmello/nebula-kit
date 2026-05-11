const sections = [
  { key: 'overview', label: 'Overview' },
  { key: 'examples', label: 'Examples' },
  { key: 'props', label: 'Props' },
  { key: 'changelog', label: 'Changelog' },
]

export const CORE_PAGE_CATEGORIES = [
  {
    key: 'base',
    label: 'Base',
    items: [
      { key: 'html-tag', label: 'HtmlTag', sections },
      { key: 'box', label: 'Box', sections },
      { key: 'text', label: 'Text', sections },
      { key: 'image', label: 'Image', sections },
    ],
  },
  {
    key: 'layout',
    label: 'Layout',
    items: [
      { key: 'flex', label: 'Flex', sections },
      { key: 'grid', label: 'Grid', sections },
      { key: 'table', label: 'Table', sections },
      { key: 'segment', label: 'Segment', sections },
      { key: 'spacer', label: 'Spacer', sections },
      { key: 'divider', label: 'Divider', sections },
      { key: 'with-icon', label: 'WithIcon', sections },
    ],
  },
  {
    key: 'motion',
    label: 'Motion',
    items: [
      { key: 'resize', label: 'Resize', sections },
      { key: 'rotate', label: 'Rotate', sections },
      { key: 'slide', label: 'Slide', sections },
    ],
  },
  {
    key: 'controls',
    label: 'Controls',
    items: [
      { key: 'action-surface', label: 'ActionSurface', sections },
      { key: 'button', label: 'Button', sections },
      { key: 'link', label: 'Link', sections },
    ],
  },
  {
    key: 'elements',
    label: 'Elements',
    items: [
      { key: 'icon', label: 'Icon', sections },
      { key: 'marker-list', label: 'MarkerList', sections },
    ],
  },
  {
    key: 'containers',
    label: 'Containers',
    items: [
      { key: 'section', label: 'Section', sections },
      { key: 'reveal', label: 'Reveal', sections },
    ],
  },
  {
    key: 'feedback',
    label: 'Feedback',
    items: [
      { key: 'loader', label: 'Loader', sections },
      { key: 'callout', label: 'Callout', sections },
    ],
  },
  {
    key: 'overlays',
    label: 'Overlays',
    items: [{ key: 'dropdown-list', label: 'DropdownList', sections }],
  },
  {
    key: 'layouts',
    label: 'Layouts',
    items: [
      { key: 'app-frame', label: 'AppFrame', sections },
      { key: 'footer', label: 'Footer', sections },
    ],
  },
  {
    key: 'form-elements',
    label: 'Form elements',
    items: [
      { key: 'input', label: 'Input', sections },
      { key: 'textarea', label: 'Textarea', sections },
      { key: 'select', label: 'Select', sections },
      { key: 'checkbox', label: 'Checkbox', sections },
    ],
  },
  {
    key: 'utility',
    label: 'Utility',
    items: [
      { key: 'nebkit-provider', label: 'NebkitProvider', sections },
      { key: 'hydration-gate', label: 'HydrationGate', sections },
      { key: 'portal', label: 'Portal', sections },
    ],
  },
]

export const CORE_PAGE_SECTIONS = []

CORE_PAGE_CATEGORIES.forEach(c =>
  c.items.forEach(i =>
    i.sections.forEach(s => {
      CORE_PAGE_SECTIONS.push({ categoryKey: c.key, itemKey: i.key, sectionKey: s.key })
    })
  )
)
