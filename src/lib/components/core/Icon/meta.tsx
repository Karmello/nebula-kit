import { Footprints } from 'lucide-react'

import { PROP_GROUPS } from 'lib/constants'
import { Icon, IconProps } from 'lib/index.core'
import { ComponentMeta, DOCS_CSS_LABEL } from 'client/definitions'

import { BOX_META } from '../Box/meta'
import { DEFAULT_ICON_SIZE, ICON_SIZES } from './definitions'

export const ICON_META = {
  Icon: {
    overview: {
      bundle: 'core',
      title: 'SVG icon wrapped in a styled inline container.',
      features: [
        'exposes a curated subset of icons from "Lucide React"',
        'allows rendering a custom SVG icon via children while preserving semantic styling',
      ],
      topLevelTags: ['span'],
      readMoreLink: {
        label: 'See all available icons',
        href: '/foundations/resources/assets/icons',
      },
    },
    props: {
      name: {
        group: PROP_GROUPS.ICON,
        options: ['IconName'],
        isResponsive: true,
        description: 'Name of the icon to render.',
      },
      size: {
        group: PROP_GROUPS.ICON,
        options: [...ICON_SIZES, DOCS_CSS_LABEL],
        defaultValue: String(DEFAULT_ICON_SIZE),
        isResponsive: true,
        description: 'Size of the icon.',
      },
      color: {
        ...BOX_META.Box.props.color,
        description: 'Color applied to the icon.',
      },
      intent: {
        ...BOX_META.Box.props.intent,
        description: 'Color tone applied to the icon.',
      },
      children: {
        ...BOX_META.Box.props.children,
        description: 'Custom SVG icon rendered instead of name.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
    examples: [
      {
        description: 'Default icon.',
        jsx: <Icon name="search" />,
      },
      {
        description: 'Icon with custom color and intent.',
        jsx: <Icon name="search" color="blue" intent="primary" />,
      },
      {
        description: 'Custom SVG icon passed as children, semantic styling stays preserved.',
        jsx: (
          <Icon color="blue" intent="primary">
            <Footprints />
          </Icon>
        ),
        code: `import { Icon } from 'lib/components'
import { Footprints } from 'lucide-react'

<Icon color="blue" intent="primary">
  <Footprints />
</Icon>
`,
      },
      {
        description: 'Icon with custom size.',
        jsx: <Icon name="search" size="xl" />,
      },
    ],
    changelog: {
      '0.10.0': ['made `name` and `size` props responsive'],
      '0.9.0': ['added support for predefined size scale values on the `size` prop'],
      '0.2.3': ['released'],
    },
  } as ComponentMeta<IconProps>,
}
