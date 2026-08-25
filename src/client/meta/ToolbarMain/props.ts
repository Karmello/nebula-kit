import type { ToolbarMainProps } from 'lib/components/pro/Toolbar/slots/ToolbarMain/types'
import type { DocProp } from 'client/definitions'

import { BOX_META } from '../Box'

export const TOOLBAR_MAIN_PROPS: Record<keyof ToolbarMainProps, DocProp> = {
  children: {
    ...BOX_META.props.children,
    isRequired: true,
  },
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
}
