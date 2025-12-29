const CORE_PAGE_SECTIONS = [
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
      { key: 'html-tag', label: 'HtmlTag', sections: CORE_PAGE_SECTIONS },
      { key: 'box', label: 'Box', sections: CORE_PAGE_SECTIONS },
      { key: 'text', label: 'Text', sections: CORE_PAGE_SECTIONS },
    ],
  },
  {
    key: 'layout',
    label: 'Layout',
    items: [
      { key: 'flex', label: 'Flex', sections: CORE_PAGE_SECTIONS },
      { key: 'grid', label: 'Grid', sections: CORE_PAGE_SECTIONS },
      { key: 'table', label: 'Table', sections: CORE_PAGE_SECTIONS },
      { key: 'segment', label: 'Segment', sections: CORE_PAGE_SECTIONS },
      { key: 'spacer', label: 'Spacer', sections: CORE_PAGE_SECTIONS },
      { key: 'divider', label: 'Divider', sections: CORE_PAGE_SECTIONS },
      { key: 'with-icon', label: 'WithIcon', sections: CORE_PAGE_SECTIONS },
    ],
  },
  {
    key: 'motion',
    label: 'Motion',
    items: [
      { key: 'resize', label: 'Resize', sections: CORE_PAGE_SECTIONS },
      { key: 'rotate', label: 'Rotate', sections: CORE_PAGE_SECTIONS },
      { key: 'slide', label: 'Slide', sections: CORE_PAGE_SECTIONS },
    ],
  },
  {
    key: 'controls',
    label: 'Controls',
    items: [
      { key: 'button', label: 'Button', sections: CORE_PAGE_SECTIONS },
      { key: 'link', label: 'Link', sections: CORE_PAGE_SECTIONS },
    ],
  },
  {
    key: 'elements',
    label: 'Elements',
    items: [
      { key: 'icon', label: 'Icon', sections: CORE_PAGE_SECTIONS },
      { key: 'marker-list', label: 'MarkerList', sections: CORE_PAGE_SECTIONS },
    ],
  },
  {
    key: 'containers',
    label: 'Containers',
    items: [
      { key: 'section', label: 'Section', sections: CORE_PAGE_SECTIONS },
      { key: 'reveal', label: 'Reveal', sections: CORE_PAGE_SECTIONS },
    ],
  },
  {
    key: 'feedback',
    label: 'Feedback',
    items: [
      { key: 'loader', label: 'Loader', sections: CORE_PAGE_SECTIONS },
      { key: 'callout', label: 'Callout', sections: CORE_PAGE_SECTIONS },
    ],
  },
  {
    key: 'overlays',
    label: 'Overlays',
    items: [{ key: 'dropdown-list', label: 'DropdownList', sections: CORE_PAGE_SECTIONS }],
  },
  {
    key: 'layouts',
    label: 'Layouts',
    items: [
      { key: 'app-frame', label: 'AppFrame', sections: CORE_PAGE_SECTIONS },
      { key: 'footer', label: 'Footer', sections: CORE_PAGE_SECTIONS },
    ],
  },
  {
    key: 'form-elements',
    label: 'Form elements',
    items: [
      { key: 'input', label: 'Input', sections: CORE_PAGE_SECTIONS },
      { key: 'textarea', label: 'Textarea', sections: CORE_PAGE_SECTIONS },
      { key: 'select', label: 'Select', sections: CORE_PAGE_SECTIONS },
    ],
  },
  {
    key: 'utility',
    label: 'Utility',
    items: [
      { key: 'nebkit-provider', label: 'NebkitProvider', sections: CORE_PAGE_SECTIONS },
      { key: 'hydration-gate', label: 'HydrationGate', sections: CORE_PAGE_SECTIONS },
      { key: 'portal', label: 'Portal', sections: CORE_PAGE_SECTIONS },
    ],
  },
]
