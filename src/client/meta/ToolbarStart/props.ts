import type { ToolbarStartProps } from 'lib/components/pro/Toolbar/slots/ToolbarStart/types'
import type { DocProp } from 'client/definitions'

import { BOX_META } from '../Box'

export const TOOLBAR_START_PROPS: Record<keyof ToolbarStartProps, DocProp> = {
  children: {
    ...BOX_META.props.children,
    isRequired: true,
  },
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
}
