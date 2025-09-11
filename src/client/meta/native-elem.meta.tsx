import { NativeElem, NativeElemProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

const NATIVE_ELEM_META: ComponentMeta<NativeElemProps<any>> = {
  overview: {
    description:
      'NativeElem is a low-level utility that renders the chosen HTML tag. Its polymorphic design means you can swap the underlying element while still getting the correct props, ensuring every NebulaKit component resolves to a predictable, semantic element.',
    role: [
      'renders the chosen HTML tag',
      'forwards the relevant attributes for the tag',
      'passes through the ref',
    ],
    byDefault: ['renders as div'],
    examplesOfUse: [
      'rarely needed in everyday code - usually you would want to use Box, Flex, Grid, or other higher-level component instead',
      'could be helpful as an escape hatch if you need the absolute lowest layer without extra props or behaviors',
    ],
  },
  props: [
    {
      name: 'children',
      options: ['ReactNode'],
      isRequired: false,
      isResponsive: false,
      description: 'Content rendered inside the element.',
    },
    {
      name: 'elem',
      options: ['HTML tag'],
      defaultValue: 'div',
      isRequired: false,
      isResponsive: false,
      description: 'Specifies the HTML tag that will be rendered as the container.',
    },
    {
      name: 'elemProps',
      options: ['HTML tag attributes'],
      isRequired: false,
      isResponsive: false,
      description: 'Additional HTML attributes applied to the chosen tag.',
    },
    {
      name: 'elemRef',
      options: ['RefObject'],
      isRequired: false,
      isResponsive: false,
      description: 'Reference to the rendered HTML element.',
    },
  ],
  examples: [
    {
      description: 'NativeElem renders a div tag by default.',
      jsx: <NativeElem />,
      noSandBox: true,
    },
    {
      description: 'When elem="a", all <a> tag attributes are available on elemProps.',
      jsx: <NativeElem elem="a" elemProps={{ href: '...' }} />,
      noSandBox: true,
    },
  ],
}

export default {
  NativeElem: NATIVE_ELEM_META,
}
