import { BOX_VARIANTS } from 'lib/definitions'

export const BOX_META = () => ({
  name: 'Box',
  description:
    'Box is the foundational layout primitive. It renders as any element (div by default) and provides consistent spacing, typography, sizing, and surface styling through responsive props and CSS variables. Use it as the base container or building block for more complex components.',
  props: [
    {
      category: 'Appearance',
      name: 'Variant',
      options: BOX_VARIANTS,
      // default: BOX_VARIANTS['ghost'],
      description:
        'Controls the visual style of the Box, such as background or border treatment. Variants come from the design system to ensure consistent presentation across components.',
    },
  ],
})
