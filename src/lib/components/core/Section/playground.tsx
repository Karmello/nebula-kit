import { SectionProps } from 'lib/index.core'

export type PropsFromSectionKey = (typeof PROPS_FROM_SECTION)[number]

export const PROPS_FROM_SECTION = [
  'children',
  'color',
  'heading',
  'headingIntent',
  'iconName',
  'iconPlacement',
  'intent',
  'interactive',
  'size',
  'variant',
] as const satisfies readonly (keyof SectionProps)[]

export const SECTION_PRESETS = [
  {
    name: 'Basic',
    props: {
      children: 'This is simple basic section.',
      heading: 'Basic section',
    } as Record<PropsFromSectionKey, unknown>,
  },
  {
    name: 'With border',
    props: {
      children: 'This section has icon and blue border around the content.',
      color: 'blue',
      heading: 'Section with border',
      iconName: 'settings',
      intent: 'secondary',
      size: 'lg',
      variant: 'outline',
    } as Record<PropsFromSectionKey, unknown>,
  },
  {
    name: 'Interactive',
    props: {
      children: 'This is interactive Section that responds visually to hover and active states.',
      color: 'blue',
      heading: 'Interactive section',
      iconName: 'settings',
      intent: 'secondary',
      size: 'lg',
      variant: 'outline',
      interactive: true,
    } as Record<PropsFromSectionKey, unknown>,
  },
]
