import { sentenceCase } from 'change-case'

import { Box, Divider, Flex, Button, Link, Section, Select, Spacer, Text, Segment } from 'lib/components'

import { useNebkitStore } from 'lib/state'
import { Color, COLORS, THEMES } from 'lib/definitions'
import { useNavigateTo } from 'client/services'

import {
  NEBKIT_BORDER_RADIUS_SIZES,
  NEBKIT_BORDER_WIDTH_SIZES,
} from 'lib/components/utility/NebkitProvider/definitions'

export const HomePage = () => {
  const navigateTo = useNavigateTo()

  const {
    theme,
    setTheme,
    brand,
    setBrand,
    borderWidthSize,
    setBorderWidthSize,
    borderRadiusSize,
    setBorderRadiusSize,
  } = useNebkitStore()

  return (
    <Box padding={{ base: 20, lg: 50 }}>
      <Flex flexDirection={{ base: 'column', lg: 'row' }} rowGap={80} columnGap={160}>
        <Flex.Item flex={2}>
          <Text typography="h1" color="purple" intent="primary">
            NebulaKit
          </Text>
          <Divider />
          <Spacer blockSize={20} />
          <Text typography="h6">
            React UI system built on composition - small, consistent parts combining into larger structures
            with clarity and control. Each component follows the same foundation, producing apps that stay
            predictable, stable and effortless to scale.
          </Text>
          <Spacer blockSize={30} />
          <Flex gap={10} flexWrap="wrap">
            <Link
              href="/foundations"
              onClick={() => {
                navigateTo('/foundations')
              }}
            >
              <Button color="purple" intent="primary" iconName="arrow-right" iconPosition="right" size="sm">
                Foundations
              </Button>
            </Link>
            <Link
              href="/components"
              onClick={() => {
                navigateTo('/components')
              }}
            >
              <Button
                variant="ghost"
                color="purple"
                intent="primary"
                iconName="arrow-right"
                iconPosition="right"
                size="sm"
              >
                Components
              </Button>
            </Link>
          </Flex>
          <Spacer blockSize={50} />
          <Divider />
          <Spacer blockSize={30} />
          <Flex flexWrap="wrap" gap={30}>
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
              <Text bold>Border width</Text>
              <Select
                value={borderWidthSize}
                onChange={value => setBorderWidthSize(value as never)}
                inlineSize="150px"
                size="sm"
                scrollAlign="center"
              >
                {NEBKIT_BORDER_WIDTH_SIZES.map(n => (
                  <Select.Option value={n}>{n}</Select.Option>
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
        <Flex.Item flex={1}>
          <Flex flexDirection="column" gap={30}>
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
