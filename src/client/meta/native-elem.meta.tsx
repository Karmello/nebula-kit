import { NativeElemProps } from 'lib/components'
import { ComponentMeta } from 'lib/definitions'

export default {
  name: 'NativeElem',
  description:
    "NativeElem is a low-level utility that renders the final HTML element using Nebula-kit's internal conventions. It standardizes creation and styling so higher-level components stay consistent - and, in the end, every component in the system funnels down to this layer to output the actual tag.",
  props: [
    {
      category: '',
      name: 'children',
      options: ['ReactNode'],
      defaultValue: '',
      isRequired: false,
      isResponsive: false,
      description: 'Content rendered inside the element.',
    },
    {
      category: '',
      name: 'elem',
      options: ['HTML tag'],
      defaultValue: 'div',
      isRequired: false,
      isResponsive: false,
      description: 'Specifies the HTML tag that will be rendered as the container.',
    },
    {
      category: '',
      name: 'elemProps',
      options: ['HTML tag attributes'],
      defaultValue: '',
      isRequired: false,
      isResponsive: false,
      description: 'Additional HTML attributes applied to the chosen tag.',
    },
    {
      category: '',
      name: 'elemRef',
      options: ['RefObject'],
      defaultValue: '',
      isRequired: false,
      isResponsive: false,
      description: 'Reference to the rendered HTML element.',
    },
  ],
  examples: [],
} as ComponentMeta<NativeElemProps>
