import { ComponentMeta } from 'client/definitions'
import { FooterProps } from 'lib/components'
import { DEFAULT_FOOTER_BORDER_INTENT, FOOTER_TAGS } from 'lib/components/core/Footer'
import { DEFAULT_SWITCH_AT, SWITCH_AT } from 'lib/definitions'

import { BOX_PROPS_META } from '../Box/props'

const FOOTER_PROPS_META: ComponentMeta<FooterProps>['props'] = {
  borderIntent: {
    ...BOX_PROPS_META.intent,
    defaultValue: String(DEFAULT_FOOTER_BORDER_INTENT),
    description: 'Sets the visual intent of the dividers between sections.',
  },
  children: {
    ...BOX_PROPS_META.children,
    options: ['Footer.Section'],
    isRequired: true,
    description: 'Slots rendered.',
  },
  padding: BOX_PROPS_META.padding,
  paddingBlock: BOX_PROPS_META.paddingBlock,
  paddingInline: BOX_PROPS_META.paddingInline,
  paddingTop: BOX_PROPS_META.paddingTop,
  paddingRight: BOX_PROPS_META.paddingRight,
  paddingBottom: BOX_PROPS_META.paddingBottom,
  paddingLeft: BOX_PROPS_META.paddingLeft,
  switchAt: {
    options: SWITCH_AT as unknown as string[],
    defaultValue: DEFAULT_SWITCH_AT,
    description:
      'Defines the breakpoint at which footer sections switch from stacking vertically to arranging horizontally within the layout.',
  },
  tag: {
    ...BOX_PROPS_META.tag,
    options: FOOTER_TAGS,
  },
  tagAttrs: BOX_PROPS_META.tagAttrs,
  tagRef: BOX_PROPS_META.tagRef,
}

export { FOOTER_PROPS_META }
