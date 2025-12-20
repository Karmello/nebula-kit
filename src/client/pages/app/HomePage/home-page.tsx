import { sentenceCase } from 'change-case'

import {
  Box,
  Divider,
  Flex,
  Button,
  Link,
  Section,
  Select,
  Spacer,
  Text,
  Segment,
  Callout,
} from 'lib/components'

import { NEBKIT_BORDER_RADIUS_SIZES } from 'lib/components/core/utility/NebkitProvider/definitions'
import { Color, COLORS, THEMES } from 'lib/definitions'
import { useNebkitStore } from 'lib/state'
import { useNavigateTo } from 'client/hooks'
import { PageKey } from 'client/definitions'

import { Ortho } from './Ortho'

export const HomePage = () => {
  const navigateTo = useNavigateTo()

  const { theme, setTheme, brand, setBrand, borderRadiusSize, setBorderRadiusSize } = useNebkitStore()

  return (
    <Box padding={{ base: '20px', lg: '50px' }} paddingTop="0px">
      <Callout
        size="sm"
        variant="outline"
        content="NebulaKit Core and Pro are scheduled to be released soon. Meanwhile you can explore the website. Everything is fully functional except package downloads, which will become available once the release goes live."
        heading="NebulaKit is scheduled for release in January 2026."
      />
      <Spacer blockSize="75px" />
      <Flex flexDirection={{ base: 'column', lg: 'row' }} rowGap="80px" columnGap="160px">
        <Flex.Item flex="2">
          <Text typography="h1" color="purple" intent="primary">
            NebulaKit
          </Text>
          <Divider />
          <Spacer blockSize="20px" />
          <Flex
            columnGap="25px"
            rowGap="50px"
            alignItems="center"
            flexDirection={{ base: 'column', md: 'row', lg: 'column', xl: 'row' }}
          >
            <Flex.Item>
              <Text typography="h6">
                React UI system built on composition - small, consistent parts combining into larger
                structures with clarity and control. Each component follows the same foundation, producing
                apps that stay predictable, stable and effortless to scale.
              </Text>
              <Spacer blockSize="30px" />
              <Flex gap="10px" flexWrap="wrap">
                <Link
                  href={PageKey.playground}
                  onClick={() => {
                    navigateTo(PageKey.playground)
                  }}
                >
                  <Button
                    color="purple"
                    intent="primary"
                    iconName="arrow-right"
                    iconPosition="right"
                    size="sm"
                  >
                    Playground
                  </Button>
                </Link>
              </Flex>
            </Flex.Item>
            <Flex.Item>
              <img
                src="/captain-nebula.webp"
                width="175px"
                height="175px"
                alt="Captain Nebula"
                fetchPriority="high"
              />
            </Flex.Item>
          </Flex>
          <Divider marginBlock="50px" />
          <Box marginInline="50px">
            <Flex
              flexWrap="wrap"
              alignItems="center"
              gap="60px"
              justifyContent="center"
              flexDirection={{ base: 'column-reverse', md: 'row' }}
            >
              <Flex.Item>
                <Ortho />
              </Flex.Item>
              <Flex.Item flex="1">
                <Flex flexWrap="wrap" gap="30px" justifyContent="center">
                  <Flex.Item>
                    <Text bold>Theme</Text>
                    <Segment key={theme}>
                      {THEMES.map(key => (
                        <Segment.Item key={key}>
                          <Button
                            intent={key === theme ? 'inverse' : 'tertiary'}
                            size="sm"
                            tagAttrs={{ onClick: () => setTheme(key) }}
                          >
                            {sentenceCase(key)}
                          </Button>
                        </Segment.Item>
                      ))}
                    </Segment>
                  </Flex.Item>
                  <Flex.Item>
                    <Text bold>Brand</Text>
                    <Select
                      value={brand}
                      onChange={value => setBrand(value as Color)}
                      inlineSize="150px"
                      size="sm"
                      scrollAlign="center"
                    >
                      {COLORS.map(brand => (
                        <Select.Option value={brand}>{sentenceCase(brand)}</Select.Option>
                      ))}
                    </Select>
                  </Flex.Item>
                  <Flex.Item>
                    <Text bold>Border radius</Text>
                    <Select
                      value={borderRadiusSize}
                      onChange={value => setBorderRadiusSize(value as never)}
                      inlineSize="150px"
                      size="sm"
                      scrollAlign="center"
                    >
                      {NEBKIT_BORDER_RADIUS_SIZES.map(n => (
                        <Select.Option value={n}>{n}</Select.Option>
                      ))}
                    </Select>
                  </Flex.Item>
                </Flex>
              </Flex.Item>
            </Flex>
          </Box>
        </Flex.Item>
        <Flex.Item flex="1">
          <Flex flexDirection="column" gap="30px">
            <Section heading="One foundation" color="red" intent="primary" iconName="box">
              <Text intent="neutral">
                Every component shares the same core primitives. Consistency isn't enforced - it's designed
                in.
              </Text>
            </Section>
            <Section heading="Systemic growth" color="red" intent="primary" iconName="tree-pine">
              <Text intent="neutral">
                Higher-order components extend existing logic instead of reinventing it. As the system
                expands, elements remain clear and composed.
              </Text>
            </Section>
            <Section heading="Predictable behavior" color="red" intent="primary" iconName="orbit">
              <Text intent="neutral">
                Shared patterns mean fewer surprises - changes flow cleanly through the system.
              </Text>
            </Section>
            <Section heading="Visual coherence" color="red" intent="primary" iconName="blend">
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
