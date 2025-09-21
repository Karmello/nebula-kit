import { ComponentMeta } from 'client/definitions'
import { SectionOwnProps } from 'lib/components/containers/Section/definitions'

const SECTION_PROPS_META: ComponentMeta<SectionOwnProps>['props'] = {
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
