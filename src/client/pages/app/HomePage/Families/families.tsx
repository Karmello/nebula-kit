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
      <Section size="sm" variant="outline" intent="tertiary" heading={heading} iconName={iconName}>
        <Text intent="neutral">{description}</Text>
        {components ? (
          <>
            <Spacer blockSize="25px" />
            <Flex gap="7px">
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
    <Section heading="Key areas of the system" size="sm" intent="primary" color="blue">
      <Spacer blockSize="15px" />
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
    </Section>
  )
}
