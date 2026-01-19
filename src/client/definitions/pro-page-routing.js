const sections = [
  { key: 'overview', label: 'Overview' },
  { key: 'examples', label: 'Examples' },
  { key: 'props', label: 'Props' },
  { key: 'changelog', label: 'Changelog' },
]

export const PRO_PAGE_CATEGORIES = [
  {
    key: 'layout',
    label: 'Layout',
    items: [{ key: 'virtual-list', label: 'VirtualList', sections }],
  },
  {
    key: 'controls',
    label: 'Controls',
    items: [{ key: 'tabs', label: 'Tabs', sections }],
  },
  {
    key: 'feedback',
    label: 'Feedback',
    items: [{ key: 'snackbar', label: 'Snackbar', sections }],
  },
  {
    key: 'overlays',
    label: 'Overlays',
    items: [
      { key: 'dialog', label: 'Dialog', sections },
      { key: 'floating', label: 'Floating', sections },
      { key: 'tooltip', label: 'Tooltip', sections },
    ],
  },
  {
    key: 'layouts',
    label: 'Layouts',
    items: [
      { key: 'split-view', label: 'SplitView', sections },
      { key: 'toolbar', label: 'Toolbar', sections },
    ],
  },
  {
    key: 'navigation',
    label: 'Navigation',
    items: [
      { key: 'side-nav', label: 'SideNav', sections },
      { key: 'breadcrumb', label: 'Breadcrumb', sections },
      { key: 'pagination', label: 'Pagination', sections },
    ],
  },
  {
    key: 'form-elements',
    label: 'Form elements',
    items: [
      { key: 'form', label: 'Form', sections },
      { key: 'multi-select', label: 'MultiSelect', sections },
      { key: 'autocomplete', label: 'Autocomplete', sections },
    ],
  },
  {
    key: 'utility',
    label: 'Utility',
    items: [
      { key: 'focus-trap', label: 'FocusTrap', sections },
      { key: 'measure', label: 'Measure', sections },
    ],
  },
]

export const PRO_PAGE_SECTIONS = []

PRO_PAGE_CATEGORIES.forEach(c =>
  c.items.forEach(i =>
    i.sections.forEach(s => {
      PRO_PAGE_SECTIONS.push({ categoryKey: c.key, itemKey: i.key, sectionKey: s.key })
    })
  )
)
