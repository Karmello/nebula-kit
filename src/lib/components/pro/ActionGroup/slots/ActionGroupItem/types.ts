import { ACTION_GROUP_ITEM_TAGS } from 'lib/components/pro/ActionGroup/slots/ActionGroupItem'
import { FlexItemProps } from 'lib/index.core'
import { ActionGroupProps } from 'lib/index.pro'

export type ActionGroupItemTag = (typeof ACTION_GROUP_ITEM_TAGS)[number]

export type ActionGroupItemProps<T extends ActionGroupItemTag = 'button'> = Pick<
  FlexItemProps<T>,
  'tag' | 'tagAttrs' | 'tagRef' | 'disabled'
> & {
  children: FlexItemProps<T>['children']
  selected?: boolean
}

export type ActionGroupItemInternalProps = Pick<ActionGroupProps, 'color' | 'intent' | 'ripple' | 'direction' | 'square'> & {
  itemsCount: number
  isFirst: boolean
  isLast: boolean
}
