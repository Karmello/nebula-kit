import { ComponentMeta } from 'client/definitions'

import { BOX_PROPS_META } from '../../../Box/meta/props'
import { type TableCaptionProps, DEFAULT_TABLE_CAPTION_INTENT } from '../../slots/TableCaption/definitions'

const TABLE_CAPTION_PROPS_META: ComponentMeta<TableCaptionProps>['props'] = {
  children: {
    ...BOX_PROPS_META.children,
    isRequired: true,
  },
  color: BOX_PROPS_META.color,
  intent: {
    ...BOX_PROPS_META.intent,
    defaultValue: String(DEFAULT_TABLE_CAPTION_INTENT),
  },
  paddingBlock: BOX_PROPS_META.paddingBlock,
  paddingInline: BOX_PROPS_META.paddingInline,
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
  textAlign: BOX_PROPS_META.textAlign,
}

export { TABLE_CAPTION_PROPS_META }
