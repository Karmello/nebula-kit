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
          { key: 'one-foundation', label: 'One foundation' },
          { key: 'systemic-growth', label: 'Systemic growth' },
          { key: 'predictable-behavior', label: 'Predictable behavior' },
          { key: 'visual-coherence', label: 'Visual coherence' },
          { key: 'creative-freedom', label: 'Creative freedom' },
          { key: 'hidden-css', label: 'Hidden CSS' },
          { key: 'visible-composition', label: 'Visible composition' },
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
          { key: 'orthogonality', label: 'Orthogonality' },
          { key: 'intents-and-variants', label: 'Intents + variants' },
          { key: 'color-application', label: 'Color application' },
          { key: 'typography', label: 'Typography' },
          { key: 'breakpoints', label: 'Breakpoints' },
          { key: 'color-palettes', label: 'Color palettes' },
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
