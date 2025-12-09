import { ComponentMeta } from 'client/definitions'
import { FooterProps } from 'lib/components'
import { DEFAULT_FOOTER_BORDER_INTENT, FOOTER_TAGS } from 'lib/components/core/layouts/Footer'
import { DEFAULT_SWITCH_AT, SWITCH_AT } from 'lib/definitions'

import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'

const FOOTER_PROPS_META: ComponentMeta<FooterProps>['props'] = {
  children: {
    ...HTML_TAG_PROPS_META.children,
    options: ['Footer.Section'],
    isRequired: true,
    description: 'Slots rendered.',
  },
  tag: {
    ...HTML_TAG_PROPS_META.tag,
    options: FOOTER_TAGS as unknown as string[],
  },
  tagAttrs: HTML_TAG_PROPS_META.tagAttrs,
  tagRef: HTML_TAG_PROPS_META.tagRef,
  borderIntent: {
    ...BOX_PROPS_META.borderIntent,
    defaultValue: String(DEFAULT_FOOTER_BORDER_INTENT),
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
}

export { FOOTER_PROPS_META }
