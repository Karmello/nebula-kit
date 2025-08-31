export const FOUNDATION_CATEGORIES = [
  {
    key: 'overview',
    label: 'Overview',
    items: [
      {
        key: 'introduction',
        label: 'Introduction',
        sections: [
          { key: 'about-nebula', label: 'What is NebulaKit' },
          { key: 'features', label: 'Key features' },
          { key: 'problems', label: 'Problems it solves' },
          { key: 'who-for', label: "Who it's for" },
        ],
      },
      {
        key: 'philosophy',
        label: 'Philosophy',
        sections: [
          { key: 'design', label: 'Design principles' },
          { key: 'non-goals', label: 'Non-goals' },
          { key: 'inspirations', label: 'Inspirations' },
        ],
      },
      {
        key: 'architecture',
        label: 'Architecture',
        sections: [
          { key: 'core', label: 'Core layers' },
          { key: 'project', label: 'Project structure' },
          { key: 'rendering', label: 'Rendering model' },
        ],
      },
      {
        key: 'support',
        label: 'Support',
        sections: [
          { key: 'theming', label: 'Theming model' },
          { key: 'accessibility', label: 'Accessibility promise' },
          { key: 'browser-support', label: 'Browser support' },
          { key: 'roadmap', label: 'Roadmap / status' },
        ],
      },
    ],
  },
  {
    key: 'getting-started',
    label: 'Getting Started',
    items: [
      {
        key: 'installation',
        label: 'Installation',
        sections: [
          { key: 'npm', label: 'npm / yarn / pnpm' },
          { key: 'peer-deps', label: 'Peer dependencies' },
          { key: 'package-structure', label: 'Package structure' },
        ],
      },
      {
        key: 'setup',
        label: 'Project Setup',
        sections: [
          { key: 'vite', label: 'Vite' },
          { key: 'webpack', label: 'Webpack' },
          { key: 'next', label: 'Next.js' },
          { key: 'other', label: 'Other environments' },
        ],
      },
      {
        key: 'usage',
        label: 'Basic Usage',
        sections: [
          { key: 'importing', label: 'Importing components' },
          { key: 'styling', label: 'Styling basics' },
          { key: 'theme-switching', label: 'Theme switching' },
        ],
      },
      {
        key: 'examples',
        label: 'Examples',
        sections: [
          { key: 'hello-world', label: 'Hello World component' },
          { key: 'layout', label: 'Basic layout' },
          { key: 'kitchen-sink', label: 'Kitchen sink demo' },
        ],
      },
    ],
  },
  {
    key: 'guides',
    label: 'Guides',
    items: [
      {
        key: 'theming',
        label: 'Theming',
        sections: [
          { key: 'light-dark', label: 'Light & dark mode' },
          { key: 'custom-palettes', label: 'Custom palettes' },
          { key: 'dynamic-switching', label: 'Dynamic theme switching' },
        ],
      },
      {
        key: 'styling',
        label: 'Styling Integration',
        sections: [
          { key: 'tailwind', label: 'Using with Tailwind' },
          { key: 'css-in-js', label: 'Using with CSS-in-JS' },
          { key: 'scss', label: 'Using with SCSS / plain CSS' },
        ],
      },
      {
        key: 'accessibility',
        label: 'Accessibility Recipes',
        sections: [
          { key: 'focus', label: 'Focus management' },
          { key: 'keyboard', label: 'Keyboard navigation' },
          { key: 'aria', label: 'ARIA attributes' },
        ],
      },
      {
        key: 'deployment',
        label: 'Environment',
        sections: [
          { key: 'ssr', label: 'SSR (Next.js, Remix)' },
          { key: 'bundlers', label: 'Vite / Webpack specifics' },
          { key: 'testing', label: 'Testing setup' },
        ],
      },
    ],
  },
  {
    key: 'concepts',
    label: 'Concepts',
    items: [
      {
        key: 'design-tokens',
        label: 'Design Tokens',
        sections: [
          { key: 'spacing', label: 'Spacing scale' },
          { key: 'typography', label: 'Typography system' },
          { key: 'colors', label: 'Color tokens' },
        ],
      },
      {
        key: 'state-events',
        label: 'State & Events',
        sections: [
          { key: 'controlled', label: 'Controlled vs uncontrolled' },
          { key: 'event-system', label: 'Event handling model' },
        ],
      },
      {
        key: 'composition',
        label: 'Composition Patterns',
        sections: [
          { key: 'slots', label: 'Slots & children' },
          { key: 'render-props', label: 'Render props' },
          { key: 'compound', label: 'Compound components' },
        ],
      },
      {
        key: 'responsiveness',
        label: 'Responsiveness',
        sections: [
          { key: 'breakpoints', label: 'Breakpoints' },
          { key: 'adaptive', label: 'Adaptive layouts' },
        ],
      },
    ],
  },
  {
    key: 'resources',
    label: 'Resources',
    items: [
      {
        key: 'faq',
        label: 'FAQ',
        sections: [
          { key: 'general', label: 'General questions' },
          { key: 'troubleshooting', label: 'Troubleshooting common issues' },
        ],
      },
      {
        key: 'performance',
        label: 'Performance',
        sections: [
          { key: 'bundle-size', label: 'Bundle size tips' },
          { key: 'lazy-loading', label: 'Lazy loading components' },
        ],
      },
      {
        key: 'migration',
        label: 'Migration',
        sections: [
          { key: 'v1-to-v2', label: 'v1 → v2 upgrade guide' },
          { key: 'from-other-libs', label: 'Migrating from other UI kits' },
        ],
      },
      {
        key: 'meta',
        label: 'Meta',
        sections: [
          { key: 'contributing', label: 'Contributing guide' },
          { key: 'changelog', label: 'Changelog' },
          { key: 'roadmap', label: 'Roadmap' },
          { key: 'license', label: 'License' },
        ],
      },
    ],
  },
]
