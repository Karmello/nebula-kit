const PRO_PAGE_SECTIONS = [
  { key: 'overview', label: 'Overview' },
  { key: 'examples', label: 'Examples' },
  { key: 'props', label: 'Props' },
]

export const PRO_PAGE_CATEGORIES = [
  {
    key: 'feedback',
    label: 'Feedback',
    items: [{ key: 'snackbar', label: 'Snackbar', sections: PRO_PAGE_SECTIONS }],
  },
  {
    key: 'overlays',
    label: 'Overlays',
    items: [{ key: 'dialog', label: 'Dialog', sections: PRO_PAGE_SECTIONS }],
  },
  {
    key: 'layouts',
    label: 'Layouts',
    items: [
      { key: 'split-view', label: 'SplitView', sections: PRO_PAGE_SECTIONS },
      { key: 'toolbar', label: 'Toolbar', sections: PRO_PAGE_SECTIONS },
    ],
  },
  {
    key: 'navigation',
    label: 'Navigation',
    items: [
      { key: 'side-nav', label: 'SideNav', sections: PRO_PAGE_SECTIONS },
      { key: 'breadcrumb', label: 'Breadcrumb', sections: PRO_PAGE_SECTIONS },
    ],
  },
  {
    key: 'form-elements',
    label: 'Form elements',
    items: [{ key: 'form', label: 'Form', sections: PRO_PAGE_SECTIONS }],
  },
  {
    key: 'utility',
    label: 'Utility',
    items: [{ key: 'focus-trap', label: 'FocusTrap', sections: PRO_PAGE_SECTIONS }],
  },
]
