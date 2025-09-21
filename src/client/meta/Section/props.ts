import { ComponentMeta } from 'client/definitions'
import { SectionOwnProps } from 'lib/components/containers/Section/definitions'

export default {
  heading: {
    name: 'heading',
    options: ['string', 'JSX.Element'],
    isRequired: true,
    isResponsive: false,
    description:
      "Defines the section's heading, provided as a plain string or a JSX element (typically a Text component for consistent typography).",
  },
  hideDivider: {
    name: 'hideDivider',
    options: ['boolean'],
    defaultValue: 'false',
    isRequired: false,
    isResponsive: false,
    description: 'Controls the visibility of the divider below the heading.',
  },
} as ComponentMeta<SectionOwnProps>['props']
