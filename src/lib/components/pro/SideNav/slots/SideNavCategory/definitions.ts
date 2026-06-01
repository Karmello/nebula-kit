import { BoxProps, ButtonProps } from 'lib/components'

import { SideNavVariant } from '../../definitions'
import { RespValue } from 'lib/types'

export const DEFAULT_SIDE_NAV_CATEGORY_VARIANT: SideNavCategoryProps['variant'] = 'ghost'
export const DEFAULT_SIDE_NAV_CATEGORY_INTENT: SideNavCategoryProps['intent'] = 'neutral'
export const DEFAULT_SIDE_NAV_CATEGORY_EXPANDED: SideNavCategoryProps['expanded'] = false

type SideNavCategoryOwnProps = {
  label: string
  expanded?: boolean
}

type PropsFromBox = Pick<BoxProps<'ul'>, 'tagAttrs' | 'tagRef'> & {
  children: BoxProps<'ul'>['children']
  variant?: RespValue<SideNavVariant>
}

type PropsFromButton = Pick<ButtonProps<'button'>, 'color' | 'intent' | 'align' | 'bold'>

export type SideNavCategoryProps = PropsFromBox & PropsFromButton & SideNavCategoryOwnProps
