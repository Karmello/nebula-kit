import { Box, Button, ButtonGroup, Divider, Flex, LinkButton, Section, Spacer, Text } from 'lib/components'
import { useNebkitStore } from 'lib/state'
import { useNavigateTo } from 'client/services'

export const HomePage = () => {
  const navigateTo = useNavigateTo()

  const { theme, setTheme, brand, setBrand } = useNebkitStore()

  return (
    <Box padding={{ base: 10, lg: 25 }}>
      <Flex flexDirection={{ base: 'column', lg: 'row' }} rowGap={40} columnGap={80}>
        <Flex.Item flex={2}>
          <Text typography="h1" intent="primary">
            NebulaKit
          </Text>
          <Divider />
          <Spacer blockSize={10} />
          <Text typography="h6">
            React UI system built on composition - small, consistent parts combining into larger structures
            with clarity and control. Each component follows the same foundation, producing apps that stay
            predictable, stable and effortless to scale.
          </Text>
          <Spacer blockSize={15} />
          <ButtonGroup gap={5}>
            <LinkButton
              intent="primary"
              iconName="arrow-right"
              size="sm"
              href="/foundations"
              onClick={() => {
                navigateTo('/foundations')
              }}
            >
              Foundations
            </LinkButton>
            <LinkButton
              variant="outline"
              intent="primary"
              iconName="arrow-right"
              size="sm"
              href="/components"
              onClick={() => {
                navigateTo('/components')
              }}
            >
              Components
            </LinkButton>
          </ButtonGroup>
          <Spacer blockSize={25} />
          <Divider />
          <Spacer blockSize={15} />
          <Flex gap={15}>
            <Flex.Item>
              <Text bold>Theme</Text>
              <ButtonGroup key={theme} attached size="sm" intent="primary">
                <Button
                  intent={theme === 'light' ? 'primary' : 'tertiary'}
                  tagAttrs={{ onClick: () => setTheme('light') }}
                >
                  Light
                </Button>
                <Button
                  intent={theme === 'dark' ? 'primary' : 'tertiary'}
                  tagAttrs={{ onClick: () => setTheme('dark') }}
                >
                  Dark
                </Button>
              </ButtonGroup>
            </Flex.Item>
            <Flex.Item>
              <Text bold>Brand</Text>
              <ButtonGroup key={brand} attached size="sm" intent="primary">
                <Button
                  intent={brand === 'gray' ? 'primary' : 'tertiary'}
                  tagAttrs={{ onClick: () => setBrand('gray') }}
                >
                  Gray
                </Button>
                <Button
                  intent={brand === 'blue' ? 'primary' : 'tertiary'}
                  tagAttrs={{ onClick: () => setBrand('blue') }}
                >
                  Blue
                </Button>
                <Button
                  intent={brand === 'red' ? 'primary' : 'tertiary'}
                  tagAttrs={{ onClick: () => setBrand('red') }}
                >
                  Red
                </Button>
                <Button
                  intent={brand === 'green' ? 'primary' : 'tertiary'}
                  tagAttrs={{ onClick: () => setBrand('green') }}
                >
                  Green
                </Button>
              </ButtonGroup>
            </Flex.Item>
          </Flex>
        </Flex.Item>
        <Flex.Item flex={1}>
          <Flex flexDirection="column" gap={15}>
            <Section heading="One foundation" intent="primary" iconName="box">
              <Text intent="neutral">
                Every component shares the same core primitives. Consistency isn't enforced - it's designed
                in.
              </Text>
            </Section>
            <Section heading="Systemic growth" intent="primary" iconName="tree-pine">
              <Text intent="neutral">
                Higher-order components extend existing logic instead of reinventing it. As the system
                expands, elements remain clear and composed.
              </Text>
            </Section>
            <Section heading="Predictable behavior" intent="primary" iconName="orbit">
              <Text intent="neutral">
                Shared patterns mean fewer surprises - changes flow cleanly through the system.
              </Text>
            </Section>
            <Section heading="Visual coherence" intent="primary" iconName="blend">
              <Text intent="neutral">
                Common building blocks keep layout and rhythm consistent across the system.
              </Text>
            </Section>
          </Flex>
        </Flex.Item>
      </Flex>
    </Box>
  )
}
