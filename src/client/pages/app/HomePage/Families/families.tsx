import { Grid, Section, Text } from 'lib/components'
import { IconName } from 'lib/definitions'

const Family = ({
  heading,
  description,
  iconName,
}: {
  heading: string
  description: string
  iconName: IconName
}) => {
  return (
    <Section variant="soft-outline" intent="primary" color="blue" heading={heading} iconName={iconName}>
      <Text intent="neutral">{description}</Text>
    </Section>
  )
}

export const Families = () => {
  return (
    <Grid
      gridTemplateColumns={{
        base: '1fr',
        md: 'repeat(2, 1fr)',
        xl: 'repeat(4, 1fr)',
      }}
      gap="20px"
    >
      <Family
        heading="Primitives"
        description="All low-level building blocks are exposed for composing UI, allowing custom interfaces to be assembled quickly with full control and predictability."
        iconName="puzzle"
      />
      <Family
        heading="Layout"
        description="Powerful layout components make arranging UI straightforward by using well-known techniques like flexbox or grid."
        iconName="panel-top-bottom-dashed"
      />
      <Family
        heading="Navigation"
        description="A range of navigational components makes it possible to handle application flow in various ways."
        iconName="square-menu"
      />
      <Family
        heading="Forms"
        description="Form components simplify form bootstrapping while remaining consistent with system surfaces and UI."
        iconName="text-select"
      />
    </Grid>
  )
}
