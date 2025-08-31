const COMPONENT_SECTIONS = [
  { key: 'overview', label: 'Overview' },
  { key: 'props', label: 'Props' },
  { key: 'usage', label: 'Usage' },
  { key: 'playground', label: 'Playground' },
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
    key: 'controls',
    label: 'Controls',
    items: [{ key: 'button', label: 'Button', sections: COMPONENT_SECTIONS }],
  },
]
