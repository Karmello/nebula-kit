import { ComponentMeta } from 'client/definitions'
import { BOX_PROPS_META } from 'client/meta/Box/props'
import { HTML_TAG_PROPS_META } from 'client/meta/HtmlTag/props'
import { FlexItemProps } from 'lib/components'
import { CSS_FLEX_ITEM_ALIGN_SELF } from 'lib/definitions'

const FLEX_ITEM_PROPS_META: ComponentMeta<FlexItemProps>['props'] = {
  ...HTML_TAG_PROPS_META,
  alignSelf: {
    options: CSS_FLEX_ITEM_ALIGN_SELF,
    isResponsive: true,
    description: "Overrides the parent container's alignItems value for this specific item.",
    link: true,
    tooltip: CSS_FLEX_ITEM_ALIGN_SELF,
  },
  children: {
    ...HTML_TAG_PROPS_META.children,
    isRequired: true,
  },
  flex: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Shorthand for flex-grow, flex-shrink and flex-basis.',
    link: true,
  },
  flexBasis: {
    options: ['CSS'],
    isResponsive: true,
    description: "Sets the item's initial main-size before free space is distributed.",
    link: true,
  },
  flexGrow: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Controls how much the item can grow relative to the other items when extra space is available.',
    link: true,
  },
  flexShrink: {
    options: ['CSS'],
    isResponsive: true,
    description: 'Controls how much the item can shrink relative to the other items when space is limited.',
    link: true,
  },
  hidden: BOX_PROPS_META.hidden,
  order: {
    options: ['CSS'],
    isResponsive: true,
    description: "Defines the item's order relative to other items, independent of source order.",
    link: true,
  },
}

export { FLEX_ITEM_PROPS_META }
