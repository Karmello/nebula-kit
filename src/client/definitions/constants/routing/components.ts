const COMPONENT_SECTIONS = [
  { key: 'overview', label: 'Overview' },
  { key: 'usage', label: 'Usage' },
  { key: 'props', label: 'Props' },
  { key: 'demo', label: 'Demo' },
]

export const COMPONENT_CATEGORIES = [
  {
    key: 'base',
    label: 'Base',
    items: [
      { key: 'box', label: 'Box', sections: COMPONENT_SECTIONS },
      { key: 'flex', label: 'Flex', sections: COMPONENT_SECTIONS },
      { key: 'grid', label: 'Grid', sections: COMPONENT_SECTIONS },
      { key: 'table', label: 'Table', sections: COMPONENT_SECTIONS },
    ],
  },
  {
    key: 'elements',
    label: 'Elements',
    items: [
      { key: 'text', label: 'Text', sections: COMPONENT_SECTIONS },
      { key: 'list', label: 'List', sections: COMPONENT_SECTIONS },
    ],
  },
  {
    key: 'containers',
    label: 'Containers',
    items: [{ key: 'section', label: 'Section', sections: COMPONENT_SECTIONS }],
  },
  {
    key: 'controls',
    label: 'Controls',
    items: [{ key: 'button', label: 'Button', sections: COMPONENT_SECTIONS }],
  },
  {
    key: 'layout-base',
    label: 'Layout base',
    items: [{ key: 'stack', label: 'Stack', sections: COMPONENT_SECTIONS }],
  },
  {
    key: 'layouts',
    label: 'Layouts',
    items: [
      { key: 'app-frame', label: 'AppFrame', sections: COMPONENT_SECTIONS },
      { key: 'side-panel-layout', label: 'SidePanelLayout', sections: COMPONENT_SECTIONS },
    ],
  },
  {
    key: 'feedback',
    label: 'Feedback',
    items: [{ key: 'callout', label: 'Callout', sections: COMPONENT_SECTIONS }],
  },
]
