import { PROP_GROUPS } from 'lib/constants'
import { ComponentMeta, DOCS_CSS_LABEL } from 'client/definitions'

import { BOX_META } from '../../Box/meta'
import { DEFAULT_ICON_SIZE } from '../constants'
import type { IconProps } from '../types'
import { ICON_EXAMPLES } from './examples'

export const ICON_META = {
  Icon: {
    overview: {
      bundle: 'core',
      title: 'SVG icon wrapped in a styled inline container.',
      features: [
        'exposes a curated subset of icons from "Lucide React"',
        'allows rendering a custom SVG icon via children while preserving semantic styling',
      ],
      exposedTags: ['span'],
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
      color: {
        ...BOX_META.Box.props.color,
        description: 'Color applied to the icon.',
      },
      intent: {
        ...BOX_META.Box.props.intent,
        description: 'Color tone applied to the icon.',
      },
      size: {
        group: PROP_GROUPS.SIZE,
        options: [DOCS_CSS_LABEL],
        defaultValue: String(DEFAULT_ICON_SIZE),
        description: 'Size of the icon.',
      },
      children: {
        ...BOX_META.Box.props.children,
        description: 'Custom SVG icon rendered when not using name prop.',
      },
      tagRef: BOX_META.Box.props.tagRef,
      tagAttrs: BOX_META.Box.props.tagAttrs,
    },
    examples: ICON_EXAMPLES,
    changelog: {
      '0.10.0': ['made `name` and `size` props responsive'],
      '0.9.0': ['added support for predefined size scale values on the `size` prop'],
      '0.2.3': ['released'],
    },
  } satisfies ComponentMeta<IconProps>,
}
