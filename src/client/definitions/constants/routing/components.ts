const COMPONENT_SECTIONS = [
  { key: 'overview', label: 'Overview' },
  { key: 'examples', label: 'Examples' },
  { key: 'props', label: 'Props' },
]

export const COMPONENT_CATEGORIES = [
  {
    key: 'base',
    label: 'Base',
    items: [
      { key: 'html-tag', label: 'HtmlTag', sections: COMPONENT_SECTIONS },
      { key: 'box', label: 'Box', sections: COMPONENT_SECTIONS },
      { key: 'text', label: 'Text', sections: COMPONENT_SECTIONS },
    ],
  },
  {
    key: 'layout',
    label: 'Layout',
    items: [
      { key: 'flex', label: 'Flex', sections: COMPONENT_SECTIONS },
      { key: 'grid', label: 'Grid', sections: COMPONENT_SECTIONS },
      { key: 'table', label: 'Table', sections: COMPONENT_SECTIONS },
      { key: 'spacer', label: 'Spacer', sections: COMPONENT_SECTIONS },
      { key: 'with-icon', label: 'WithIcon', sections: COMPONENT_SECTIONS },
    ],
  },
  {
    key: 'motion',
    label: 'Motion',
    items: [
      { key: 'animate', label: 'Animate', sections: COMPONENT_SECTIONS },
      { key: 'rotate', label: 'Rotate', sections: COMPONENT_SECTIONS },
    ],
  },
  {
    key: 'controls',
    label: 'Controls',
    items: [
      { key: 'button', label: 'Button', sections: COMPONENT_SECTIONS },
      { key: 'button-group', label: 'ButtonGroup', sections: COMPONENT_SECTIONS },
      { key: 'link', label: 'Link', sections: COMPONENT_SECTIONS },
    ],
  },
  {
    key: 'elements',
    label: 'Elements',
    items: [
      { key: 'icon', label: 'Icon', sections: COMPONENT_SECTIONS },
      { key: 'divider', label: 'Divider', sections: COMPONENT_SECTIONS },
      { key: 'marker-list', label: 'MarkerList', sections: COMPONENT_SECTIONS },
    ],
  },
  {
    key: 'containers',
    label: 'Containers',
    items: [
      { key: 'section', label: 'Section', sections: COMPONENT_SECTIONS },
      { key: 'reveal', label: 'Reveal', sections: COMPONENT_SECTIONS },
    ],
  },
  {
    key: 'feedback',
    label: 'Feedback',
    items: [{ key: 'callout', label: 'Callout', sections: COMPONENT_SECTIONS }],
  },
  {
    key: 'overlays',
    label: 'Overlays',
    items: [{ key: 'dropdown-list', label: 'DropdownList', sections: COMPONENT_SECTIONS }],
  },
  {
    key: 'layouts',
    label: 'Layouts',
    items: [
      { key: 'app-frame', label: 'AppFrame', sections: COMPONENT_SECTIONS },
      { key: 'footer', label: 'Footer', sections: COMPONENT_SECTIONS },
      { key: 'split-view', label: 'SplitView', sections: COMPONENT_SECTIONS },
      { key: 'toolbar', label: 'Toolbar', sections: COMPONENT_SECTIONS },
    ],
  },
  {
    key: 'navigation',
    label: 'Navigation',
    items: [
      { key: 'side-nav', label: 'SideNav', sections: COMPONENT_SECTIONS },
      { key: 'breadcrumb', label: 'Breadcrumb', sections: COMPONENT_SECTIONS },
    ],
  },
  {
    key: 'form',
    label: 'Form',
    items: [
      { key: 'input', label: 'Input', sections: COMPONENT_SECTIONS },
      { key: 'select', label: 'Select', sections: COMPONENT_SECTIONS },
      { key: 'Form', label: 'Form', sections: COMPONENT_SECTIONS },
    ],
  },
  {
    key: 'utility',
    label: 'Utility',
    items: [
      { key: 'nebkit-provider', label: 'NebkitProvider', sections: COMPONENT_SECTIONS },
      { key: 'hydration-gate', label: 'HydrationGate', sections: COMPONENT_SECTIONS },
      { key: 'portal', label: 'Portal', sections: COMPONENT_SECTIONS },
    ],
  },
]
