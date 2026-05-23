import { PAGE_SECTIONS } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'
import { Box, Button, Flex, Grid, Link, Section, Spacer, Text } from 'lib/components'
import { IconName } from 'lib/definitions'

const Family = ({
  heading,
  description,
  iconName,
  components,
}: {
  heading: string
  description: string
  iconName: IconName
  components: string[]
}) => {
  const navigateTo = useNavigateTo()

  return (
    <Box drawable variant="ghost" intent="primary" brand="blue">
      <Section size="md" variant="outline" intent="tertiary" heading={heading} iconName={iconName}>
        <Text intent="neutral">{description}</Text>
        {components ? (
          <>
            <Spacer blockSize="md" />
            <Flex gap="xs">
              {components.map(c => {
                const { pageKey, categoryKey, itemKey } = PAGE_SECTIONS.find(s => s.itemKey === c.toLowerCase())
                const href = `/${pageKey}/${categoryKey}/${itemKey}/overview`
                return (
                  <Link key={c} href={href} onClick={() => navigateTo(href)}>
                    <Button size="sm" variant="solid" intent="tertiary" iconName="box" iconPlacement="right">
                      {c}
                    </Button>
                  </Link>
                )
              })}
            </Flex>
          </>
        ) : null}
      </Section>
    </Box>
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
      gap="sm"
    >
      <Family
        heading="Primitives"
        description="All foundational building blocks are exposed for composing UI, allowing application interfaces to be assembled quickly through consistent and predictable composition."
        iconName="puzzle"
        components={['Box', 'Text']}
      />
      <Family
        heading="Layout"
        description="Powerful layout components make arranging UI straightforward by using well-known techniques like Flexbox or CSS Grid."
        iconName="panel-top-bottom-dashed"
        components={['Flex', 'Grid']}
      />
      <Family
        heading="Navigation"
        description="A range of navigational components makes it possible to handle different view transitions."
        iconName="square-menu"
        components={['Breadcrumb', 'Pagination']}
      />
      <Family
        heading="Forms"
        description="Form components simplify form bootstrapping while remaining consistent with system surfaces and UI."
        iconName="text-select"
        components={['Form', 'Input']}
      />
    </Grid>
  )
}
