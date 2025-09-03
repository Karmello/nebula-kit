const BASIC_COMPONENT_SECTIONS = [
  { key: 'overview', label: 'Overview' },
  { key: 'props', label: 'Props' },
]

const ALL_COMPONENT_SECTIONS = [...BASIC_COMPONENT_SECTIONS, { key: 'examples', label: 'Examples' }]

export const COMPONENT_CATEGORIES = [
  {
    key: 'base',
    label: 'Base',
    items: [
      { key: 'box', label: 'Box', sections: ALL_COMPONENT_SECTIONS },
      { key: 'text', label: 'Text', sections: ALL_COMPONENT_SECTIONS },
    ],
  },
  {
    key: 'layout-base',
    label: 'Layout base',
    items: [
      { key: 'flex', label: 'Flex', sections: ALL_COMPONENT_SECTIONS },
      { key: 'grid', label: 'Grid', sections: ALL_COMPONENT_SECTIONS },
      { key: 'table', label: 'Table', sections: ALL_COMPONENT_SECTIONS },
    ],
  },
  {
    key: 'elements',
    label: 'Elements',
    items: [{ key: 'list', label: 'List', sections: ALL_COMPONENT_SECTIONS }],
  },
  {
    key: 'containers',
    label: 'Containers',
    items: [{ key: 'section', label: 'Section', sections: ALL_COMPONENT_SECTIONS }],
  },
  {
    key: 'controls',
    label: 'Controls',
    items: [{ key: 'button', label: 'Button', sections: ALL_COMPONENT_SECTIONS }],
  },
  {
    key: 'layouts',
    label: 'Layouts',
    items: [
      { key: 'app-frame', label: 'AppFrame', sections: ALL_COMPONENT_SECTIONS },
      { key: 'side-panel-layout', label: 'SidePanelLayout', sections: ALL_COMPONENT_SECTIONS },
    ],
  },
  {
    key: 'feedback',
    label: 'Feedback',
    items: [{ key: 'callout', label: 'Callout', sections: ALL_COMPONENT_SECTIONS }],
  },
  {
    key: 'utility',
    label: 'Utility',
    items: [
      { key: 'nebkit-provider', label: 'NebKitProvider', sections: ALL_COMPONENT_SECTIONS },
      { key: 'native-elem', label: 'NativeElem', sections: BASIC_COMPONENT_SECTIONS },
    ],
  },
]
