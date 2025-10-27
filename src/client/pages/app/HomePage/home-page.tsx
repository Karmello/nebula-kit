import { sentenceCase } from 'change-case'

import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  LinkButton,
  Section,
  Select,
  Spacer,
  Text,
} from 'lib/components'

import { useNebkitStore } from 'lib/state'
import { Brand, BRANDS, ScaleValue, THEME } from 'lib/definitions'
import { useNavigateTo } from 'client/services'

export const HomePage = () => {
  const navigateTo = useNavigateTo()

  const { theme, setTheme, brand, setBrand, borderWidth, setBorderWidth, borderRadius, setBorderRadius } =
    useNebkitStore()

  return (
    <Box padding={{ base: 20, lg: 50 }}>
      <Flex flexDirection={{ base: 'column', lg: 'row' }} rowGap={80} columnGap={160}>
        <Flex.Item flex={2}>
          <Text typography="h1" intent="primary">
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
          <ButtonGroup gap={10}>
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
          <Spacer blockSize={50} />
          <Divider />
          <Spacer blockSize={30} />
          <Flex flexWrap="wrap" gap={30}>
            <Flex.Item>
              <Text bold>Theme</Text>
              <ButtonGroup key={theme} attached size="sm" intent="primary">
                {THEME.map(key => (
                  <Button
                    key={key}
                    intent={key === theme ? 'primary' : 'tertiary'}
                    tagAttrs={{ onClick: () => setTheme(key) }}
                  >
                    {sentenceCase(key)}
                  </Button>
                ))}
              </ButtonGroup>
            </Flex.Item>
            <Flex.Item>
              <Text bold>Brand</Text>
              <Select
                options={BRANDS.map(brand => ({ value: brand, label: sentenceCase(brand) }))}
                value={brand}
                onChange={value => setBrand(value as Brand)}
                inlineSize="150px"
                size="sm"
              />
            </Flex.Item>
            <Flex.Item>
              <Text bold>Border width</Text>
              <Select
                options={Array.from({ length: 2 }, (v, k) => k).map(k => ({
                  value: String(k + 1),
                  label: String(k + 1),
                }))}
                value={String(borderWidth)}
                onChange={value => setBorderWidth(Number(value) as never)}
                inlineSize="150px"
                size="sm"
              />
            </Flex.Item>
            <Flex.Item>
              <Text bold>Border radius</Text>
              <Select
                options={Array.from({ length: 6 }, (v, k) => String(k)).map(k => ({ value: k, label: k }))}
                value={String(borderRadius)}
                onChange={value => setBorderRadius(Number(value) as ScaleValue)}
                inlineSize="150px"
                size="sm"
              />
            </Flex.Item>
          </Flex>
        </Flex.Item>
        <Flex.Item flex={1}>
          <Flex flexDirection="column" gap={30}>
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
