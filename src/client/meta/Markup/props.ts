import { MarkupProps } from 'lib/index.pro'
import type { DocProp } from 'client/definitions'

import { BOX_META } from '../Box'

export const MARKUP_PROPS: Record<keyof MarkupProps, DocProp> = {
  children: {
    ...BOX_META.props.children,
    isRequired: true,
    description:
      'Text content rendered and processed for supported inline markup. Direct Text children are recommended.',
  },
  tagAttrs: BOX_META.props.tagAttrs,
  tagRef: BOX_META.props.tagRef,
}
