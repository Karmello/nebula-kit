import { ComponentMeta } from 'client/definitions'

import { BOX_META } from '../../Box/meta'
import { DEFAULT_ICON_SIZE } from '../constants'
import type { IconProps } from '../types'
import { ICON_CHANGELOG } from './changelog'
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
      children: {
        ...BOX_META.Box.props.children,
        description: 'Custom SVG icon rendered when not using name prop.',
      },
      color: {
        ...BOX_META.Box.props.color,
        description: 'Color applied to the icon.',
      },
      intent: {
        ...BOX_META.Box.props.intent,
        description: 'Color tone applied to the icon.',
      },
      name: {
        options: ['IconName'],
        isResponsive: true,
        description: 'Name of the icon to render.',
      },
      size: {
        options: ['string'],
        defaultValue: String(DEFAULT_ICON_SIZE),
        description: 'Size of the icon.',
      },
      tagAttrs: BOX_META.Box.props.tagAttrs,
      tagRef: BOX_META.Box.props.tagRef,
    },
    examples: ICON_EXAMPLES,
    changelog: ICON_CHANGELOG,
  } satisfies ComponentMeta<IconProps>,
}
