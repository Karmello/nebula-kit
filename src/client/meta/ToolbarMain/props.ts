import type { ToolbarMainProps } from 'lib/components/pro/Toolbar/slots/ToolbarMain/types'
import type { Prop } from 'client/definitions'

import { BOX_META } from '../Box'

export const TOOLBAR_MAIN_PROPS: Record<keyof ToolbarMainProps, Prop> = {
  children: {
    ...BOX_META.props.children,
    isRequired: true,
  },
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
}
