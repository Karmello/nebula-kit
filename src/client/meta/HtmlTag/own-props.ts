import { ElementType } from 'react'

import { ComponentMeta } from 'client/definitions'
import { HtmlTagProps } from 'lib/components'

export default [
  {
    name: 'children',
    options: ['ReactNode'],
    isRequired: false,
    isResponsive: false,
    description: 'Content rendered inside the element.',
  },
  {
    name: 'tag',
    options: ['HTML tag'],
    defaultValue: 'div',
    isRequired: false,
    isResponsive: false,
    description: 'Specifies the HTML tag that will be rendered as the container.',
  },
  {
    name: 'tagAttrs',
    options: ['HTML tag attributes'],
    isRequired: false,
    isResponsive: false,
    description: 'Additional HTML attributes applied to the chosen tag.',
  },
  {
    name: 'tagRef',
    options: ['RefObject'],
    isRequired: false,
    isResponsive: false,
    description: 'Reference to the rendered HTML element.',
  },
] as ComponentMeta<HtmlTagProps<ElementType>>['ownProps']
