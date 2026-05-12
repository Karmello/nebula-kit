import { ComponentMeta } from 'client/definitions'

import { type ActionSurfaceProps } from 'lib/components'
import { ACTION_SURFACE_TAGS } from 'lib/components/core/controls/ActionSurface/definitions'

import { BOX_PROPS_META } from '../Box/props'

const ACTION_SURFACE_PROPS_META: ComponentMeta<ActionSurfaceProps>['props'] = {
  blockSize: BOX_PROPS_META.blockSize,
  children: BOX_PROPS_META.children,
  color: BOX_PROPS_META.color,
  disabled: BOX_PROPS_META.disabled,
  elevated: BOX_PROPS_META.elevated,
  hidden: BOX_PROPS_META.hidden,
  inlineSize: BOX_PROPS_META.inlineSize,
  intent: BOX_PROPS_META.intent,
  maxBlockSize: BOX_PROPS_META.maxBlockSize,
  maxInlineSize: BOX_PROPS_META.maxInlineSize,
  minBlockSize: BOX_PROPS_META.minBlockSize,
  minInlineSize: BOX_PROPS_META.minInlineSize,
  selected: {
    options: ['boolean'],
    description: 'Applies the selected visual behavior to the component, keeping it in a persistent highlighted state.',
  },
  tag: {
    ...BOX_PROPS_META.tag,
    options: ACTION_SURFACE_TAGS,
    defaultValue: 'button',
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
  variant: BOX_PROPS_META.variant,
}

export { ACTION_SURFACE_PROPS_META }
