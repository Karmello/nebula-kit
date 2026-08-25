import { kebabCase } from 'change-case'

import { Box, Button, Link, NEB_LENGTH, Section, Spacer, Text } from 'lib/components'
import { type IconName } from 'lib/components/core/Icon/types'
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
            <Spacer blockSize={NEB_LENGTH.px_024} />
            <Box display="flex" gap={NEB_LENGTH.px_008}>
              {components.map(c => {
                const { pageKey, categoryKey, itemKey } = PAGE_SECTIONS.find(
                  s => s.itemKey === kebabCase(c)
                )
                const href = `/${pageKey}/${categoryKey}/${itemKey}/overview`
                return (
                  <Link key={c} href={href} onClick={() => navigateTo(href)}>
                    <Button
                      scale="sm"
                      variant="solid"
                      intent="tertiary"
                      iconName="box"
                      iconPlacement="right"
                    >
                      {c}
                    </Button>
                  </Link>
                )
              })}
            </Box>
          </>
        ) : null}
      </Section>
    </Box>
  )
}

export const Families = () => {
  return (
    <Box
      display="grid"
      gridTemplateColumns={{
        base: '1fr',
        md: 'repeat(2, 1fr)',
        xl: 'repeat(4, 1fr)',
      }}
      gap={NEB_LENGTH.px_016}
    >
      <Family
        heading="Primitives"
        description="Primitive components are the simplest building blocks that lets you create higher level components just the way you want."
        iconName="box"
        components={['Box', 'Text', 'Icon']}
      />
      <Family
        heading="Form"
        description="Form elements provide consistent controls for collecting and selecting user input."
        iconName="text-select"
        components={['Input', 'Select']}
      />
      <Family
        heading="Overlays"
        description="Overlay components handle layered UI patterns like dialogs, tooltips and floating surfaces."
        iconName="layers"
        components={['Dialog', 'Tooltip']}
      />
      <Family
        heading="Motion"
        description="Motion components lets you add simple animations without a need for a third party library."
        iconName="orbit"
        components={['Resize', 'Scale']}
      />
    </Box>
  )
}
