import { ComponentMeta } from 'client/definitions'

import { type MarkupProps } from '../definitions'
import { BOX_PROPS_META } from '../../../core/Box/meta/props'

const MARKUP_PROPS_META: ComponentMeta<MarkupProps>['props'] = {
  children: {
    ...BOX_PROPS_META.children,
    isRequired: true,
    description: 'Text content rendered and processed for supported inline markup. Direct Text children are recommended.',
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
}

export { MARKUP_PROPS_META }
