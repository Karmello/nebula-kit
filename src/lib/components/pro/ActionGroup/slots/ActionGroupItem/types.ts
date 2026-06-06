import { ComponentPropsWithoutRef } from 'react'

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
  onClick?: ComponentPropsWithoutRef<T>['onClick']
}

export type ActionGroupItemInternalProps = Pick<
  ActionGroupProps,
  'color' | 'intent' | 'elevated' | 'ripple' | 'direction' | 'attached'
> & {
  index: number
  itemsCount: number
  isFirst: boolean
  isLast: boolean
}
