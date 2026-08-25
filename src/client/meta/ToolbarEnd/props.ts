import type { ToolbarEndProps } from 'lib/components/pro/Toolbar/slots/ToolbarEnd/types'
import type { Prop } from 'client/definitions'

import { BOX_META } from '../Box'

export const TOOLBAR_END_PROPS: Record<keyof ToolbarEndProps, Prop> = {
  children: {
    ...BOX_META.props.children,
    isRequired: true,
  },
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
}
