export const FOUNDATIONS_CATEGORIES = [
  {
    key: 'overview',
    label: 'Overview',
    items: [
      {
        key: 'introduction',
        label: 'Introduction',
        sections: [
          { key: 'why-nebula', label: 'Why "Nebula"' },
          { key: 'about-nebula-kit', label: 'About NebulaKit' },
          { key: 'audience', label: 'Audience' },
          { key: 'under-the-hood', label: 'Under the hood' },
        ],
      },
      {
        key: 'philosophy',
        label: 'Philosophy',
        sections: [
          { key: 'jsx-first', label: 'JSX first' },
          { key: 'built-on-composition', label: 'Built on composition' },
          { key: 'inheriting-props', label: 'Inheriting props' },
          { key: 'enforcing-semantics', label: 'Enforcing semantics' },
          { key: 'orthogonal-styling-axes', label: 'Orthogonal styling axes' },
          { key: 'unified-drawing-model', label: 'Unified drawing model' },
          { key: 'unified-responsiveness', label: 'Unified responsiveness' },
          { key: 'resistant-to-entropy', label: 'Resistant to entropy' },
        ],
      },
      {
        key: 'getting-started',
        label: 'Getting started',
        sections: [
          { key: 'installation', label: 'Installation' },
          { key: 'requirements', label: 'Requirements' },
          { key: 'use-with-vite', label: 'Use with Vite' },
          { key: 'use-with-webpack5', label: 'Use with Webpack 5' },
        ],
      },
    ],
  },
  {
    key: 'concepts',
    label: 'Concepts',
    items: [
      {
        key: 'styling-system',
        label: 'Styling system',
        sections: [
          { key: 'color-palettes', label: 'Color palettes' },
          { key: 'color-calibration', label: 'Color calibration' },
          { key: 'typography', label: 'Typography' },
          { key: 'breakpoints', label: 'Breakpoints' },
          { key: 'intents-and-variants', label: 'Intents + variants' },
          { key: 'color-application', label: 'Color application' },
          { key: 'styling-axes', label: 'Styling axes' },
          { key: 'drawable-surface', label: 'Drawable surface' },
          { key: 'theme-island', label: 'Theme island' },
        ],
      },
      {
        key: 'architecture',
        label: 'Architecture',
        sections: [
          { key: 'responsive-props', label: 'Responsive props' },
          { key: 'react-refs', label: 'React refs' },
          { key: 'slots', label: 'Slots' },
          { key: 'render-function', label: 'Render function' },
        ],
      },
    ],
  },
  {
    key: 'resources',
    label: 'Resources',
    items: [
      {
        key: 'changelog',
        label: 'Changelog',
        sections: [
          { key: 'v0.8.0', label: 'v0.8.0' },
          { key: 'v0.7.0', label: 'v0.7.0' },
          { key: 'v0.6.1', label: 'v0.6.1' },
          { key: 'v0.6.0', label: 'v0.6.0' },
          { key: 'v0.5.0', label: 'v0.5.0' },
          { key: 'v0.4.3', label: 'v0.4.3' },
          { key: 'v0.4.2', label: 'v0.4.2' },
          { key: 'v0.4.1', label: 'v0.4.1' },
          { key: 'v0.4.0', label: 'v0.4.0' },
          { key: 'v0.3.0', label: 'v0.3.0' },
          { key: 'v0.2.3', label: 'v0.2.3' },
        ],
      },
      {
        key: 'assets',
        label: 'Assets',
        sections: [{ key: 'icons', label: 'Icons' }],
      },
    ],
  },
  {
    key: 'other',
    label: 'Other',
    items: [
      {
        key: 'legal',
        label: 'Legal',
        sections: [
          { key: 'terms-of-use', label: 'Terms of Use' },
          { key: 'license', label: 'License' },
          { key: 'privacy-policy', label: 'Privacy Policy' },
        ],
      },
    ],
  },
]

export const FOUNDATIONS_SECTIONS = []

FOUNDATIONS_CATEGORIES.forEach(c =>
  c.items.forEach(i =>
    i.sections.forEach(s => {
      FOUNDATIONS_SECTIONS.push({ categoryKey: c.key, itemKey: i.key, sectionKey: s.key })
    })
  )
)
