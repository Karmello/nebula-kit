import { kebabCase } from 'change-case'

import { Box, Button, Flex, Grid, Link, Section, Spacer, Text } from 'lib/components'
import { IconName } from 'lib/types'
import { PAGE_SECTIONS } from 'client/definitions'
import { useNavigateTo } from 'client/hooks'

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
                const { pageKey, categoryKey, itemKey } = PAGE_SECTIONS.find(s => s.itemKey === kebabCase(c))
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
        heading="Layout"
        description="Powerful layout components make arranging UI straightforward by using well-known techniques like Flexbox or CSS Grid."
        iconName="panel-top-bottom-dashed"
        components={['Flex', 'Grid']}
      />
      <Family
        heading="Overlays"
        description="Overlay components handle layered UI patterns like dialogs, tooltips and floating surfaces."
        iconName="layers"
        components={['Dialog', 'Tooltip']}
      />
      <Family
        heading="Content"
        description="Content components provide consistent ways to display text, icons and structured information."
        iconName="square-menu"
        components={['Text', 'Icon']}
      />
      <Family
        heading="Form elements"
        description="Form elements provide consistent controls for collecting and selecting user input."
        iconName="text-select"
        components={['Input', 'Select']}
      />
    </Grid>
  )
}
