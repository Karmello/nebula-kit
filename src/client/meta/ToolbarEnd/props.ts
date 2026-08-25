import type { ToolbarEndProps } from 'lib/components/pro/Toolbar/slots/ToolbarEnd/types'
import type { DocProp } from 'client/definitions'

import { BOX_META } from '../Box'

export const TOOLBAR_END_PROPS: Record<keyof ToolbarEndProps, DocProp> = {
  children: {
    ...BOX_META.props.children,
    isRequired: true,
  },
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
}
