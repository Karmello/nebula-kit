import { ComponentMeta } from 'client/definitions'
import { FlexItemOwnProps } from 'lib/components/layout-base/Flex/FlexItem/definitions'
import { CssFlexItemAlignSelf } from 'lib/definitions'

export default [
  {
    name: 'flex',
    options: ['CSS'],
    defaultValue: '0 1 auto',
    isRequired: false,
    isResponsive: true,
    description: 'defines how the item grows, shrinks, and sets its base size within the Flex container',
  },
  {
    name: 'flexGrow',
    options: ['CSS'],
    defaultValue: '0',
    isRequired: false,
    isResponsive: true,
    description:
      'controls how much the item can grow relative to the other items when extra space is available',
  },
  {
    name: 'flexShrink',
    options: ['CSS'],
    defaultValue: '1',
    isRequired: false,
    isResponsive: true,
    description: 'controls how much the item can shrink relative to the other items when space is limited',
  },
  {
    name: 'flexBasis',
    options: ['CSS'],
    defaultValue: 'auto',
    isRequired: false,
    isResponsive: true,
    description: "sets the item's initial main-size before free space is distributed",
  },
  {
    name: 'alignSelf',
    options: CssFlexItemAlignSelf as unknown as string[],
    defaultValue: 'auto',
    isRequired: false,
    isResponsive: true,
    description: "overrides the container's alignItems value for this specific item",
  },
  {
    name: 'order',
    options: ['CSS'],
    defaultValue: '0',
    isRequired: false,
    isResponsive: true,
    description: "defines the item's order relative to other flex items, independent of source order",
  },
] as ComponentMeta<FlexItemOwnProps>['ownProps']
