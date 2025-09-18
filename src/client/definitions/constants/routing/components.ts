const COMPONENT_SECTIONS = [
  { key: 'overview', label: 'Overview' },
  { key: 'examples', label: 'Examples' },
  { key: 'props', label: 'Own props' },
]

export const COMPONENT_CATEGORIES = [
  {
    key: 'base',
    label: 'Base',
    items: [
      { key: 'box', label: 'Box', sections: COMPONENT_SECTIONS },
      { key: 'text', label: 'Text', sections: COMPONENT_SECTIONS },
    ],
  },
  {
    key: 'layout-base',
    label: 'Layout base',
    items: [
      { key: 'flex', label: 'Flex', sections: COMPONENT_SECTIONS },
      { key: 'grid', label: 'Grid', sections: COMPONENT_SECTIONS },
      { key: 'table', label: 'Table', sections: COMPONENT_SECTIONS },
      { key: 'spacer', label: 'Spacer', sections: COMPONENT_SECTIONS.filter(s => s.key !== 'props') },
    ],
  },
  {
    key: 'controls',
    label: 'Controls',
    items: [
      { key: 'button', label: 'Button', sections: COMPONENT_SECTIONS },
      {
        key: 'icon-button',
        label: 'IconButton',
        sections: COMPONENT_SECTIONS.filter(s => s.key !== 'props'),
      },
    ],
  },
  {
    key: 'elements',
    label: 'Elements',
    items: [
      { key: 'marker-list', label: 'MarkerList', sections: COMPONENT_SECTIONS },
      { key: 'svg-icon', label: 'SvgIcon', sections: COMPONENT_SECTIONS },
      { key: 'divider', label: 'Divider', sections: COMPONENT_SECTIONS },
    ],
  },
  {
    key: 'containers',
    label: 'Containers',
    items: [{ key: 'section', label: 'Section', sections: COMPONENT_SECTIONS }],
  },
  {
    key: 'feedback',
    label: 'Feedback',
    items: [{ key: 'callout', label: 'Callout', sections: COMPONENT_SECTIONS }],
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
    key: 'navigation',
    label: 'Navigation',
    items: [{ key: 'app-nav-bar', label: 'AppNavBar', sections: COMPONENT_SECTIONS }],
  },
  {
    key: 'utility',
    label: 'Utility',
    items: [
      { key: 'nebkit-provider', label: 'NebKitProvider', sections: COMPONENT_SECTIONS },
      { key: 'hydration-gate', label: 'HydrationGate', sections: COMPONENT_SECTIONS },
      { key: 'native-elem', label: 'NativeElem', sections: COMPONENT_SECTIONS },
      { key: 'with-icon', label: 'WithIcon', sections: COMPONENT_SECTIONS },
    ],
  },
]
