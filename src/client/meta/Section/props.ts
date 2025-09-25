import { ComponentMeta } from 'client/definitions'
import { SectionProps } from 'lib/components/containers/Section/definitions'
import { HTML_TAG_PROPS_META } from '../HtmlTag/props'
import { BOX_PROPS_META } from '../Box/props'

const SECTION_PROPS_META: ComponentMeta<SectionProps>['props'] = {
  ...HTML_TAG_PROPS_META,
  tag: {
    ...HTML_TAG_PROPS_META.tag,
    defaultValue: '<section>',
  },
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  variant: BOX_PROPS_META.variant,
  intent: BOX_PROPS_META.intent,
  borderRadius: BOX_PROPS_META.borderRadius,
  padding: BOX_PROPS_META.padding,
  paddingInline: BOX_PROPS_META.paddingInline,
  paddingBlock: BOX_PROPS_META.paddingBlock,
  paddingTop: BOX_PROPS_META.paddingTop,
  paddingRight: BOX_PROPS_META.paddingRight,
  paddingBottom: BOX_PROPS_META.paddingBottom,
  paddingLeft: BOX_PROPS_META.paddingLeft,
  heading: {
    options: ['string', 'JSX.Element'],
    isRequired: true,
    isResponsive: false,
    description:
      "Defines the section's heading, provided as a plain string or a JSX element (typically a Text component for consistent typography).",
  },
  hideDivider: {
    options: ['boolean'],
    defaultValue: 'false',
    isRequired: false,
    isResponsive: false,
    description: 'Controls the visibility of the divider below the heading.',
  },
}

export { SECTION_PROPS_META }
