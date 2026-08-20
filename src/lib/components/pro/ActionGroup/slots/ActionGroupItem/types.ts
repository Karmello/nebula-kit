import { ComponentPropsWithoutRef } from 'react'

import { ACTION_GROUP_ITEM_TAGS } from 'lib/components/pro/ActionGroup/slots/ActionGroupItem'
import { type BoxProps } from 'lib/index.core'
import { type ActionGroupProps } from 'lib/index.pro'

export type ActionGroupItemTag = (typeof ACTION_GROUP_ITEM_TAGS)[number]

export type ActionGroupItemProps<T extends ActionGroupItemTag = 'button'> = Pick<
  BoxProps<T>,
  'tag' | 'tagAttrs' | 'tagRef' | 'disabled'
> & {
  children: BoxProps<T>['children']
  selected?: boolean
  onClick?: ComponentPropsWithoutRef<T>['onClick']
}

export type ActionGroupItemInternalProps = Pick<
  ActionGroupProps,
  'color' | 'intent' | 'elevated' | 'ripple' | 'direction' | 'stretch'
> & {
  index: number
}
