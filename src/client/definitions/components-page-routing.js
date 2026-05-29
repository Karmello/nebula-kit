const sections = [
  { key: 'overview', label: 'Overview' },
  { key: 'examples', label: 'Examples' },
  { key: 'props', label: 'Props' },
  { key: 'changelog', label: 'Changelog' },
]

export const COMPONENT_CATEGORIES = [
  {
    key: 'primitives',
    label: 'Primitives',
    items: [
      { key: 'box', label: 'Box', sections, bundle: 'core' },
      { key: 'flex', label: 'Flex', sections, bundle: 'core' },
      { key: 'grid', label: 'Grid', sections, bundle: 'core' },
      { key: 'table', label: 'Table', sections, bundle: 'core' },
      { key: 'text', label: 'Text', sections, bundle: 'core' },
      { key: 'image', label: 'Image', sections, bundle: 'core' },
      { key: 'icon', label: 'Icon', sections, bundle: 'core' },
      { key: 'action-surface', label: 'ActionSurface', sections, bundle: 'core' },
    ],
  },
  {
    key: 'layout',
    label: 'Layout',
    items: [
      { key: 'segment', label: 'Segment', sections, bundle: 'core' },
      { key: 'spacer', label: 'Spacer', sections, bundle: 'core' },
      { key: 'divider', label: 'Divider', sections, bundle: 'core' },
      { key: 'with-icon', label: 'WithIcon', sections, bundle: 'core' },
    ],
  },
  {
    key: 'typography',
    label: 'Typography',
    items: [{ key: 'markup', label: 'Markup', sections, bundle: 'pro' }],
  },
  {
    key: 'images',
    label: 'Images',
    items: [{ key: 'avatar', label: 'Avatar', sections, bundle: 'pro' }],
  },
  {
    key: 'motion',
    label: 'Motion',
    items: [
      { key: 'resize', label: 'Resize', sections, bundle: 'core' },
      { key: 'rotate', label: 'Rotate', sections, bundle: 'core' },
      { key: 'slide', label: 'Slide', sections, bundle: 'core' },
      { key: 'fade', label: 'Fade', sections, bundle: 'pro' },
      { key: 'scale', label: 'Scale', sections, bundle: 'pro' },
    ],
  },
  {
    key: 'controls',
    label: 'Controls',
    items: [
      { key: 'button', label: 'Button', sections, bundle: 'core' },
      { key: 'icon-button', label: 'IconButton', sections, bundle: 'core' },
      { key: 'link', label: 'Link', sections, bundle: 'core' },
      { key: 'tabs', label: 'Tabs', sections, bundle: 'pro' },
    ],
  },
  {
    key: 'containers',
    label: 'Containers',
    items: [
      { key: 'section', label: 'Section', sections, bundle: 'core' },
      { key: 'reveal', label: 'Reveal', sections, bundle: 'core' },
    ],
  },
  {
    key: 'navigation',
    label: 'Navigation',
    items: [
      { key: 'side-nav', label: 'SideNav', sections, bundle: 'pro' },
      { key: 'breadcrumb', label: 'Breadcrumb', sections, bundle: 'pro' },
      { key: 'pagination', label: 'Pagination', sections, bundle: 'pro' },
    ],
  },
  {
    key: 'feedback',
    label: 'Feedback',
    items: [
      { key: 'loader', label: 'Loader', sections, bundle: 'core' },
      { key: 'callout', label: 'Callout', sections, bundle: 'core' },
      { key: 'snackbar', label: 'Snackbar', sections, bundle: 'pro' },
    ],
  },
  {
    key: 'lists',
    label: 'Lists',
    items: [
      { key: 'marker-list', label: 'MarkerList', sections, bundle: 'core' },
      { key: 'virtual-list', label: 'VirtualList', sections, bundle: 'pro' },
    ],
  },
  {
    key: 'overlays',
    label: 'Overlays',
    items: [
      { key: 'dialog', label: 'Dialog', sections, bundle: 'pro' },
      { key: 'tooltip', label: 'Tooltip', sections, bundle: 'pro' },
    ],
  },
  {
    key: 'form-elements',
    label: 'Form elements',
    items: [
      { key: 'form', label: 'Form', sections, bundle: 'pro' },
      { key: 'input', label: 'Input', sections, bundle: 'core' },
      { key: 'password-input', label: 'PasswordInput', sections, bundle: 'pro' },
      { key: 'textarea', label: 'Textarea', sections, bundle: 'core' },
      { key: 'select', label: 'Select', sections, bundle: 'core' },
      { key: 'multi-select', label: 'MultiSelect', sections, bundle: 'pro' },
      { key: 'autocomplete', label: 'Autocomplete', sections, bundle: 'pro' },
      { key: 'checkbox', label: 'Checkbox', sections, bundle: 'core' },
      { key: 'switch', label: 'Switch', sections, bundle: 'pro' },
    ],
  },
  {
    key: 'layouts',
    label: 'Layouts',
    items: [
      { key: 'app-frame', label: 'AppFrame', sections, bundle: 'core' },
      { key: 'footer', label: 'Footer', sections, bundle: 'core' },
      { key: 'split-view', label: 'SplitView', sections, bundle: 'pro' },
      { key: 'toolbar', label: 'Toolbar', sections, bundle: 'pro' },
    ],
  },
  {
    key: 'utility',
    label: 'Utility',
    items: [
      { key: 'nebkit-provider', label: 'NebkitProvider', sections, bundle: 'core' },
      { key: 'hydration-gate', label: 'HydrationGate', sections, bundle: 'core' },
    ],
  },
]

export const COMPONENTS_PAGE_SECTIONS = []

COMPONENT_CATEGORIES.forEach(c =>
  c.items.forEach(i =>
    i.sections.forEach(s => {
      COMPONENTS_PAGE_SECTIONS.push({ categoryKey: c.key, itemKey: i.key, sectionKey: s.key })
    })
  )
)
