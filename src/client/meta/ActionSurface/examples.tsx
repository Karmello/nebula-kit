import { ComponentMeta } from 'client/definitions'
import { ActionSurface, type ActionSurfaceProps } from 'lib/components'

const ACTION_SURFACE_EXAMPLES_META: ComponentMeta<ActionSurfaceProps>['examples'] = [
  {
    description: 'Default ActionSurface.',
    jsx: <ActionSurface heading="Heading text" />,
  },
  {
    description: 'ActionSurface with description text.',
    jsx: <ActionSurface heading="Heading text" description="Description text" />,
  },
  {
    description: 'Large size ActionSurface.',
    jsx: <ActionSurface heading="Heading text" description="Description text" size="lg" />,
  },
  {
    description: 'ActionSurface with bold heading and italic description.',
    jsx: <ActionSurface heading="Heading text" description="Description text" boldHeading italicDescription />,
  },
  {
    description: 'ActionSurface with custom inlineSize.',
    jsx: <ActionSurface heading="Heading text" description="Description text" boldHeading italicDescription inlineSize="250px" />,
  },
  {
    description: 'ActionSurface with trailing icon.',
    jsx: (
      <ActionSurface
        heading="Heading text"
        description="Description text"
        boldHeading
        italicDescription
        iconName="puzzle"
        iconPlacement="right"
        inlineSize="250px"
      />
    ),
  },
  {
    description: 'ActionSurface with inline trailing icon.',
    jsx: (
      <ActionSurface
        heading="Heading text"
        description="Description text"
        boldHeading
        italicDescription
        iconName="puzzle"
        iconPlacement="right"
        inlineSize="250px"
        inlineTrailingIcon
      />
    ),
  },
  {
    description: 'Disabled ActionSurface.',
    jsx: (
      <ActionSurface
        heading="Heading text"
        description="Description text"
        boldHeading
        italicDescription
        inlineSize="250px"
        disabled
      />
    ),
  },
  {
    description: 'ActionSurface in loading state.',
    jsx: (
      <ActionSurface
        heading="Heading text"
        description="Description text"
        boldHeading
        italicDescription
        inlineSize="250px"
        loading
      />
    ),
  },
  {
    description: 'Center aligned ActionSurface.',
    jsx: (
      <ActionSurface
        heading="Heading text"
        description="Description text"
        boldHeading
        italicDescription
        inlineSize="250px"
        textAlign="center"
      />
    ),
  },
  {
    description: 'Full width ActionSurface.',
    jsx: <ActionSurface heading="Heading text" description="Description text" boldHeading italicDescription fullWidth />,
  },
]

export { ACTION_SURFACE_EXAMPLES_META }
