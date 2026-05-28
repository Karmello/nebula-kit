import { type ActionSurfaceProps } from 'lib/components'
import { ActionSurfaceTag } from 'lib/components/core/ActionSurface/definitions'

export const DEFAULT_DROPDOWN_LIST_TRIGGER_VARIANT: DropdownListTriggerProps['variant'] = 'solid'

export type DropdownListTriggerProps<T extends ActionSurfaceTag = 'button'> = Pick<
  ActionSurfaceProps<T>,
  | 'tag'
  | 'blockSize'
  | 'children'
  | 'disabled'
  | 'inlineSize'
  | 'maxBlockSize'
  | 'minBlockSize'
  | 'maxInlineSize'
  | 'minInlineSize'
  | 'onClick'
  | 'padding'
  | 'paddingBlock'
  | 'paddingInline'
  | 'ripple'
  | 'selected'
  | 'variant'
  | 'intent'
>
