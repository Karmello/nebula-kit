import { DEFAULT_ICON_SIZE } from 'lib/components/core/Icon/constants'
import type { IconProps } from 'lib/components/core/Icon/types'
import type { Prop } from 'client/definitions'

import { BOX_META } from '../Box'

export const ICON_PROPS: Record<keyof IconProps, Prop> = {
  children: {
    ...BOX_META.props.children,
    description: 'Custom SVG icon rendered when not using name prop.',
  },
  color: {
    ...BOX_META.props.color,
    description: 'Color applied to the icon.',
  },
  intent: {
    ...BOX_META.props.intent,
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
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
}
