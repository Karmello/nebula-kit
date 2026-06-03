import { ElementType } from 'react'

import { HtmlTag, HtmlTagProps } from 'lib/components'
import { ComponentMeta } from 'client/definitions'

export const HTML_TAG_META = {
  HtmlTag: {
    overview: {
      bundle: 'core',
      title: 'Low-level component that renders an HTML tag.',
      features: [
        'renders the specified HTML tag',
        'forwards the relevant attributes for the tag',
        'passes through the ref',
        'polymorphic design lets you swap the underlying element while still receiving the correct props, ensuring the component resolves to a predictable, semantic element',
        'intentionally minimal - higher-level primitives usually fit better',
        'provides an escape hatch for raw elements or styles when you need the lowest possible abstraction',
      ],
    },
    props: {
      children: {
        options: ['ReactNode'],
        description: 'Content rendered.',
      },
      tag: {
        options: ['HTML tag'],
        defaultValue: 'div',
        description: 'The HTML tag to be rendered as the container.',
      },
      tagAttrs: {
        options: ['HTML tag attributes'],
        description: 'Additional HTML attributes applied to the root tag.',
      },
      tagRef: {
        options: ['RefObject'],
        description: 'Reference to the root HTML tag.',
      },
    },
    examples: [
      {
        description: 'Renders as <div> by default.',
        jsx: <HtmlTag />,
        noSandBox: true,
      },
      {
        description: 'Choosing the <a> tag, makes its all attributes available on the tagAttrs property.',
        jsx: <HtmlTag tag="a" tagAttrs={{ href: 'https://google.com' }} />,
        noSandBox: true,
      },
    ],
    hideExamplesThemeToggle: true,
    changelog: {
      '0.2.3': ['released'],
    },
  } satisfies ComponentMeta<HtmlTagProps<ElementType>>,
}
